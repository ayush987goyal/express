var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, (err, db) => {

    if(err) throw err;

    db.collection('prices').aggregate([
        { $match: { size: process.argv[2]}}
        ,{ $group: {
            _id: 'total',
            total: {
                $avg: '$price'
            }
        }}
    ]).toArray((err, res) => {
        if(err) throw err;

        console.log(Number(res[0]["total"]).toFixed(2));
        db.close();
    });
})