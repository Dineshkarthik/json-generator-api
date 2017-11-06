"""Script to generate json."""
import os
import json
import hashlib
from faker import Faker
from optparse import OptionParser
from flask import Flask, request, redirect, url_for, render_template

app = Flask(__name__)
app.secret_key = hashlib.sha1(os.urandom(128)).hexdigest()
fake = Faker()


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
        json_schema = request.form['schema']
        id_ = fake.uuid4()
        api_end_point = request.url_root + "json/" + id_
        return api_end_point


@app.route("/json/<id_>", methods=['GET'])
def get_json(id_):
    """Function that does all the calculations."""
    if request.method == 'GET':
        return id_

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
