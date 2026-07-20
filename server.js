const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

// Serve the frontend files
app.use(express.static(__dirname));

// Home page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Chat endpoint
app.post("/chat", async (req, res) => {
    const userMessage = req.body.message;

    let reply = "I received your message: " + userMessage;

    res.json({
        reply: reply
    });
});

// Railway uses a dynamic port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🤖 FansoAI server running on port ${PORT}`);
});
