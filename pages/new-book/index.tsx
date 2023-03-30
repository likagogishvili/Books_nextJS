import NewMeetupForm from "@/components/meetups/components/NewMeetupForm";

function AddBook() {
  function onAddBook(enteredBook: any) {
    console.log(enteredBook);
  }
  return <NewMeetupForm onAddBook={onAddBook} />;
}
export default AddBook;
