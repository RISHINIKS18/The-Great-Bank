const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb+srv://admin:admin123@crypto.smvzhxz.mongodb.net/?retryWrites=true&w=majority';

// Create a new MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Function to connect and perform operations
async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    console.log('Connected to MongoDB Atlas');

    // Specify the database to use
    const db = client.db('<database>');

    // Perform operations using the db object
    // For example, you can insert a document into a collection
    const collection = db.collection('<collection>');
    await collection.insertOne({ name: 'John', age: 30 });
    console.log('Document inserted successfully');
  } finally {
    // Close the client connection
    await client.close();
    console.log('Disconnected from MongoDB Atlas');
  }
}

// Run the main function
run().catch(console.error);
