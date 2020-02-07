pump_des.controller('graph_ctrl_1',function($scope){
    $scope.data = [[7,3,10,7,3,10,7,3,10,7,3,10],[1,2,3,1,2,3,1,2,3,1,2,3]];
    $scope.labels = [1,2,3,1,2,3,1,2,3,1,2,3];
    $scope.datasetConfig=[{
        label:"label1",
        borderWidth: 3,
        borderColor: 'red',
        backgroundColor: 'red',
        fill: false,
        borderCapStyle: 'butt'
    },
    {
        label:"label2",
        borderWidth: 1,
        borderColor: 'black',
        fill: false,
        lineTension: 0,
        borderCapStyle: 'butt',
        backgroundColor: 'black'

    }];
    $scope.option = {
        maintainAspectRatio: false,
        aspectRatio: 1,
        tooltips: {
            enabled: true,
       },
        scales:{
            yAxes:[{
                gridLines:{
                    color: 'rgba(0,0,0,.4)'
                },
                ticks:{
                    beginAtZero: true,
                    steps: 5,
                    stepValue: 5,
                    max: 15,
                    fontColor: 'black'
                },
            }],
            xAxes:[{
                ticks:{
                    fontColor: 'black'
                },
                scaleLabel: {
                    display: true,
                    labelString: 'FREQUENCY (HZ)',
                    fontColor: 'black'
                  },
                  gridLines:{
                    color: 'rgba(0,0,0,.4)'
                }
            }]
        },
        "animation":{
            "onComplete": function(){
                const ctx = this.chart.ctx;
                ctx.globalAlpha = 0.5;
                ctx.fillStyle = "red";
                ctx.fillRect(30,6,ctx.canvas.width-35,50);
                ctx.globalAlpha = 1;
                ctx.fillStyle = "white";
                ctx.textAlign = "center";
                ctx.font = "500 2em arial";
                ctx.textAlign = "center";
                ctx.fillText("Warning Zone",ctx.canvas.width/2,40);
            },
            duration: 0,
        }
    }
})