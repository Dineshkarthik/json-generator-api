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


def generate_value(formator):
    """Generate dummy value."""
    if formator == "name":
        return fake.name()
    elif formator == "word":
        return fake.text()
    elif formator == "phone_number":
        return fake.phone_number()


def get_json(json_schema):
    """Function to generate json."""
    dict_ = {}
    for key, value in json_schema.items():
        dict_[key] = generate_value(value)
    return json.dumps(dict_)


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
