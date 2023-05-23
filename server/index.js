const express = require("express");
const cors = require("cors");
const { getCompliment, getFortune } = require("./controller");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require("./controller");

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.post("/api/goal", postGoal);

app.listen(4000, () => console.log("Server running on 4000"));
