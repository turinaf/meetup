import Card from "../ui/Card";
import classes from './NewMeetupForm.module.css'
function NewMeetupForm(){
    return <Card>
        <form className={classes.form}>
            <div className={classes.control}>
                <label htmlFor="title">Meetup Title</label>
                <input type="text" requied id='title' />
            </div>

            <div className={classes.control}>
                <label htmlFor="image">Meetup Image</label>
                <input type="url" requied id='image' />
            </div>

            <div className={classes.control}>
                <label htmlFor="address">Meetup Address</label>
                <input type="text" requied id='address' />
            </div>

            <div className={classes.control}>
                <label htmlFor="decription">Meetup Description</label>
                <textarea id="description" required rows='5'></textarea>
            </div>

            <div className={classes.actions}>
                <button>Add meetup</button>
            </div>
        </form>
    </Card>
}

export default NewMeetupForm;