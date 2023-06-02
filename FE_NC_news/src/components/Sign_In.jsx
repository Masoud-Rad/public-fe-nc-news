import {useState, useEffect} from 'react';
import {fetchUserByUsername} from "../utils"


function Sign_In() {

    const [enteredUserName,setEnteredUserName]=useState("")
    const [signUpClass, setSignUpClass]=useState("signUp-PtagClass")



  function handleSubmit(event){
        event.preventDefault();

            fetchUserByUsername(enteredUserName).then((response)=>{
    
             
             if(response===404){
                setSignUpClass("signUp-PtagClass-active")
             }else{}
        
            })

    }
    
    return (<>
    
    <form id='signInForm' onSubmit={handleSubmit}>


    <h4> Sign in</h4>

    <div>
        <label htmlFor="username-input">Enter your username please:</label>
        <input id="username-input"   placeholder="username..." value={enteredUserName} onChange={(event)=>{ setEnteredUserName(event.target.value) }}></input>
    </div>
   
    <p className={signUpClass}>User not found! please sign up</p>
   
        <button>Log in</button>


    </form>
</>)
}

export default Sign_In;