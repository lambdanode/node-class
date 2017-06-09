var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser');
var multer  = require('multer');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(multer({ dest: '/tmp/'}));
app.use(multer({ dest: './uploads /',
 rename: function (fieldname, filename) {
  console.log("inside rename");
    return filename;
  },
  }));

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "indexUpload.htm" );
})

app.post('/file_upload', urlencodedParser, function (req, res) {

   console.log(req.files.file.name);
   console.log(req.files.file.path);
   console.log(req.files.file.type);
   var d="";
   var buf= new Buffer(1024);
   buf=req.body.dir;
   var bytes=req.body.dir.length;
   d=buf.slice(0, bytes).toString(); 
   console.log('******' +d);
   var dir='./'+d; //will make the directory in the current folder. if you want to give ./temp/, then temp should already be created
   fs.mkdir(dir,function(err){
        if (err) {
          return console.error(err);
        }
         console.log("Directory created successfully!");
      });

   var file2 = dir + '/' + req.files.file.name;
   fs.readFile( req.files.file.path, function (err, data) {
      fs.writeFile(file2, data, function (err) {
       if( err ){
            console.log( err );
       }else{
             response = {
                 message:'File uploaded successfully',
                 filename:req.files.file.name
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