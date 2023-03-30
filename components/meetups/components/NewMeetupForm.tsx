import { useRef } from "react";

import Card from "../../ui/Card";
import classes from "../styles/NewMeetupForm.module.css";

function NewMeetupForm(props: any) {
  const titleInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const PriceInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = useRef();

  function submitHandler(event: any) {
    event.preventDefault();
    const enteredTitle = titleInputRef.current!.value;
    const enteredImage = imageInputRef.current!.value;
    const enteredPrice = PriceInputRef.current!.value;
    // @ts-ignore
    const enteredDescription = descriptionInputRef.current.value;

    const BookData = {
      title: enteredTitle,
      image: enteredImage,
      Price: enteredPrice,
      description: enteredDescription,
    };

    props.onAddBook(BookData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Book Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Book Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="Price">Price</label>
          <input type="text" required id="Price" ref={PriceInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>

          <textarea
            id="description"
            required
            rows={5}
            // @ts-ignore
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Book</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
