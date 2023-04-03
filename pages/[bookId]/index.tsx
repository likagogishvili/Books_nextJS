import MeetupDetail from "@/components/meetups/components/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";

function Book(props: any) {
  return <MeetupDetail book={props.MeetupData} />;
}
export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://likagogishvili2:lika2001@books.u2r6dxc.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();
  const booksCollection = db.collection("books");
  // @ts-ignore
  const books = await booksCollection.find({}, { _id: 1 }).toArray();
  client.close();
  return {
    fallback: true,
    paths: books.map((book) => ({ params: { bookId: book._id.toString() } })),
  };
}

export async function getStaticProps(contex: any) {
  const bookId = contex.params.bookId;
  let selectedbook;

  const client = await MongoClient.connect(
    "mongodb+srv://likagogishvili2:lika2001@books.u2r6dxc.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();
  const booksCollection = db.collection("books");
  // @ts-ignore
  selectedbook = await booksCollection.findOne({ _id: new ObjectId(bookId) });
  client.close();

  return {
    props: {
      MeetupData: {
        id: selectedbook?._id.toString(),
        title: selectedbook?.title,
        image: selectedbook?.image,
        Price: selectedbook?.Price,
        description: selectedbook?.description,
      },
    },
  };
}

export default Book;
