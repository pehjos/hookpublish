import React,{useEffect,useState,lazy,Suspense} from 'react';
import {getPosts} from './actions/Post'
import PostDeatils from './PostDeatails'
import {useDispatch,} from 'react-redux'
import OneSignal from 'react-onesignal';
import Appbar from './Appbar'
import BottomNav from './BotoMnav'
import About from './About'
import Help from './Help'
import User from './User'
import VolleyLive from './VolleyLive'
import Star from './Stars'
import Settings from './Settings'
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import BottonNav from './BotoMnav'
import RadioCard from './RadioCard'
import  Quickac from './Quickac'
import Audiostream  from './Audiostream'
import Commentrybody from './Commentrybody'
import Commentrybar from './Commentrybar'
import useTheme from './useTheme'
import GoogleAuth from  './GoogleAuth'
import Loader from './Loader'
import Auth from './Auth'
import CardPost from './CardPost'
import{BrowserRouter as Router,Route ,Switch} from 'react-router-dom'
import { useHistory,useLocation } from 'react-router-dom';
import Desktopnav from  './Desktopnav'
import Adsence from './Adsence'
import Adsence1 from './Adsence1'
import Addpost from './Addpost'
import Styles from './Style'
import './App.css';
import {ThemeProvider,createGlobalStyle} from 'styled-components'
import Shop from './Shop'
import Image from './Image'
import Video from './Video'
import Profile from './Profile';
import Search from './Search';
import News from './News'
import World from './World'
import Sports from './Sports'
import   LiveScoreAPi from './LiveScoreAPi'
import Postdetail from './Postdetail'
import BitcoinApi from './BitcoinApi'
import Science from './Science'
import Technology from './Technology'
import Currency from './Currency'
import PostsDeatail from './PostsDeatail'
import Discover from './Discover';
import Privacy from './Privacy'
import HealthHome from './HealthHome'
import Entertainment from './Entertaiment'
//GLOBAL STYLE
function useQuery(){
  return new URLSearchParams(useLocation().image);
  }
