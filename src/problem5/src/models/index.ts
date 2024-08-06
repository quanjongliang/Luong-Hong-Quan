import { Sequelize } from "sequelize";
import { ResourceModel } from "./resource.model";
import dotenv from "dotenv";
dotenv.config();
// const sequelize = new Sequelize(
//   "postgresql://challengedb_owner:ZAXc3gPy5OQp@ep-tight-snowflake-a51a95r1.us-east-2.aws.neon.tech/challengedb?sslmode=require"
// );

export type Db = {
  resources: ReturnType<typeof ResourceModel>;
};

const sequelize = new Sequelize({
  host: process.env.PG_HOST,
  database: process.env.PG_DB,
  username: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  port: +(process.env.PG_PORT || 5432),
  dialect: "postgres",
});
const db: Db = {
  resources: ResourceModel(sequelize),
};
export default db;
