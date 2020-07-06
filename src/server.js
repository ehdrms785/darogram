require("dotenv").config();
import { GraphQLServer } from "graphql-yoga";
//GraphQLServer 에는 ExpressServer가 내장 되어 있음
import logger from "morgan";

// find PORT from env file , if it doesn't exist, set port 4000
const PORT = process.env.PORT || 4000;
const typeDefs = `
    type Query {
        hello: String!
    }
`;
const resolvers = {
  Query: {
    hello: () => "Hi",
  },
};
const server = new GraphQLServer({ typeDefs, resolvers });
server.express.use(logger("dev"));
server.start(
  {
    port: PORT,
  },
  () => console.log(`Server running on port localhost:${PORT}`)
);
