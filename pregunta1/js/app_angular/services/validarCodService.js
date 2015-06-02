// js/app_angular/controllers/validarCodService.js

angular.module("registro")
   .service('validarCod', ['$http','$q',function ($http, $q) {
      // función para verificar la existencia del código
      this.error = false;

      var checkServer = function(codigo, id_libro){
         var def = $q.defer();
         $http.get('/registro/buscar/codigo/'+ codigo +'/'+ id_libro +'')
               .success(function(data, status){
                  if(data.estado==true){
                     // en este caso, 'true' significa que sí hay error
                     def.resolve(true);
                  }else{
                     // en este caso, 'false' significa que no hay error
                     def.resolve(false);
                  }
               }).error(function(data, status){
                  def.reject(true);
                  
            });   
         return def.promise;
      };

      this.consultarCod = function(codigo, id_libro){
         checkServer(codigo, id_libro).then(function(result){
            this.error = result;
         });
      };
   }])