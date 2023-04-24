const express = require("express");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const path = require("path");

//initializations
const app = express();

//settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  exphbs.engine({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
    helpers: require("./lib/handlebars"),
  })
);
app.set("view engine", ".hbs");

//Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Global variables
app.use((req, res, next) => {
  //app.locals.success = req.flash("success");
  //app.locals.message = req.flash("message");
  app.locals.user = req.user;
  next();
});

//routes
app.use(require("./routes"));
app.use(require("./routes/authentication"));
app.use("/links", require("./routes/links"));

//Public
app.use(express.static(path.join(__dirname, "public")));

//url deploy with railway (database MySQL jumpy-year)
//https://nodejs-mysql-railway-production-b656.up.railway.app/

//Startin the server
app.listen(app.get("port"), () => {
  console.log("Server listening on port ", app.get("port"));
});
