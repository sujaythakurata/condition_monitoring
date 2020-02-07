pump_des.controller('graph_ctrl_2',function($scope){
    $scope.data = [[1,2,3,1,2,3,1,2,3],[7,8,9,7,8,9,7,8,9],[9,10,6,9,10,6,9,10,6]];
    $scope.labels = [1,2,3,1,2,3,1,2,3];
    $scope.datasetConfig=[{
        label:"label1",
        borderWidth: 1,
        borderColor: 'red',
        backgroundColor: 'red',
        fill: false,
        borderCapStyle: 'butt',
        lineTension: 0,
    },
    {
        label:"label2",
        borderWidth: 1,
        borderColor: 'green',
        backgroundColor: 'green',
        fill: false,
        borderCapStyle: 'butt',
        lineTension: 0,
    },
    {
        label:"label1",
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'black',
        fill: false,
        borderCapStyle: 'butt',
        lineTension: 0,
    }];
    $scope.option = {
        maintainAspectRatio: false,
        aspectRatio: 1,
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
                    beginAtZero: true,
                    steps: 10,
                    stepValue: 2,
                    max: 20,
                    fontColor: 'black',
                    padding: 5,
                },
            }],
            xAxes:[{
                ticks:{
                    display:false,
                },
                  gridLines:{
                    color: 'rgba(0,0,0,.4)',
                    drawTicks: false,
                    zeroLineWidth: 3,
                    zeroLineColor: 'rgb(0,0,0)'
                }
            }]
        },
    }
})