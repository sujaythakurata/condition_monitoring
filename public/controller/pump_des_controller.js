const pump_des = angular.module("pump_des",["chart.js"]);
pump_des.controller("pump_des_controller",function($scope){
	socket.on("msg", (msg)=>{
		$scope.$apply(function(){
			$scope.ax = msg[0].Ax;
			$scope.ay = msg[0].Ay;
			$scope.az = msg[0].Az;
			$scope.mt = msg[0].MT;
		});
    });

});
