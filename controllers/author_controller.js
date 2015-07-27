//GET /author
//directorio controllers
exports.creditos= function(req, res) {
          res.render('author/creditos',
            {
              datos:'Elsa',
              nombre_foto:'miFoto.jpg',
 	      errors: []  // Esto falto ponerlo desde el commit de validar preguntas. Ahora funciona el control de errores en el body.
            }
          );
};