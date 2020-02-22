pump_des.controller('graph_ctrl_2',function($scope){

    //determine which tab
    let tab = true;

    //initilize the checkbok and set it ture
    $scope.x_axis = true;
    $scope.y_axis = true;
    $scope.z_axis = true

    //trigger when x_axis data will change
    $scope.$watch('x_axis', function(newv, oldv){
            if ($scope.x_axis==true)
            $scope.datasetConfig[0].hidden = false;
            else
            $scope.datasetConfig[0].hidden = true;
    });

    //trigger when y_axis data will change
    $scope.$watch('y_axis', function(newv, oldv){
            if ($scope.y_axis==true)
            $scope.datasetConfig[1].hidden = false;
            else
            $scope.datasetConfig[1].hidden = true;
    });


    //trigger when z_axis data will change
    $scope.$watch('z_axis', function(newv, oldv){
            if ($scope.z_axis==true)
            $scope.datasetConfig[2].hidden = false;
            else
            $scope.datasetConfig[2].hidden = true;
    });


    //receive the data and process it
    socket.on("acc_data", (data)=>{

        //every time initilize the array
        $scope.data = [[], [], []];
        $scope.labels = [];

        //store the data here 
        for(let i= data.length-1;i>=0;i--){
            if(tab){
                $scope.datasetConfig[0].label = "Gx";
                $scope.datasetConfig[1].label = "Gy";
                $scope.datasetConfig[2].label = "Gz";
                $scope.data[0].push(data[i].Gx);
                $scope.data[1].push(data[i].Gy);
                $scope.data[2].push(data[i].Gz);
            }else{
                $scope.datasetConfig[0].label = "Ax";
                $scope.datasetConfig[1].label = "Ay";
                $scope.datasetConfig[2].label = "Az";
                $scope.data[0].push(data[i].Ax);
                $scope.data[1].push(data[i].Ay);
                $scope.data[2].push(data[i].Az);
            }
            $scope.labels.push(data[i].M);
        }
    //apply the data changes into the graph
        $scope.$apply();
    });

    //set graph color
    $scope.color = ["#ff0011", "#0055ff", "#48ff00"];

    //grpah dataset 
    $scope.datasetConfig=[{
        label:"Gx",
        borderWidth: 2,
        borderColor: '#ff0011',
        fill: false,
        lineTension: 0,
        hidden: false,
    },
    {
        label:"Gy",
        borderWidth: 2,
        borderColor: '#0055ff',
        fill: false,
        lineTension: 0,
        hidden: false ,
    },
    {
        label:"Gz",
        borderWidth: 2,
        borderColor: '#48ff00',
        fill: false,
        lineTension: 0,
        hidden: false ,
    }];

    //graph options
    $scope.option = {
        responsive: true,
        elements:{
            point: {
                radius: 0,
            }
        },
        tooltips: {
            enabled: true,
       },
        scales:{
            yAxes:[{
                scaleLabel: {
                    display: true,
                    labelString: 'ACCELERATION (g)',
                    fontColor: 'black',
                  },
                gridLines:{
                    color: 'rgba(0,0,0,.4)',
                    zeroLineWidth: 0,
                    drawTicks: false,
                },
                ticks:{
                    fontColor: 'black',
                    padding: 5,
                    stepSize:.1,
                },
            }],
            xAxes:[{
                ticks:{
                    display:false,
                },
                  gridLines:{
                    color: 'rgba(0,0,0,.4)',
                    drawTicks: false,
                    zeroLineWidth: .1,
                    zeroLineColor: 'rgb(0,0,0)',
                    offsetGridLines: true,
                    drawOnChartArea: false,
                }
            }]
        },
        animation:{
            duration: 0,
        },
    }


//tab animation 

$scope.slide = (pos)=>{
    const slider = document.getElementsByClassName("graph2")[0].
    getElementsByClassName("banner")[0].
    getElementsByClassName("col");

    //if pos = 1 the accelation tab will active else vibration tab
    if(pos){
    slider[1].style.backgroundColor = "#5399e9";
    slider[1].style.color = "#ffffff";
    slider[0].style.backgroundColor = "#e2e4e6";
    slider[0].style.color = "#000000";
    tab = false;
    }
    else{
    slider[0].style.backgroundColor = "#5399e9";
    slider[0].style.color = "#ffffff";
    slider[1].style.backgroundColor = "#e2e4e6";
    slider[1].style.color = "#000000";
    tab = true;
    }
};



});