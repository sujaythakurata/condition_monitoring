app.config(function($routeProvider){
    $routeProvider.
    when("/",{
        templateUrl: "../view/pump.html",
        controller: "pump_controller"
    })
    .when("/pump_des",{
        templateUrl: "../view/pump_des.html",
        controller: "pump_des_controller"      
    })
});