"""Script to generate json."""
import json
from faker import Faker

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
