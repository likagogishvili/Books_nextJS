import MeetupDetail from "@/components/meetups/components/MeetupDetail";

function Book(props: any) {
  return <MeetupDetail book={props.MeetupData} />;
}
export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          bookId: "m1",
        },
      },
      {
        params: {
          bookId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(contex: any) {
  const bookId = contex.params.bookId;
  return {
    props: {
      MeetupData: {
        image:
          "https://img.freepik.com/free-psd/magazine-cover-mockup-psd-with-nature-image_53876-116363.jpg?w=1380&t=st=1680167472~exp=1680168072~hmac=128a00a981a57817836e8befd21f9fc39ce0e20a80b256cda39c46b0b41b62ca",
        title: "m1",
        id: bookId,
        price: 40,
        description: "desc",
      },
    },
  };
}

export default Book;
