/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
// const topicNameOrId = 'YOUR_TOPIC_NAME_OR_ID';
// const subscriptionNameOrId = 'YOUR_SUBSCRIPTION_NAME_OR_ID';
// const filterString = 'YOUR_FILTER_STRING';   // e.g. 'attributes.author="unknown"'

// Imports the Google Cloud client library
const {PubSub} = require('@google-cloud/pubsub');

// Creates a client; cache this for further use
const pubSubClient = new PubSub();

async function createSubscriptionWithFilter(
  topicNameOrId,
  subscriptionNameOrId,
  filterString
) {
  // Creates a new subscription
  await pubSubClient
    .topic(topicNameOrId)
    .createSubscription(subscriptionNameOrId, {
      filter: filterString,
    });
  console.log(
    `Created subscription ${subscriptionNameOrId} with filter ${filterString}.`
  );
}