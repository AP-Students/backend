import express, { json, urlencoded } from "express";
// import { RegisterRoutes } from "../build/routes.js";
import { RegisterRoutes } from "../tsoa/routes";

export const app = express();

app.use(
  urlencoded({
    extended: true,
  }),
);
app.use(json());

RegisterRoutes(app);
