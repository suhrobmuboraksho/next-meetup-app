import { MongoClient } from "mongodb";

MONGO_API =
  "mongodb+srv://suhrobmuboraksho:tOHnJF6lI8e6sIaX@cluster0.9vuaze9.mongodb.net/meetups?retryWrites=true&w=majority";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { data } = req;

    const client = await MongoClient.connect(MONGO_API);
    const db = client.db();

    const meetupCollection = db.collection("meetups");

    const result = await meetupCollection.insertOne(data);

    client.close();

    req.status(201).json({ message: "Meetup inserted!" });
  }
}
