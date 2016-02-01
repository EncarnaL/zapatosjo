'use strict';

/**
 * @ngdoc function
 * @name zapatosApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the zapatosApp
 */
angular.module('zapatosApp')
  .controller('PortadaCtrl', function ($scope) {
    $scope.minombre= 'Josep';
    $scope.dihola= function(){
    	alert($scope.texto)
    	$scope.texto= 'Recibido. Muchas gracias.';
    };


    
  });
