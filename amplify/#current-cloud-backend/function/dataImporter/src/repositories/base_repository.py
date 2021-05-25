import boto3
from botocore.exceptions import ClientError

class BaseRepository(object):
    dynamodb: any
    table: str

    def __init__(self, url: str, table: str):
        session = boto3.Session(profile_name='efavai')
        self.dynamodb = session.resource('dynamodb')
        self.table = self.dynamodb.Table(table)


    def Create(self, item: dict):
        response = self.table.put_item(Item=item)
        if response['ResponseMetadata']['HTTPStatusCode'] == 200:
            return True
        return False

    def Get(self, key: dict):
        try:
            response = self.table.get_item(Key=key)
        except ClientError as e:
            print(e.response['Error']['Message'])
            return None
        else:
            if 'Item' in response:
                return response['Item']
            return None

    def Update(self, key: dict, update_expression:str, attrib: dict, attrib_names: dict={}):
        try:
            response = self.table.update_item(
                Key=key,
                UpdateExpression=update_expression,
                ExpressionAttributeValues=attrib,
                ExpressionAttributeNames=attrib_names,
                ReturnValues="UPDATED_NEW"
            )
        except ClientError as e:
            print(e.response['Error']['Message'])
            return False
        else:
            if response['ResponseMetadata']['HTTPStatusCode'] == 200:
                return True
            return False

    def Delete(self, key: dict):
        try:
            response = self.table.delete_item(Key=key)
        except ClientError as e:
            if e.response['Error']['Code'] == "ConditionalCheckFailedException":
                print(e.response['Error']['Message'])
            else:
                raise
        else:
            return response
