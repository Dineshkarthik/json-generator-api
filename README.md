# Json-Generator-API

A json data generator - API mocking tool. Specify the Keys required and select the corresponding datatype from the available list and you are ready to go with a working API Endpoint that provides you with the required Json data.

## Tech

Json-Generator-API uses a number of open source projects to work properly:

* [Flask] - Microframework for Python based on Werkzeug, Jinja 2.
* [Redis] - Redis is an open source, in-memory data structure store, used as a database, cache and message broker.
* [Faker] - Faker is a Python package that generates fake data for you.
* [Twitter Bootstrap] - great UI boilerplate for modern web apps.
* [jQuery] - duh
* [jQuery QueryBuilder] - jQuery plugin for user friendly query/filter creator.

## Installation

You need Python 3.*, its dependency packages, and the above mentioned packages installed globally:

    $ git clone https://github.com/Dineshkarthik/json-generator-api.git
    $ cd json-generator-api
    $ pip install -r requirements.txt


## Execution

    $ python json_generator.py #by default it will run on port 5000
    $ python json_generator.py -p 8001 #to run on a different port

License
----

MIT


**Free Software, Hell Yeah!**



   [Faker]: <http://faker.readthedocs.io>
   [Flask]: <http://flask.pocoo.org/>
   [Redis]: <https://redis.io/>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [jQuery QueryBuilder]: <http://querybuilder.js.org/>
  