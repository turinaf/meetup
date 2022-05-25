import {useRef} from 'react'

import Card from "../ui/Card";
import classes from './NewMeetupForm.module.css'
function NewMeetupForm(){
 const titleInputRef = useRef();
 const imageInputRef = useRef();
 const addressInputRef = useRef();
 const descriptionInputRef = useRef();

    function submitHandler(event){
        event.preventDefault(); // protects default browser event
        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meedupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription,
        }
        console.log(meedupData)
    }

    return <Card>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor="title">Meetup Title</label>
                <input type="text" requied="True" id='title' ref={titleInputRef} />
            </div>

            <div className={classes.control}>
                <label htmlFor="image">Meetup Image</label>
                <input type="url" requied="True" id='image' ref={imageInputRef} />
            </div>

            <div className={classes.control}>
                <label htmlFor="address">Meetup Address</label>
                <input type="text" requied="True" id='address' ref={addressInputRef}/>
            </div>

            <div className={classes.control}>
                <label htmlFor="decription">Meetup Description</label>
                <textarea id="description" required="True" rows='5' ref={descriptionInputRef}></textarea>
            </div>

            <div className={classes.actions}>
                <button>Add meetup</button>
            </div>
        </form>
    </Card>
}

export default NewMeetupForm;