const app = angular.module("main",['ngRoute','pump',"pump_des"]);
app.controller("main_controller",($scope, $http)=>{
    console.log($scope);
});