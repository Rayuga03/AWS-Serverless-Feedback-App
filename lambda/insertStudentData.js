const AWS = require("aws-sdk");

const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {

    const body = JSON.parse(event.body);

    const params = {
        TableName: "studentData",
        Item: {
            studentid: body.studentid,
            name: body.name,
            class: body.class,
            age: body.age
        }
    };

    try {
        await dynamoDB.put(params).promise();

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: "Student data saved successfully"
            })
        };

    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
};
