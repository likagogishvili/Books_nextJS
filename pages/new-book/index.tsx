import NewMeetupForm from "@/components/meetups/components/NewMeetupForm";
import { useRouter } from "next/router";

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

  return <NewMeetupForm onAddBook={onAddBook} />;
}
export default AddBook;
