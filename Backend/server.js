const express = require('express');
const cors = require('cors');
const app = express();
const MongoClient = require('mongodb').MongoClient;

const DBname = 'Showroom';

app.use(cors());
app.use(express.json());

app.get('/cars', (req, res) => {
    MongoClient.connect('mongodb://localhost:27017', (err, client) => {
        if (err)
            return console.log("Not Connected" + err);
        const db = client.db(DBname);
        db.collection('CarDetails').find().toArray((err, result) => {
            res.send(result);
        });
    })
});


app.put('/cars/update/:ModelName', (req, res) => {
    MongoClient.connect('mongodb://localhost:27017', (err, client) => {
        if (err)
            return console.log("Not Connected" + err);
        console.log(req.body);
        const { ModelName } = req.params;
        console.log(ModelName);
        const { CompanyName, Model, EngineType, Turbos, Year } = req.body;
        const db = client.db(DBname);
        db.collection('CarDetails').updateOne(
            {
                Model: ModelName
            },
            {
                $set: {
                    CompanyName: CompanyName,
                    Model: Model,
                    EngineType: EngineType,
                    Turbos: Turbos,
                    Year: Year
                }
            }, (err, succ) => {
                if (err)
                    return console.log(err);
                console.log(succ)
            })
        const posted = [{ Updated: 'Yes' }];
        res.send(posted);
    })
});

app.delete('/cars/delete/:Model', (req, res) => {
    MongoClient.connect('mongodb://localhost:27017', (err, client) => {
        if (err)
            return console.log("Not Connected" + err);
        const { Model } = req.params;
        console.log(Model);
        const db = client.db(DBname);
        db.collection('CarDetails').deleteOne(
            {
                Model: Model
            }, (err, succ) => {
                if (err)
                    return console.log(err);
                console.log(succ)
            })
        const posted = [{ Deleted: 'Yes' }];
        res.send(posted);
    })
});

app.post('/cars/add', (req, res) => {
    MongoClient.connect('mongodb://localhost:27017', (err, client) => {
        if (err)
            return console.log("Not Connected" + err);
        console.log(req.body);
        const { CompanyName, Model, EngineType, Turbos, Year } = req.body;
        const db = client.db(DBname);
        db.collection('CarDetails').insertOne({
            CompanyName,
            Model,
            EngineType,
            Turbos,
            Year
        })
        const posted = [{ posted: 'Yes' }];
        res.send(posted);
    })
});

app.listen(5000, () => {
    console.log("Listening")
})