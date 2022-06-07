import { useState, useEffect } from "react";

import MeetupList from "../components/meetups/MeetupList";

// const DUMMY_DATA = [
//     {
//         id: 'm1',
//         title: 'Intro to Meetup',
//         image: 'https://i.ytimg.com/vi/a9GktCj7oHE/maxresdefault.jpg',
//         address: 'Meetupstreet 5, 123456 Meetup City',
//         description: 'This is the description of the  the meetup. The meetup will be conducted online via zoom meeting. Everyone make sure you have zoom account and join the meeting ontime.'

//     },
//     {
//         id: 'm2',
//         title: 'Day2 of Meetup',
//         image: 'https://www.markant.org/assets/2017/11/meet-up.png',
//         address: 'Meetupstreet 5, 123456 Meetup City',
//         description: 'This is the description of the  the meetup. The meetup will be conducted online via zoom meeting. Everyone make sure you have zoom account and join the meeting ontime.'

//     },
//     {
//         id: 'm3',
//         title: 'Day 3 of  Meetup',
//         image: 'https://www.121creative.com.au/wp-content/uploads/2015/07/lets_meet_up.jpg',
//         address: 'Meetupstreet 5, 123456 Meetup City',
//         description: 'This is the description of the  the meetup. The meetup will be conducted online via zoom meeting. Everyone make sure you have zoom account and join the meeting ontime.'

//     },
// ];

function AllMeetupsPage(){
   const [isLoading, setIsLoading] =  useState(true);

   const [loadedMeetups, setLaodedMeetups] = useState([]);
    useEffect(()=>{
        setIsLoading(true)
        fetch('https://react-tut-58c6d-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json'
    ).then(response => {
        return response.json();
    }).then(data => {
        const meetups = []
        for (const key in data){
            const meetup = {
                id: key,
                ...data[key]
            };
         meetups.push(meetup)
        }
        setIsLoading(false)
        setLaodedMeetups(meetups)
    });
    }, []);
    

    if(isLoading){
        return <section>
            <p>Loading...</p>
        </section>
    }

    return <section>
        <h1>All meetups</h1>
        <MeetupList meetups={loadedMeetups} />
       
    </section>;
   }
   
   export default AllMeetupsPage;