var express = require('express');
var cors = require('cors')
var app = express();
app.use(cors())
app.get('/luotkhach', function (req, res) {
   console.log("oke1");
var luotkhach = {
    soluong: '999999'
};
    var records = luotkhach;
    res.json(records);
})

app.get('/heatmap',function(req,res) {
    console.log("oke2");
    var citymap = [
        {
          lat: 41.878,
          lng: -87.629,
          population: 2714856
        },
        {
          lat: 40.714,
          lng: -74.005,
          population: 8405837
        },
        {
          lat: 34.052,
          lng: -118.243,
          population: 3857799
        },
        {
          lat: 49.25,
          lng: -123.1,
          population: 603502
        }
    ];
    res.json(citymap);
})
var server = app.listen(4231);
console.log("server is runing");