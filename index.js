const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require("mongodb");

app.use(cors());
app.use(express.json());

// USer:
// PASS : AdggX5zAVvOoOYFP

const uri = `mongodb+srv://alabiranik56:<db_password>@foodbridge-cluster.cxkdi.mongodb.net/?retryWrites=true&w=majority&appName=FoodBridge-Cluster`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

// ....

app.get("/", (req, res) => {
  res.send("Food is falling from the sky");
});

app.listen(port, () => {
  console.log(`Job is waiting at ${port}`);
});