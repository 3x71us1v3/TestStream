const appLol = require("express")()
const fs = require("fs")
const port = process.env.port || 3002
var dataLol = null

appLol.get("", (req, res) => {

    fs.readFile("CatBreadGifStreamingEncoded.txt", (err, data) => {
        if(err) throw err;
        dataLol = data
        console.log(dataLol)
    });

    res.send(dataLol.toString())
});

appLol.listen(port, () => {
    console.log("Works? Port = "+ port)
});