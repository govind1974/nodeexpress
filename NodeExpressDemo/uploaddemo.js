var express = require('express');
var app = express();
var fs = require("fs");


var multer  = require('multer');

app.use(express.static('public'));

app.get('/uploadfrm.html', function (req, res) {
   res.sendFile( __dirname + "/" + "UploadFrm.html" );
})

app.post('/file_upload', multer({ dest: './uploads/'}).single('file1'),function (req, res) {
	console.log('FIRST TEST: ' + JSON.stringify(req.file));
	console.log(req.file.originalname);
    console.log(req.file.path);
    console.log(req.file.mimetype);

   var file = __dirname + "/" + req.file.originalname;
   fs.readFile( req.file.path, function (err, data) {
        fs.writeFile(file, data, function (err) {
         if( err ){
              console.log( err );
         }else{
               response = {
                   message:'File uploaded successfully',
                   filename:req.file.originalname
              };
          }
          console.log( response );
          res.end( JSON.stringify( response ) );
       });
   });
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})