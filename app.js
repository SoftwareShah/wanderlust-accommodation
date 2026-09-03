require('dotenv').config();
const express = require('express');
const app = express();
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const ExpressError = require('./utils/ExpressError.js')





// Authentication
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user.js');



// Express Router
const listingRouter = require('./routes/listing.js')
const reviewRouter = require('./routes/review.js');

// signup
const userRouter = require('./routes/user.js');




/// for ejs setup
const path = require('path');
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
const methodOverride = require('method-override');
app.use(methodOverride("_method"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// new packages 
const ejsMate = require("ejs-mate");
app.engine("ejs", ejsMate);


// to use for static files
app.use(express.static(path.join(__dirname, "/public")));




const mongoose = require('mongoose');

const dns = require("dns");
dns.setServers([
    '1.1.1.1',
    '8.8.8.8'
])



const dbUrl = process.env.ATLASDB_URL;


const { error } = require('console');


async function main() {
    await mongoose.connect(dbUrl);


}

main()
    .then((res) => {
        console.log("✅ Connected to DB");
    })
    .catch((err) => {
        console.log("❌ DB Connection Error:", err);
    });

const store = MongoStore.create({
    mongoUrl: dbUrl,
    touchAfter: 24 * 3600,

});

store.on("error", (err) => {
    console.log("ERROR in MONGO SESSSION STORE", err);
});




const sessionOption = {
    store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    }
};











app.use(session(sessionOption));
app.use(flash());

// authentication 
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());






app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
});





app.get('/demouser', async (req, res) => {
    let fakeUser = new User({
        email: "students@gmail.com",
        username: "sigmas-student"
    });

    let registerUser = await User.register(fakeUser, "helloWorld");
    res.send(registerUser);
});









// Express Router

app.use('/listings', listingRouter)
app.use('/listings/:id/reviews', reviewRouter);
app.use('/', userRouter);





app.use((req, res, next) => {
    next(new ExpressError(404, "page not found!"));
});


app.use((err, req, res, next) => {
    let { status = 500, message = "something went wrong !" } = err;
    res.status(status).render("error.ejs", { message });


})


app.listen(8000, () => {
    console.log("🚀 Server is running on port 8000 (http://localhost:8000)");
});