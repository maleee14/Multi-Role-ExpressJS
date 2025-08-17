import express from "express";
import connection from "./connection.js";
import Router from "./routes/index.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(Router);

// Error handling 404
app.use((req, res) => {
  res.status(404).json({ message: "404_NOT_FOUND" });
});

connection();

app.listen(process.env.APP_PORT, () => {
  console.log(
    `Server running at http://${process.env.DB_HOST}:${process.env.APP_PORT}`
  );
});
