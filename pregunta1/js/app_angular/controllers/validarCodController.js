// js/app_angular/controllers/validarCodController.js

angular.module("registro")
   .controller('validarCodCtrl', ['$scope','validarCod', function ($scope, validarCod) {
      $scope.formCodigo = {
         error: false
      };

      $scope.consultar = function(data){
         validarCod.consultarCod(data.codigo, data.id_libro);
         
         /*$scope.formCodigo.error = validarCod.error;
         console.log(validarCod.error)*/
         // console.log(error)
         // $scope.formCodigo.error = obj.estado;
         // console.log($scope.formCodigo.error)
      }
   }])