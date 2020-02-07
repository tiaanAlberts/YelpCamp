var express         = require("express"),
    app             = express(),
    seedDB          = require("./seeds"),
    mongoose        = require("mongoose"),
    passport        = require("passport"),
    bodyParser      = require("body-parser"),
    cookieParser    = require("cookie-parser"),
    flash           = require("connect-flash"),
    User            = require("./models/user"),
    LocalStrategy   = require("passport-local"),
    session         = require("express-session"),
    methodOverride  = require("method-override"),
    Comment         = require("./models/comment"),
    Campground      = require("./models/campground");
    
// configure dotenv
require('dotenv').load();

//requiring routes
var commentRoutes    = require("./routes/comments"),
    campgroundRoutes = require("./routes/campgrounds"),
    indexRoutes      = require("./routes/index")
    


mongoose.set('useUnifiedTopology', true); //DepreciationWarnign: Current server discovery and monitoring engine is deprecated
mongoose.set('useFindAndModify', false); //DepreciationWarning: findById
// mongoose.connect('mongodb://localhost:27017/yelp_camp_v11', { useNewUrlParser: true }); //connect to db
// mongoose.connect('mongodb+srv://tiaan251:tiaan251@cluster0-mu4ir.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true }); //connect to db
mongoose.connect(process.env.DATABASEURL);
// assign mongoose promise library and connect to database
// mongoose.Promise = global.Promise;

// const databaseUri = process.env.MONGODB_URI || 'mongodb://localhost/yelp_camp';

// mongoose.connect(databaseUri, { useMongoClient: true })
//       .then(() => console.log(`Database connected`))
//       .catch(err => console.log(`Database connection error: ${err.message}`));

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride('_method'));
app.use(cookieParser('secret'));
//require moment
app.locals.moment = require('moment');
// seedDB(); //seed the database

// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "Once again Rusty wins cutest dog!",
    resave: false,
    saveUninitialized: false
}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   res.locals.success = req.flash('success');
   res.locals.error = req.flash('error');
   next();
});


app.use("/", indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);

app.listen(process.env.PORT || 3000, process.env.IP, function(){
   console.log("The YelpCamp Server Has Started!");
});