var MongoClient = require('mongodb');

// Connect to the db
MongoClient.connect("mongodb://@127.0.0.1:27017/mydb", function(err, db) {
  if(!err) {
    console.log("We are connected");
    var c = db.collection('emps');
    c.find().toArray(function(err, items){
     console.log(items.length);
     for(var i=0; i< items.length;++i){
    	 console.log(items[i].emp_id + "  " + items[i].ename);
     }
});
  }
});

