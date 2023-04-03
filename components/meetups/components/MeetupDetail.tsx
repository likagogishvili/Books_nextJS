import classes from "../styles/MeetupDetail.module.css";

function MeetupDetail(props: any) {
  return (
    <section className={classes.detail}>
      <img src={props.book.image} alt={props.book.title} />
      <h1>Title: {props.book.title}</h1>
      <address>Price: {props.book.Price} $</address>
      <p>Description: {props.book.description}</p>
    </section>
  );
}
export default MeetupDetail;
