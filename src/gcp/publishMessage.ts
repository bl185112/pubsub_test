/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
const topicNameOrId = 'my-first-topic';

// Imports the Google Cloud client library
const { PubSub } = require('@google-cloud/pubsub');

// Creates a client; cache this for further use
const pubSubClient = new PubSub();

async function publishMessage(message) {

    let data = JSON.stringify(message );
    // Publishes the message as a string, e.g. "Hello, world!" or JSON.stringify(someObject)
    const dataBuffer = Buffer.from(data);

    try {
        const messageId = await pubSubClient
            .topic(topicNameOrId)
            .publishMessage({ data: dataBuffer });
        console.log(`Message ${messageId} published.`);
    } catch (error) {
        console.error(`Received error while publishing: ${error.message}`);
        process.exitCode = 1;
    }
}

export default publishMessage;