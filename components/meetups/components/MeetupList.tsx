import MeetupItem from './MeetupItem';
import classes from '../styles/MeetupList.module.css';

function MeetupList(props:any) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup:any) => (
        <MeetupItem
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

export default MeetupList;
