import MeetupList from "@/components/meetups/components/MeetupList";
import { useEffect, useState } from "react";
const dummy_meetups = [
  {
    id: "m1",
    title: "A first book",
    image:
      "https://img.freepik.com/free-psd/magazine-cover-mockup-psd-with-nature-image_53876-116363.jpg?w=1380&t=st=1680160430~exp=1680161030~hmac=a193fd060a41b0a8912846c99312dfeb32896bbd7bfbf0a4f29baa93738fd414",
    price: 18,
    description: "Such a great book",
  },
  {
    id: "m2",
    title: "A second book",
    image:
      "https://img.freepik.com/free-psd/magazine-cover-mockup-psd-with-nature-image_53876-116363.jpg?w=1380&t=st=1680160430~exp=1680161030~hmac=a193fd060a41b0a8912846c99312dfeb32896bbd7bfbf0a4f29baa93738fd414",
    price: 19,
    description: "Such a great book1",
  },

  {
    id: "m3",
    title: "A third book",
    image:
      "https://img.freepik.com/free-psd/magazine-cover-mockup-psd-with-nature-image_53876-116363.jpg?w=1380&t=st=1680160430~exp=1680161030~hmac=a193fd060a41b0a8912846c99312dfeb32896bbd7bfbf0a4f29baa93738fd414",
    price: 20,
    description: "Such a great book2",
  },
];
function HomePage(props: any) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  //fetch data from an api
  return {
    props: {
      meetups: dummy_meetups,
    },
    revalidate: 10,
  };
}

export default HomePage;
