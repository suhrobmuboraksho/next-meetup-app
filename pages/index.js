import MeetupList from "../components/meetups/MeetupList";

const MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Reseda blvd, Tarzana, CA",
    description: "This is the first meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Burbank blvd, Encino , CA",
    description: "This is the second meetup",
  },
];

export default function HomePage() {
  return <MeetupList meetups={MEETUPS} />;
}
