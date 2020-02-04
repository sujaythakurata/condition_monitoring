function pump_controller($scope){
        console.log($scope);
};


app.component('pumpApp', {
    templateUrl: "../view/pump.html",
    controller: pump_controller,
});