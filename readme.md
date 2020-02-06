# YelpCamp

## V1

* Add Landing Page
* Add Campgrounds Page that lists all campgrounds

Each Campground has:
* Name
* Image

# Layout and Basic Styling
* Create our header and footer partials
* Add in Bootstrap

# Creating Campgrounds
* Setup new camground POST route
* Add in body-parser
* Setup route to show form 
* Add basic unstyled form

# Style the campgrounds page
* Make a better header/title
* Make campgrounds display in a grid

# Style the Navbar and Form
* Add a navbar to all templates
* Style the new campground form

=======================================================
## V2

# Add Mongoose
* Install and configure mongoose
* Setup campground model
* Use campground model inside of our routes

# Show Page
* Review the RESTful routes we've seen so far
* Add discription to our campground model
* Show db.collection.drop()
    - Delete everything in DB
* Add a show route/template

RESTFUL ROUTES

name    url         verb    description
=========================================================
INDEX   /dogs       GET     Display a list of all dogs
NEW     /dogs/new   GET     Display form to make new dog
CREATE  /dogs       POST    Add new dog to DB
SHOW    /dogs/:id   GET     Shows info about one dog

==========================================================
==========================================================
## V3

# Refactor Mongoose code
* Create a models dir
* Use module.exports
* Require everything correctly

# Add Seeds File
* Add a seeds.js file
* Run the seeds file every time the server starts

# Add the Comment Model
* Make our errors go away
* Display comments on campground show page


==========================================
## V4

# Comment New/Create
* Discuss nested routes
* Add the comment new and create routes
* Add the new comment form

INDEX   /campgrounds
NEW     /campgrounds/new
CREATE  /campgrounds
SHOW    /campgrounds/:id

NEW     /campgrounds/:id/comments/new   GET
CREATE  /campgrounds/:id/comments       POST

* Moved Templates to /campgrounds and /comments 
* Fixed partial includes

===========================================
## V5

# Style Show Page
* Add Sidebar to show page
* Display comments better
* Add public directory
* Add custom stylesheet

===========================================
## V6

# Add User Model
* Install all packages needed for auth
    - passport-local-mongoose
    - passport-local
    - passport
    - express-session
* Define User model

# Register
* Configure Passport
* Add register routes
* Add register template

# Login
* Add login routes
* Add login template

# Logout/Navbar
* Add Logout route
* Prevent user from adding a comment if not signed in
* Add links to navbar

# Show/Hide links
* Show/hide auth links in navbar

=========================================
## V7

# Refactor Routes
* Use Express router to reorganize all routes

==========================================
## V8

# Users + Comments
* Associate users and comments
* Save author's name to a comment automatically

# Users + Campgrounds
* Prevent an unauthenticated user from creating a campground
* Save username + id to newly created campground

==========================================
## V9
# Editing Campgrounds
* Add Method-Override
* Add Edit Route for Campgrounds
* Add Link to Edit Page
* Add Update Route
* Fix $set problem

# Deleting Campgrounds
* Add Destroy Route
* Add Delete Button
==========================================
## V10
# Authorization
* User can only edit his/her campgrounds
* User can only delete his/her campgrounds
* Hide/Show edit and delete buttons

# Editing Comments
* Add Edit route for comments
* Add Edit button
* Add Update route

<!-- /campgrounds/:id/edit -->
<!-- /campgorunds/:id/comments/:comment_id/edit -->

# Deleting Comments
* Add Destroy route
* Add Delete button

<!-- /campgrounds/:id/comments/:comment_id -->

# Authorization Part 2: Comments
* User can only edit his/her comments
* User can only delete his/her comments
* Hide/Show edit and delete buttons
* Refactor Middleware

==========================================
## V11

# Adding in Flash
* Demo working version
* Install and configure connect-flash
* Add bootstrap alerts to header

===========================================
## V12

# Refactor Landing Page
* Animated landing page images

# Dynamic pricing
* Added pricing option in new/edit campground

# Updated Nav

# Admin
* Added admin mode via dotenv secret code
* Admin can delete any campground or comment

# Fuzzy Search
* Added fuzzy search option
* Blank search will display all campgrounds

# Time Since Created
* Added time since created on campgrounds/comments.

# User Profile
* Added user get route
* Added user show page
* Added first name, last name, email and avatar
* Added bio and image options of users.
* Added campgrounds created by user.

# Password Reset
* Nodemailer sending password reset link

# Image upload
* Added multer + cloudinary
* Added .env api key and api secret

===========================================
## V13

# Bootstrap
* Migrate from bootstrap 3 to bootstrap 4
