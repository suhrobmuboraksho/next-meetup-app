import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

// const MEETUPS = [
//   {
//     id: "m1",
//     title: "A First Meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Reseda blvd, Tarzana, CA",
//     description: "This is the first meetup",
//   },
//   {
//     id: "m2",
//     title: "A Second Meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Burbank blvd, Encino , CA",
//     description: "This is the second meetup",
//   },
// ];

export default function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  const MONGO_API =
    "mongodb+srv://suhrobmuboraksho:tOHnJF6lI8e6sIaX@cluster0.9vuaze9.mongodb.net/meetups?retryWrites=true&w=majority";

  const client = await MongoClient.connect(MONGO_API);
  const db = client.db();

  const meetupCollection = db.collection("meetups");

  const meetups = await meetupCollection.find().toArray();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}
