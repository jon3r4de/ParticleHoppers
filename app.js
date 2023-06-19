// requiring required packages

require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
// const _ = require("lodash");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const flash = require("connect-flash");
const fetch = require('node-fetch');

// creating application using express

const app = express();

app.set('view engine', 'ejs');
mongoose.connect("mongodb+srv://user-tester-1:RfpwqXKbLB73sCBl@chillout.tqvbohs.mongodb.net/orbitalUserDB");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(session({
    secret: process.env.ENCRYPTION_KEY,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use('/scripts', express.static('scripts', { "extensions": ["js"] }));

const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

let cachedQuote = null;
let cacheExpirationTime = null;

app.route("/")
    .get((req, res) => {
        res.render("home", { pageTitle: "Home" });
    });

app.route("/logout")
    .get((req, res) => {
        req.logout((err) => {
            console.log(err);
        });
        res.redirect("/");
    });

app.route("/login")
    .get((req, res) => {
      if (req.isAuthenticated()) {
        res.render("breathe");
      } else {
        const errorMessage = req.flash("error")[0];
        res.render("login", { error: errorMessage, pageTitle: "Login" });
      }
    })
    .post(passport.authenticate("local", {
        successRedirect: "/breathe",
        failureRedirect: "/login",
        failureFlash: true
    }), (req, res) => {
        // Flash a specific error message
        req.flash("error", "Invalid username or password.");
        // Redirect back to the login page
        res.redirect("/login");
    });

app.route("/register")
    .get((req, res) => {
        if (req.isAuthenticated()) {
            res.redirect("/breathe");
        } else {
            res.render("register", { pageTitle: "Register" });
        }
    })
    .post((req, res) => {
        User.register({username: req.body.username}, req.body.password, (err, user) => {
            if (err) {
                console.log(err);
                res.redirect("/register");
            } else {
                passport.authenticate("local")(req, res, () => {
                    res.redirect("/breathe");
                });
            }
        })
    });

app.route("/breathe")
    .get((req, res) => {
        if (req.isAuthenticated()) {
            res.render("breathe");
        } else {
            res.redirect("/login");
        }
    });

app.route("/quote")
    .get((req, res) => {
        if (req.isAuthenticated()) {
            res.render("quote", { pageTitle: "Quote of the Day" });
        } else {
            res.redirect("/login");
        }
    });

app.get('*', (req, res) => {
    res.status(404).render('404');
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
    });