import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate } from 'react-router-dom';
function NewMeetupPage(){
    const navigate = useNavigate();
    function AddMeetupHandler(MeetupData){
        fetch('https://chaki-react-project-default-rtdb.firebaseio.com/meetups.json',
        {
            method:'POST',
            body: JSON.stringify(MeetupData),
            headers:{
                'Content-Type':'application/json'
            }
        }).then(()=>{
            navigate({
                pathname:'/',
                replace:true
            });
        });
    }
    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={AddMeetupHandler}/>
        </section>
    );
}
export default NewMeetupPage;