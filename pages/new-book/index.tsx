import NewMeetupForm from "@/components/meetups/components/NewMeetupForm";
import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment } from "react";

function AddBook() {
  const router = useRouter();
  async function onAddBook(enteredBook: any) {
    const response = await fetch("/api/new-book", {
      method: "POST",
      body: JSON.stringify(enteredBook),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    router.push("/");
  }

  return (
    <Fragment>
      <Head>
        <title>Add a new book</title>
        <meta name="description" content="Add a new book">
          Add a new book
        </meta>
      </Head>
      <NewMeetupForm onAddBook={onAddBook} />
    </Fragment>
  );
}
export default AddBook;
