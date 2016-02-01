'use strict';

/**
 * @ngdoc function
 * @name zapatosApp.controller:ContactoCtrl
 * @description
 * # ContactoCtrl
 * Controller of the zapatosApp
 */
angular.module('zapatosApp')
  .controller('ContactoCtrl', function ($scope,$http) {

  		$scope.bienvenida= function()¨{
  			$scope.mensaje= Tu nombre es'+$scope.nombre+'Tus apellidos son'+$scope.apellidos+'Tu teléfono es'+$scope.teléfono+'

  		}
  		
    
    
  });
