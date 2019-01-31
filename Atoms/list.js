var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("music");
  dbo.collection("songdetails").find({}, { _id:0,Singer:1,Songname:0, film:0,Musicdirector:0 }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
