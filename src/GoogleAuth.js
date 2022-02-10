import React, { useState } from 'react'
import './googleauth.css'
import {AUTH }from './constants/actionTypes';
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase'
import { useDispatch } from 'react-redux';
import {  signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import img from './search.png'
import {FacebookAuthProvider } from "firebase/auth";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { TwitterAuthProvider } from "firebase/auth";
import tw from './tw.png'
import fb from './fb.png'
function Login() {
     const user = JSON.parse(localStorage.getItem('profile'));    


const history = useHistory();
const dispatch = useDispatch();
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const provider = new GoogleAuthProvider();
const signIn = e => {
e.preventDefault();


signInWithEmailAndPassword(auth ,email, password)
.then((userCredetial) => {
     const token = userCredetial.accessToken;
     const result = userCredetial.user;
          dispatch({ type: AUTH, data: { result, token } });
          history.push('/');

history.push('/')
})
.catch(error => alert(error.message))
}

const register = e => {
e.preventDefault();

createUserWithEmailAndPassword(auth ,email, password)
.then((userCredetial) => {
// it successfully created a new user with email and password
if (userCredetial) {
     const token = userCredetial.accessToken;
     const result = userCredetial.user;
          dispatch({ type: AUTH, data: { result, token } });
         
          history.push('/');
}
})
.catch(error => alert(error.message))
}
const windowSign=()=>{
signInWithPopup(auth,provider )
.then((result) => {
// This gives you a Google Access Token. You can use it to access the Google API.
const credential = GoogleAuthProvider.credentialFromResult(result);

const token = credential.accessToken;
const user = result.user;
     dispatch({ type: AUTH, data: { result, token } });
    
     history.push('/');
    

// The signed-in user info.

console.log(user, "window signin")




// const result = res?.profileObj;
// const token = res?.tokenId;
// console.log(res,"sucessful")
// try {
// dispatch({ type: AUTH, data: { result, token } });

// history.push('/');
// } catch (error) {
// console.log(error);
// }
// };







// ...
}).catch((error) => {
// Handle Errors here.
const errorCode = error.code;
const errorMessage = error.message;
// The email of the user's account used.
const email = error.email;
// The AuthCredential type that was used.
const credential = GoogleAuthProvider.credentialFromError(error);
// ...
});

}
const providerbook = new FacebookAuthProvider();
const facebook =()=>{
     const auth = getAuth();
     signInWithPopup(auth, providerbook)
       .then((result) => {
         // The signed-in user info.
         const user = result.user;
     
         // This gives you a Facebook Access Token. You can use it to access the Facebook API.
         const credential = FacebookAuthProvider.credentialFromResult(result);
         const token = credential.accessToken;
              dispatch({ type: AUTH, data: { result, token } });
             
              history.push('/');
             
         
         // The signed-in user info.
         
         console.log(user, "facebook signin")
         // ...
       })
       .catch((error) => {
         // Handle Errors here.
         const errorCode = error.code;
         const errorMessage = error.message;
         // The email of the user's account used.
         const email = error.email;
         // The AuthCredential type that was used.
         const credential = FacebookAuthProvider.credentialFromError(error);
     
         // ...
       });
     
 


}
//twitter auth
const providertwitter = new TwitterAuthProvider();
const twitter = ()=>{
     const auth = getAuth();
     signInWithPopup(auth, providertwitter)
       .then((result) => {
         // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
         // You can use these server side with your app's credentials to access the Twitter API.
         const credential = TwitterAuthProvider.credentialFromResult(result);
         const token = credential.accessToken;
         const secret = credential.secret;
     
         // The signed-in user info.
         const user = result.user;
      
              dispatch({ type: AUTH, data: { result, token } });
             
              history.push('/');
              localStorage.setItem("user",JSON.stringify(result))
         
         // The signed-in user info.
         
         console.log(user, "window twitter")
       }).catch((error) => {
        console.error(error,"bad request")
         const errorCode = error.code;
         const errorMessage = error.message;
         // The email of the user's account used.
         const email = error.email;
         // The AuthCredential type that was used.
         const credential = TwitterAuthProvider.credentialFromError(error);
         // ...
       });
     



}

return (
<div className="Login">
     {
user?(<div className="userin">
<Link to="/"><p>Continue as {user.result.user?.displayName}</p></Link>
</div>):""


     }

<div className="login__container">
<h1>Log in to hookwall</h1>
<p>Manage your account, check notification,create a new account, to  start bloging without a website
     for free.</p>
<form>
    
{/* <h5>Email</h5>
<input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>
<h5>Password</h5>
<input type="password"value={password} onChange={e=>setPassword(e.target.value)}/>

<button type="submit" className="loginregis"onClick={signIn}>Sign In</button>
<button type="submit" className="loginregis"onClick={register}>Create hookwall Account</button>
<h6>OR</h6> */}
<div className="google">
<img src={img}/>
<p onClick={windowSign}>Sign in With Google</p>
</div>
<div className="google">
<img src={fb}/>
<p onClick={facebook}>Sign in With Facebook</p>
</div>
<div className="google">
<img src={tw}/>
<p onClick={twitter}>Sign in With twitter</p>
</div>
</form>




</div>
</div>
)
}

export default Login
