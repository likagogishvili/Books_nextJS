import NewMeetupForm from "@/components/meetups/components/NewMeetupForm";

function AddBook() {
  function addMetupHandler(enteredMeetUpData: any) {
    console.log(enteredMeetUpData);
  }
  return <NewMeetupForm onAddMeetup={addMetupHandler} />;
}
export default AddBook;
