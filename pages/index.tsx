import MeetupList from "@/components/meetups/components/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";
function HomePage(props: any) {
  return (
    <Fragment>

      <MeetupList meetups={props.selectedBook} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://likagogishvili2:lika2001@books.u2r6dxc.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();
  const booksCollection = db.collection("books");
  const books = await booksCollection.find().toArray();
  client.close();
  //fetch data from an api
  fetch("/api.books");
  return {
    props: {
      selectedBook: books.map((book) => ({
        title: book.title,
        price: book.Price,
        image: book.image,
        id: book._id.toString(),
      })),
    },
    revalidate: 10,
  };
}

export default HomePage;
