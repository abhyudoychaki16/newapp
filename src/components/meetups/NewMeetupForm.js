import { useRef } from 'react';
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm(props){
    const titleInputRef=useRef();
    const imageInputRef=useRef();
    const addressInputRef=useRef();
    const descriptionInputRef=useRef();

    function SubmitHandler(event){
        event.preventDefault();
        const enteredTitle=titleInputRef.current.value;
        const enteredImage=imageInputRef.current.value;
        const enteredAddress=addressInputRef.current.value;
        const enteredDescription=descriptionInputRef.current.value;


        const MeetupData = {
            title:enteredTitle,
            image:enteredImage,
            address:enteredAddress,
            description:enteredDescription,
        }

        props.onAddMeetup(MeetupData);
    }
    return(
    <Card>
        <form className={classes.form} onSubmit={SubmitHandler}>
            <div className={classes.control}>
                <label htmlFor='title'>Meetup Title</label>
                <input type='text' required id='title' ref={titleInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='image'>Meetup Image</label>
                <input type='url' required id='image' ref={imageInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='address'>Meetup Address</label>
                <input type='text' required id='address' ref={addressInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='description'>Meetup Description</label>
                <textarea type='text' required id='description' ref={descriptionInputRef}/>
            </div>
            <div className={classes.control}>
                <button>Add Meetup</button>
            </div>
        </form>  
    </Card>
    );
}
export default NewMeetupForm;