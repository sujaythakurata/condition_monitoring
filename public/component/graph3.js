pump_des.controller('graph_ctrl_3',function($scope){
    $scope.data = [[7,3,10,7,3,10,7,3,10,7,3,10]];
    $scope.labels = [1,2,3,1,2,3,1,2,3,1,2,3];
    $scope.datasetConfig=[{
        label:"label1",
        borderWidth: 1,
        borderColor: '#58c8fc',
        backgroundColor: '#58c8fc',
        fill: false,
        borderCapStyle: 'butt',
        id: 'y-axis-1',
        lineTension: 0,
    },
    {
        id: 'y-axis-2'
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
                    labelString: '| P1(f) |',
                    fontColor: 'black'
                  },
                gridLines:{
                    color: 'rgba(0,0,0,1)',
                    drawOnChartArea: false,
                    drawTicks: false,
                },
                ticks:{
                    beginAtZero: true,
                    steps: 5,
                    stepValue: 5,
                    max: 15,
                    fontColor: 'black',
                    padding: 5,
                },
            },
              {
                id: 'y-axis-2',
                type: 'linear',
                display: true,
                position: 'right',
                gridLines:{
                    color: 'rgba(0,0,0,1)',
                    drawTicks: false,
                    drawOnChartArea: false,
                },
                ticks:{
                    beginAtZero: true,
                    steps: 5,
                    stepValue: 5,
                    max: 15,
                    fontColor: 'black',
                    display: false,
                },
              }],
            xAxes:[{
                ticks:{
                    fontColor: 'black',
                    padding: 5,
                },
                scaleLabel: {
                    display: true,
                    labelString: 'f (HZ)',
                    fontColor: 'black'
                  },
                  gridLines:{
                    color: 'rgba(0,0,0,1)',
                    drawOnChartArea: false,
                    drawTicks: false,
                }
            }]
        },
        "animation":{
            "onComplete": function(){
            },
            duration: 0,
        }
    }
})