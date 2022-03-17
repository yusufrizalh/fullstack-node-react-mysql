const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

const db = require("./models");
const postRouter = require("./routes/Posts");
const commentsRouter = require("./routes/Comments");
const usersRouter = require("./routes/Users");
const likesRouter = require("./routes/Likes");

app.use("/posts", postRouter);
app.use("/comments", commentsRouter);
app.use("/auth", usersRouter);
app.use("/likes", likesRouter);

db.sequelize.sync().then(() => {
  app.listen(8001, () => {
    console.log("Server running at http://127.0.0.1:8001");
  });
});
