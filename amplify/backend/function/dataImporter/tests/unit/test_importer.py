import json
import os
import sys
import traceback
from pathlib import Path
import unittest
import unittest.mock
from src import index


class TestImporterLambda(unittest.TestCase):
    def setUp(self):
        # Cualquier incializacion comun y general va aqui
        a = 0

    def apigw_event(self):
        filename = Path(__file__).resolve(
        ).parent.parent / "events/importer_event.json"
        with open(filename, encoding="utf8") as data_file:
            json_data = json.load(data_file)
        return json_data

    def import_orden_event(self):
        filename = Path(__file__).resolve(
        ).parent.parent / "events/order_importer_event.json"
        with open(filename, encoding="utf8") as data_file:
            json_data = json.load(data_file)
        return json_data

    @unittest.mock.patch.dict(os.environ, {'Environment': 'dev', 'dynamodb_url': 'Cliente-b4rnjyslknbdxnya4onlwi5qum-dev'})
    def test_importer_handler(self):

        try:
            ret = index.handler(self.apigw_event(), "")
            result = json.loads(ret["body"])
            self.assertTrue(ret["statusCode"] == 200)
        except:
            print("Oops!", sys.exc_info()[0], "occured.")
            raise


    @unittest.mock.patch.dict(os.environ, {'Environment': 'dev', 'dynamodb_url': 'OrdenServicio-b4rnjyslknbdxnya4onlwi5qum-dev'})
    def test_order_importer_handler(self):

        try:
            ret = index.handler(self.import_orden_event(), "")
            result = json.loads(ret["body"])
            self.assertTrue(ret["statusCode"] == 200)
        except:
            print("Oops!", sys.exc_info()[0], "occured.")
            raise



if __name__ == '__main__':
    unittest.main()

