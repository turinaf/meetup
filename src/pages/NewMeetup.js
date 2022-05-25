import { useNavigate } from 'react-router-dom'
import NewMeetupForm from "../components/meetups/NewMeetupForm";
function NewMeetupPage(){
    const navigate =  useNavigate();
     function addMeetupHandler(meetupData){
          fetch('https://react-tut-58c6d-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json', {
               method: 'POST',
               body: JSON.stringify(meetupData),
               headers: {
                    'Content-Type': 'application/json'
               }
          }
          ).then(() => {
               navigate('/');
          });
     }
    return (
    <section>
         <h1> Add New Meetup  page</h1>
         <NewMeetupForm onAddMeetup={addMeetupHandler} />

        </section>
        );
   }
   
export default NewMeetupPage;