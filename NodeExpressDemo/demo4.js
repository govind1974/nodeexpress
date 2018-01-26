var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser');
var multer  = require('multer');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(multer({ dest: '/tmp/'}));
app.use(multer({ 
    dest: '/tmp/',
    rename: function (fieldname, filename) {
        return filename.replace(/\W+/g, '-').toLowerCase() + Date.now()
    },
    onFileUploadStart: function (file) {
        console.log(file.fieldname + ' is starting ...')
    },
    onFileUploadData: function (file, data) {
        console.log(data.length + ' of ' + file.fieldname + ' arrived')
    },
    onFileUploadComplete: function (file) {
        console.log(file.fieldname + ' uploaded to  ' + file.path)
    }
}));


app.get('/index2.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index2.html" );
})

app.post('/file_upload', multer({ dest: './uploads/'}).single('file1'),function (req, res) {
	console.log('FIRST TEST: ' + JSON.stringify(req.file));
	console.log('FIRST TEST: ' + JSON.stringify(req.files));
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