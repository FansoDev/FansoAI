const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/chat", async (req, res) => {

    const userMessage = req.body.message;

    let reply = "I received your message: " + userMessage;

    res.json({
        reply: reply
    });

});


app.listen(3000, () => {
    console.log("FansoAI server running on port 3000");
});
