
import React, { useEffect ,useState} from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import './news.css'
import Carosel from './Carosel'
import Topics from './Topics'
import CoinBase from './CoinBase'
import HealthHead from './HealthHead'
import TechHeader from './TechHeader'
import HeaderSports from './HeaderSports'
import ScienceHeader from './ScienceHead'
import InfiniteScroll from "react-infinite-scroll-component";
import {AllInclusive} from '@material-ui/icons'
import ApiNews from './ApiNews'
import {fetchPosts2} from'./api/index'
import Storybtn from './HealthCard'
import LiveScoreAPi from './LiveScoreAPi';
import Moment from 'react-moment';
import {Skeleton,Stack} from '@mui/material'
import Stories from 'react-insta-stories';
import { useDispatch, useSelector } from 'react-redux';
import CardPost from './CardPost';
import LocalApi from './LocalAPI'
import Button from './Buttons';
import VideoCard from './Videocard'
import Gallery from './Gallery'
import Notag from './Notag'
import { getPosts } from './actions/Post';
import NightsStayIcon from '@mui/icons-material/NightsStay';
function useQuery1() {
  return new URLSearchParams(useLocation().search);
}
function News(setCurrentId) {
  const history = useHistory() 
 

  const home=()=>{
    history.push("/")
    window.location.reload(false)
    }
  



// FETCH POST
  const query = useQuery1();
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');
  const user = JSON.parse(localStorage.getItem('profile'));
const {posts,isLoading}=useSelector((state)=>state.posts)
// console.log(posts)
const recommendedPosts = posts?.filter(({ tags }) => tags== 'trend');
// console.log(recommendedPosts)
// // stories
console.log(recommendedPosts)
var myDate = new Date();
var hours= myDate.getHours();
var greet;

if (hours < 12)
    greet =  "morning";
else if (hours >= 12 && hours <= 17)
    greet = "afternoon";
    
else if (hours >= 17 && hours <= 24)
    greet = "evening";
 <div>
  < NightsStayIcon/>
</div>




// const stories = 

//  posts?.map((post)=>(
//   post?.image!==""?
//     {
   
//       // type: post.image==""?"video":"image",
//      type:"image",
//       url: post?.image||post.video,
//       duration: 5000,
//       header: {
//         heading:post?.name,
    
//           subheading:(<Moment fromNow>{post.createdAt}</Moment>) ,
//         profileImage: post?.photo,
//       },
     
//     }
//     :(<div>hello</div>)
//     ))

if(!posts?.length && !isLoading){
  return <div className="no_search">

<div className="search__header__result"> 
        <h3>No Result Found</h3>
        <img src="https://img.icons8.com/ios/50/000000/search-property.png"/>
    <a><h3 onClick={home}>Back To Home</h3></a>  
       </div> 

  </div>
}
return (
<div className="news">
  {/* <div className="news_greet">
  <h6>Good {greet}!</h6>
{user?(<h3>{user.result._tokenResponse.firstName}</h3>):""}
 <p>Todays Trending News</ p>
 
  </div> */}
   <Topics/>
  
<Carosel/>

  
 
{/* {
isLoading?(<div className="loader__news"> */}
 {/* <Stack spacing={1}>
   
      <Skeleton variant="circular" width={30} height={30} />
      <Skeleton variant="rectangular" width={400} height={118} />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
      
    </Stack> */}
{/* 
<p>loading...</p>
</div>): */}
<div>
   <div className="stories">
  <div className="stories1">
{/* <Stories
			stories={stories}
			defaultInterval={1500}
			width="100%"
			height={220}
      isPaused={true}
      loop={false}
 mute={true}
      storyStyles={{

       Zindex:"0",
        width: '430px',
        maxWidth: '100%',
        maxHeight: '100%',
        margin: 'auto',
        objectFit:'cover',
        height: '220px',

      }
      }
		/> */}
 
     </div>
     {/* <div className="stories2">
       
<p> HOOK DISCOVERIES</p>
<AllInclusive/>
     </div> */}

    </div>
    {recommendedPosts.map((post,index)=>(  
    
    index<3&&(
      
      // post.tags!=="Local News"?"":(
<CardPost post={post} setCurrentId={setCurrentId} key={post._id}
newsrc={post.name}
newtype={post.accountType}
newstypeimg ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYd2zxgqMSBA62puWUurhS_MLaOmpoOEoQZA&usqp=CAU"
Url="url"
newimage={post.image}
video={post.video}
title={post.title}
description={post.description}
tag={post.tags}
seeMore="see more..."
articlebody={post.description}
ProviderUrl="url"
time={post.createdAt}
share=""
photo={post.photo}
love={post.likeCount}
comment={post.comments.length}
_id={post._id}
/>

  )))}
  <Button/>
    <HeaderSports/>
    < Gallery/>

</div>

<div className="ap">
<div className="Page__div">
  {/* <LiveScoreAPi/> */}


  <TechHeader/>
  <Storybtn/>
 
<p style={{textAlign: 'left',color:'#2196f3',marginLeft:'10px'}}>SUGESTED FOR YOU</p>
   {/* <LiveScoreAPi/>  */}
   <CoinBase/> 
  {/* <Ghanaprimier/> */}
  <ScienceHeader/>


 <p style={{textAlign: 'left',color:'#2196f3',marginLeft:'10px'}}>SUGESTED FOR YOU</p>

<ApiNews/>
<Notag/>
<LocalApi/>
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1446397159695121"
     crossorigin="anonymous"></script>
<ins class="adsbygoogle"
     style="display:block"
     data-ad-format="fluid"
     data-ad-layout-key="-fb+5w+4e-db+86"
     data-ad-client="ca-pub-1446397159695121"
     data-ad-slot="2132932064"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
</div>

  <div className="apis">

</div>
</div>


</div>

)
}

export default News
