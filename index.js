import express from "express";

const app = express();
app.set("view engine", "ejs");

app.use((req, res, next) => {
  console.log(
    `${req.method} ${req.url} - ${req.ip} - ${new Date().toLocaleString()}`,
  );
});

app.use(express.static("static"));

// If the user has hit this with the domain "citizensorganize.com", redirect them to "citizensorganized.com".
app.use((req, res, next) => {
  if (req.hostname === "citizensorganize.com") {
    return res.redirect(301, "http://citizensorganized.com" + req.originalUrl);
  }
  next();
});

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
