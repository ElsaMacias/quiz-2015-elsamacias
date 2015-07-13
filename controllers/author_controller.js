//GET /author
//directorio controllers
exports.creditos= function(req, res) {
          res.render('author/creditos',
            {
              datos:'Elsa',
              nombre_foto:'miFoto.jpg'
            }
          );
};