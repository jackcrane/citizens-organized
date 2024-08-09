import express from "express";

const app = express();
app.set("view engine", "ejs");

app.use(express.static("static"));

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/mission", (req, res) => {
  res.render("mission");
});
app.get("/legal/terms", (req, res) => {
  res.render("terms");
});
app.get("/legal/privacy", (req, res) => {
  res.render("privacy");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
