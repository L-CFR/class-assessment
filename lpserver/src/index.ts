import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { connect, users } from "./db/mongo";

const app = express();
const PORT = 8080;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Express TypeScript Backend!");
});

app.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await users.findOne({ email, password });
    if (user) {
      res.json(true);
    } else {
      res.status(401).send(false);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send(false);
  }
});

app.post("/signup", async (req, res) => {
  const { email , password } = req.body;
  try {
    await users.create({
      email,
      password
    })
    res.send(true)
  } catch (error) {
    console.log(error)
    res.send(false)
  }
});

app.listen(PORT, async () => {
  await connect();
  console.log(`Server is running at http://localhost:${PORT}`);
});
