import express from 'express';
import cors from 'cors';

const app = express();

const cors = require("cors");
app.use(cors());


app.get("/", (req, res) => {
    res.send("Api is Running ...");
})

app.get("/api/simple", (req, res) => {
    res.json({
        university : "Demo",
        Location : "Delhi",
        Rank : "1"
    });
})

app.get("/api/fees", (req, res) => {
    res.json({
        BTech : {range : "1.5L to 2L per year"},
        BCA: {range : "1L to 1.5L per year"},
        MCA : {range : "1.5L to 2L per year"},
        MTech : {range : "2L to 2.5L per year"}
    });
})

const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running at PORT ${PORT}`));


