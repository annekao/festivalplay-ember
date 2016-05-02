Take a look at the server/API code [here](https://github.com/annekao/itp-405-final-project-node-api) which is hosted on https://festivalplay-api.herokuapp.com/.

##Requirements (client-side application driven by an API)
**Use of Ember for the client-side application**

Ember code is in this repo.

**API in either Laravel or Node and makes use of controllers and models**

See [API code](https://github.com/annekao/itp-405-final-project-node-api).

**Use of an ORM (Eloquent or Sequelize)**

See [Sequelize](https://github.com/annekao/itp-405-final-project-node-api/blob/master/config/sequelize.js)
See [Models](https://github.com/annekao/itp-405-final-project-node-api/tree/master/models)

**Original MySQL database designed by you that has been populated with appropriate data for your application. You should have at least 3 tables.**

See [Models](https://github.com/annekao/itp-405-final-project-node-api/tree/master/models) and watch YouTube video for more clarification.

**Secure database reading/writing (escaping of user input). If you are using Laravel, this is handled for you if you use the query builder or the ORM.**

I wasn't entirely sure what this meant specifically our how to do this in node, but getting sensitive information, such as Users and Events, and deleting any of the models has an admin check before completing the call.  See [Express Routes](https://github.com/annekao/itp-405-final-project-node-api/blob/master/app.js) at lines 119, 155, 178, 219, 242. 

**Authenticated admin pages found at the path /admin. I should be able to perform administrative actions such as adding new data, deleting data, editing data, creating new users, etc. Do what makes sense for your site.**

Admins are allowed to delete any of the Playlists, Users, and Events.  Obviously, deleting it on the website is not going to delete in Spotify.

**Success and error messages when information is saved/deleted successfully or when it errors**

Each reponse has a success variable indicating whether there was a problem.  See [Express Routes](https://github.com/annekao/itp-405-final-project-node-api/blob/master/app.js).  A notable example is route '/api/v1/spotify/me' on line 38.  If the call to Spotify fails or writing the database fails, a response is sent with a failure and error.  Otherwise, a response is sent with a success and the user object.

**At least 5 tests that are unique.**

See [Index Tests](https://github.com/annekao/itp-405-final-project-ember/blob/master/tests/acceptance/index-test.js).  Tests are: 
1. Clicking FAB when not logged into Spotify which ensures an alert pops-up
2. Clicking FAB, when authorized, opens up the form on the first step.  Entering a query and clicking 'Next' opens step 2.
3. Entering a gibberish query results in 'No results."
4. Entering a query of 'music' results with at least 1 result (this test may fail).
5. Accessing the admin page with invalid credentials opens an alert.

I had a problem running tests with 'ember serve'.  Instead I go to /tests on localhost.

**Travis CI integration**

See YouTube video.

**Server-side data validation.**

Username and password check for admin.  See [Express Routes](https://github.com/annekao/itp-405-final-project-node-api/blob/master/app.js) at line 86.

**Site content (graphics, narrative text, etc.) beyond the database content**

Cards, forms.

**General design that is consistent across site and sections**

Used [Materialize](http://materializecss.com/).

------

_Made with love using [Heroku](https://heroku.com), [Travis CI](https://travis-ci.org), [Spotify API](https://developer.spotify.com/web-api/), [SeatGeek API](http://platform.seatgeek.com/), and [Materialize](http://materializecss.com/)._
