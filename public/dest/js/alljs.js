angular.module("bpApp",["ngRoute","ngMaterial"]),angular.module("bpApp").config(["$routeProvider",function(o){o.when("/",{templateUrl:"./html/views/home.html",controller:"mainController as main"})}]),angular.module("bpApp").controller("mainController",["$http",function(o){console.log("view loaded!"),this.controllerAsTest=function(){console.log("controllerAsTest!")}}]);