function App() {
// SEARCH QUERY
const [search,setSearch]=useState('')
// const query=useQuery()
// const history=useHistory()
// const page=query.get('page')||1
// const SearchQuery=query.get('searchQuery')
//  REDUX DISPATCH STATE
const [currentId, setCurrentId] = useState(0);
const dispatch1 = useDispatch();
const [{}, dispatch] = useStateValue();
useEffect(() => {
  dispatch1(getPosts());
}, [currentId, dispatch1]);

console.log(currentId);
useEffect(() => {
  // will only run once when the app component loads...

  auth.onAuthStateChanged((authUser) => {
    console.log("THE USER IS >>> ", authUser);

    if (authUser) {
      // the user just logged in / the user was logged in

      dispatch({
        type: "SET_USER",
        user: authUser,
        
      });
      localStorage.setItem("user",JSON.stringify(authUser))
    } else {
      // the user is logged out
      dispatch({
        type: "SET_USER",
        user: null,
      });
    }
  });
 
}, []);

useEffect(() => {
  OneSignal.init({
    appId: "a7df134b-b37d-4514-81ca-c83655d40380"
  });
}, []);

const theme=useTheme()

return (

<Router>
{/* {loading?(<Loader/>):( */}
<ThemeProvider theme={theme}>

  <>
  < Styles/>

<div className="app">


<BottomNav/>

 
<Switch>
{/* commentry news */}
  {/* commentry for mobile */}
<Route path="/commentry">
<Commentrybar/>
<Commentrybody setCurrentId={setCurrentId}/>

</Route>
<Route path="/profile/:id">
<Profile/>
<BottomNav/>
</Route>
<Route path="/user/:id">
<User/>
<BottomNav/>
</Route>
<Route path="/radio">
<RadioCard/>
<Star/>
</Route>
<Route path="/privacy">
<Privacy/>
</Route>
<Route path="/about">
<About/>
</Route>
<Route path="/setting">
<Settings/>
</Route>
<Route path="/crypto">
<BitcoinApi/>
</Route>
<Route path="/rate">
<Currency/> 
</Route>
<Route path="/hook">
<Search/>
</Route>
<Route path="/football">
{/* <SoccerLive/> */}
</Route>
<Route path="/volleyball">
<VolleyLive/>
</Route>
<Route path="/auth">
<GoogleAuth/>
</Route>
<Route path="/help">
<Help/>
</Route>
<Route path="/addpost">
<Addpost currentId={currentId} setCurrentId={setCurrentId}/>



</Route>

<Route path="/cardpost">
<CardPost setCurrentId={setCurrentId} />



</Route>
{/* audio */}
<Route path="/audio">
<Commentrybar/>
<Audiostream/>


</Route>
<Route path="/post/:id">
<PostDeatils/>
<BottomNav/>
</Route>
<Route path="/read">
<Postdetail/>

</Route>

<Route path="/reads">
<PostsDeatail/>

</Route>
{/*videostream */}
<Route path="/videostream">
<Commentrybar/>
<p>hello me</p>

</Route>

<Route path="/shop">
{/* <Appbar/> */}

<Star/>
<div className="app__body">
<div className="app__bodynav">
<Desktopnav/>

</div>

<div className="app__bodyfeed">

<Shop/>
<Quickac/>
</div>

<div className="app__bodyadsence">

<Adsence/>

</div>

</div>
</Route>



<Route path="/video">
<Appbar/>

<Star/>
<div className="app__body">
<div className="app__bodynav">
<Desktopnav/>

</div>

<div className="app__bodyfeed">
<Video/>
<Quickac/>
</div>

<div className="app__bodyadsence">

<Adsence/>

</div>

</div>
</Route>



<Route path="/discover">
<Discover/>
</Route>
  {/* 
  trtial
  */}
<Route path="/image">
{/* <Appbar/> */}


<div className="app__body">
<div className="app__bodynav">
<Desktopnav/>
</div>

<div className="app__bodyfeed">
<Image/>
<Star/>
</div>

<div className="app__bodyadsence">

<Adsence/>

</div>

</div>
</Route>
<Route path="/notification">
<Appbar/>
<Adsence1/>

<h4>Please am very sorry,sometime in testing mode we only deliver nonsence TEXT</h4>
</Route>

{/*the hook news navbar*/}
<Route path="/world">
<Appbar/>

<div className="app__body">
<div className="app__bodynav">
<Desktopnav/>
<Quickac/>
</div>

<div className="app__bodyfeed">
<World/>
<Star/>
<Quickac/>
</div>

<div className="app__bodyadsence">

<Adsence/>

</div>

</div>
</Route>
<Route path="/entertainment">
<Appbar/>

<div className="app__body">
<div className="app__bodynav">
<Desktopnav/>

</div>

<div className="app__bodyfeed">
<Entertainment/>
<Star/>
<Quickac/>
</div>

<div className="app__bodyadsence">

<Adsence/>


</div>

</div>
</Route>
<Route path="/sports">
<Appbar/>

<div className="app__body">
<div className="app__bodynav">
<Desktopnav/>

</div>

<div className="app__bodyfeed">
{/* <LiveScoreAPi/> */}
<Sports/>
<Star/>
<Quickac/>
</div>

<div className="app__bodyadsence">

<Adsence/>


</div>

</div>
</Route>
<Route path="/fanancial">
<Appbar/>

<div className="app__body">
<div className="app__bodynav">
<Desktopnav/>
</div>

<div className="app__bodyfeed">
<Star/>
<Quickac/>
</div>

<div className="app__bodyadsence">

<Adsence/>

</div>

</div>
</Route>

<Route path="/science">
<Appbar/>

<div className="app__body">
<div className="app__bodynav">
<Desktopnav/>

</div>

<div className="app__bodyfeed">
<Science/>
<Star/>
<Quickac/>
</div>

<div className="app__bodyadsence">

<Adsence/>


</div>

</div>
</Route>
<Route path="/health">
<Appbar/>

<div className="app__body">
<div className="app__bodynav">
<Desktopnav/>

</div>

<div className="app__bodyfeed">
<HealthHome/>
<Star/>
<Quickac/>
</div>

<div className="app__bodyadsence">

<Adsence/>


</div>

</div>
</Route>
<Route path="/technology">
<Appbar/>

<div className="app__body">
<div className="app__bodynav">
<Desktopnav/>
</div>

<div className="app__bodyfeed">
<Technology/>
<Star/>
<Quickac/>
</div>

<div className="app__bodyadsence">

<Adsence/>

</div>

</div>
</Route>
<Route path="/music">


<div className="app__body">
<div className="app__bodynav">
<Desktopnav/>
</div>

<div className="app__bodyfeed">
<Star/>

</div>

<div className="app__bodyadsence">

<Adsence/>

</div>

</div>
</Route>

{/*the hook news navbar*/}








{/* news in details */}



<Route path="/">
<Appbar/>

<BottomNav/>
<div className="app__body">
<div className="app__bodynav">
<Desktopnav/>
</div>

<div className="app__bodyfeed">
<News/>

<Star/>
<Quickac/>
</div>

<div className="app__bodyadsence">

<Adsence/>

</div>

</div>
</Route>


</Switch>

</div>

</>

</ThemeProvider>
{/* )} */}
</Router>

);

}

export default App;
