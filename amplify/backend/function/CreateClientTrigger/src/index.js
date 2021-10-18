var aws = require("aws-sdk");
var ddb = new aws.DynamoDB();

exports.handler = async (event, context) => {
  let date = new Date();

  console.log(event);
  if (event.request.userAttributes.sub) {
    let params = {
      Item: {
        id: { S: event.request.userAttributes.sub },
        __typename: { S: "Client" },
        _version: { N: "1" },
        email: { S: event.request.userAttributes.email },
        createdAt: { S: date.toISOString() },
        updatedAt: { S: date.toISOString() },
        phoneNumber: { S: event.request.userAttributes.phoneNumber },
        _lastChangedAt: { S: date.toISOString() },
        lastName: { S: "N/A" },
        firstName: { S: "N/A" },
      },
      TableName: process.env.CLIENTTABLE,
    };
    try {
      await ddb.putItem(params).promise();
      console.log("Success");
    } catch (err) {
      console.log("Error", err);
    }

    console.log("Success: Everything executed correctly");
    context.done(null, event);
  } else {
    console.log("Error: Nothing was written to DynamoDB");
    context.done(null, event);
  }
};
