import classes from "../styles/MeetupDetail.module.css";

function MeetupDetail(props: any) {
  return (
    <section className={classes.detail}>
      <img src={props.book.image} alt={props.book.title} />
      <h1>{props.book.title}</h1>
      <address>{props.book.price}</address>
      <p>{props.book.description}</p>
    </section>
  );
}
export default MeetupDetail;
