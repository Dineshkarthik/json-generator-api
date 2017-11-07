"""Script to generate json."""
import os
import ast
import json
import redis
import hashlib
from faker import Faker
from optparse import OptionParser
from flask import Flask, request, redirect, url_for, render_template, session

fake = Faker()
app = Flask(__name__)
app.secret_key = hashlib.sha1(os.urandom(128)).hexdigest()
data_store = redis.Redis(
    host='localhost', port=6379, db=0, decode_responses=True)


def generate_json(json_schema):
    """Function to generate json."""
    dict_ = {}
    for key, value in json_schema.items():
        generator_func = "fake." + value + "()"
        dict_[key] = eval(generator_func)
    return json.dumps(dict_)


@app.route("/", methods=['GET', 'POST'])
def index():
    """Function that does all the calculations."""
    if request.method == 'POST':
        json_schema = ast.literal_eval(request.form['schema'])
        id_ = fake.uuid4()
        if not data_store.exists(id_):
            data_store.hmset(id_, json_schema)
            api_end_point = request.url_root + "json/" + id_
            session["data"] = api_end_point
            redirect(url_for('success'))
        else:
            index()
    return render_template('index.html')


@app.route("/json/<id_>", methods=['GET'])
def get_json(id_):
    """Function that does all the calculations."""
    if request.method == 'GET':
        json_schema = data_store.hgetall(id_)
        return generate_json(json_schema)


@app.route("/success", methods=['GET'])
def success():
    """Function to render stats page."""
    return render_template('success.html', data=session["data"])


if __name__ == "__main__":
    parser = OptionParser()
    parser.add_option(
        "-p",
        "--port",
        dest="port",
        help="Port on which the app will run",
        default=5000)
    (options, args) = parser.parse_args()
    app.run(host='0.0.0.0', debug=True, port=int(options.port))
