import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail";

export default function MeetupDetails({ meetupData }) {
  return (
    <MeetupDetail
      image={meetupData.image}
      title={meetupData.title}
      address={meetupData.address}
      description={meetupData.description}
    />
  );
}

export async function getStaticPaths() {
  const MONGO_API =
    "mongodb+srv://suhrobmuboraksho:tOHnJF6lI8e6sIaX@cluster0.9vuaze9.mongodb.net/meetups?retryWrites=true&w=majority";
  const client = await MongoClient.connect(MONGO_API);
  const db = client.db();

  const meetupCollection = db.collection("meetups");

  const meetups = await meetupCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const MONGO_API =
    "mongodb+srv://suhrobmuboraksho:tOHnJF6lI8e6sIaX@cluster0.9vuaze9.mongodb.net/meetups?retryWrites=true&w=majority";
  const client = await MongoClient.connect(MONGO_API);
  const db = client.db();

  const meetupCollection = db.collection("meetups");

  const selectedMeetup = await meetupCollection.findOne({
    _id: new ObjectId(meetupId),
  });

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
}
