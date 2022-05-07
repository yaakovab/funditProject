import express from "express";
const app = express();
const matchRouter = require('./controllers/matchRouter')

app.use((_, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
});
app.use(express.json())
app.use('/api/match', matchRouter)



app.get("/", (req, res) => {
    res.send("dev api status - up");
});


export { app }