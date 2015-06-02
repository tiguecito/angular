// ++++++++++
// IMPORTANTE
// ++++++++++
/*Este fichero no era necesario postearlo ya que la api rest está funcionando bien
pero lo coloco por si acaso alguien necesita ver de qué forma entrego mi data.

Obviamente hay muchas otras funciones adicionales, que no vienen al caso para la pregunta.*/

var buscar_codigo = function(req, res, next){
   // console.log("SELECT c.*, g.grado, g.id_grado FROM sm_codigos c INNER JOIN sm_libro l ON c.id_libro=l.id_libro INNER JOIN sm_grado g ON l.id_grado=g.id_grado WHERE c.codigo='"+ req.params.codigo +"'  and c.id_libro='"+ req.params.id_libro +"' and c.estado='1' and c.en_uso='no' and c.liberado='no'");
   pool.getConnection(function(error, conn){
      conn.query("SELECT campo1, campo2 FROM TABLA c INNER JOIN LIBRO l ON c.id_libro=l.id_libro INNER JOIN GRADO g ON l.id_grado=g.id_grado WHERE c.codigo='"+ req.params.codigo +"'  and c.id_libro='"+ req.params.id_libro +"' and c.estado='1' and c.en_uso='no' and c.liberado='no'", function(error, respuesta){
         if(respuesta.length>0){
            // en este caso, 'false' significa que no hay error
            res.json({"estado":false, "grado": respuesta[0].grado, "id_grado": respuesta[0].id_grado});
         }else{
            // en este caso, 'true' significa que sí hay error
            res.json({"estado":true});
         }
      });
      conn.release();
   });
};