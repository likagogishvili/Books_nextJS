import BookItem from './BookItem';
import classes from '../styles/BookList.module.css';

function BookList(props:any) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup:any) => (
        <BookItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          price={meetup.price}
        />
      ))}
    </ul>
  );
}

export default BookList;
