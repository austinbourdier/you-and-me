**Stack**
MongoDB, Express.js, Angular.js, Node.js

**Dependency Managmenet**
npm and bower

**Routing**
Angular UI Router

**UI**
Angular UI Bootstrap

**Required**
Node and Bower

install node : 
    
install bower :

    npm install -g bower

**Note**

The latest version of Mongoose is almost always unstable and problematic and not really reccommended for development or production. They have their repo setup this way on purpose where their master branch is their working branch. 

So careful not to modify the Mongoose version in the package.json. If you do accidentally install the latest version of Mongoose, you'll see a big, raging orange warning in the terminal that will scare the crap out of you.

_______________________________________________________________________________

To run in your local environment :

**Step 1 of 4 :**

    clone the reepeezee 

**Step 2 of 4 :**
In the root directory, type :

    npm install && bower install

**Step 3 of 4 :**
Then again in the root directory type :

    touch .env

**Step 4 of 4 :**
Now set the following three env variables in the env file without quotes :

    URI = Your MongoDB URI String
    EMAIL = your gmail address
    PASSWORD = your gmail password

    Example :
    URI = mongodb://<dbuser>:<dbpassword>@ds041177.mongolab.com:41177/mySickApp  
_______________________________________________________________________________

Done, in the root directory type :

    node server

In your browser, navigate to :

    http://localhost:3000/

_______________________________________________________________________________

**TODO**

**UI**
Initial Layout
Create what elegant, accepted, relaxed and simple looks like. 

Create what the collective "good mirror" reflects.

Create a slogan

**On Connect**
A user can do the following on connect :
    
...

**User Auth**
Passport

**Database**
Switch to either PG or Sequelize, establish initial associations but still use a remote connection string. ( Heroku let's you do this )

**User**

-profile-

a user has many profile preferences :

    A user has a gender
    A user has sexual orientation
    A user has a broad persontality scope
    A user has a narrow persontality scope
    A user has a broad interested in scope
    A user has a narrow interested in scope
    A user has UI preference
    A user has media

-events-

A user has many events : 

    events created
    events interested in
    events joined
    events attended

**Update package.json**
https://devcenter.heroku.com/articles/node-best-practices
_______________________________________________________________________________


thoughts ...

an event belongs to many users
one event type can belong to two users only at which point it is condsidered sold out
one event type can belong to more, a group setting
an event that has already occured can have media, more appropriate for events of more than two people ...

