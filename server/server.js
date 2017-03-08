var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('what-to-eat.db');
var check;

var initialize = function () {
    db.serialize(function () {
        db.run("CREATE TABLE if not exists dish (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, name TEXT)");
    });
};
initialize();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    if ('OPTIONS' == req.method) {
        res.sendStatus(200);
    } else {
        next();
    }
});

app.get('/dishes', function (req, res) {
    db.all("SELECT * FROM dish", function (err, rows) {
        res.json(rows);
    });
});

app.get('/dish/:id', function (req, res) {
    db.all("SELECT * FROM dish WHERE id=?", +req.params.id, function (err, row) {
        res.json(row);
    });
});

app.post('/dish', function (req, res) {
    db.run("INSERT INTO dish (name) VALUES (?)", req.body.name, function (err) {
        res.json(Object.assign({}, req.body, {id: this.lastID}));
    });

});

app.put('/dish/:id', function (req, res) {
    db.run("UPDATE dish SET name=? WHERE id=?", [req.body.name, +req.params.id], function (err) {
        db.get("SELECT * FROM dish WHERE id=?", +req.params.id, function (err, row) {
            res.json(row);
        });
    });

});

app.delete('/dishes', function (req, res) {
    db.run("DELETE FROM dish", [], function (err) {
        res.json({success: true});
    });
});

app.delete('/dish/:id', function (req, res) {
    db.run("DELETE FROM dish WHERE id=?", +req.params.id, function (err) {
        res.json({deletedId: +req.params.id});
    });
});

var server = app.listen(8081, function () {
    var port = server.address().port;
    console.log("App listening at http://localhost:%s", port);
});
