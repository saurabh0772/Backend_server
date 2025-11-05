import express from 'express';
import cors from 'cors';

const app = express();
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
        BTech : "1.5L to 2L per year",
        BCA: "1L to 1.5L per year",
        MCA : "1.5L to 2L per year",
        MTech : "2L to 2.5L per year"
    });
})

const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running at PORT ${PORT}`));
