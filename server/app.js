const { ApolloServer } = require("apollo-server-express");
const { makeExecutableSchema } = require("graphql-tools");
const cors = require("cors");
const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

// connect to mlab database
mongoose.connect(process.env.DBPATH);
mongoose.connection.once("open", () => {
    console.log("connected to database");
});

const typeDefs = fs.readFileSync("./schema.graphql", {
    encoding: "utf-8"
});
const resolvers = require("./resolvers");

// create server
const server = new ApolloServer({ typeDefs, resolvers });

const app = express();

// allow cross-origin requests
app.use(cors());

server.applyMiddleware({ app });

app.listen(4000, () => {
    console.log("now listening for requests on port 4000");
});
