import Card from "../../ui/Card";
import classes from "../styles/BookItem.module.css";
import { useRouter } from "next/router";
function BookItem(props: any) {
  const router = useRouter();

  const showDetailsHandler = () => {
    router.push("/" + props.id);
  };
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <p>{props.price} $</p>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default BookItem;
