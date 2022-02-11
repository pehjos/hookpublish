import React, { useState,useRef } from 'react'
import Linkify from 'react-linkify';
import Rightmobileslider from'@material-ui/core/Drawer'
import {useHistory} from 'react-router-dom'
import {LIKE}from './constants/actionTypes';
import AddReactionOutlinedIcon from '@mui/icons-material/AddReactionOutlined';
import './card.css'
// import {userTrack} from './actions/auth'
import {useSelector} from 'react-redux'
import optionalimage from './logo.jpg'
import Moment from 'react-moment';
import Hashtags from 'react-highlight-hashtags';
import { motion } from "framer-motion"
import {Avatar} from '@material-ui/core'
import {useDispatch} from 'react-redux'
import {deletePost} from './actions/Post'
import {likePost} from './actions/Post'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import BookmarkTwoToneIcon from '@mui/icons-material/BookmarkTwoTone';
import ShareTwoToneIcon from '@mui/icons-material/ShareTwoTone';
import LibraryBooksTwoToneIcon from '@mui/icons-material/LibraryBooksTwoTone';
import LinkTwoToneIcon from '@mui/icons-material/LinkTwoTone';
import BlockTwoToneIcon from '@mui/icons-material/BlockTwoTone';
import ThumbUpAltTwoToneIcon from '@mui/icons-material/ThumbUpAltTwoTone';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import GoogleAuth from './GoogleAuth'
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import Commentsection from './Commentsection'

import ReactImageFallback from "react-image-fallback";
import {
Card,
IconButton
} from '@material-ui/core'
import {
AccessTime,
ShareOutlined,
FavoriteBorder,
NewReleasesRounded,
CommentOutlined,
ChatBubbleOutline,
CheckCircle,
Close,
VisibilityOffOutlined,
PersonAddDisabledOutlined,
VolumeMuteOutlined,
BlockOutlined,
ErrorOutlineOutlined,
VisibilityOutlined,
PlayArrowRounded,

Timeline,MoreHoriz,
Photo,
DeleteTwoTone,
EditAttributesOutlined
} from '@material-ui/icons'


function CardPost({newsrc,tag,_id,title,newimage,seeMore,description,time,newstypeimg,love,comment,share,Url,articlebody,ProviderUrl,setCurrentId,post,video,photo})

{
  const [count, setCount] = useState(0);
// PLAY VIDEO

const [isVideoplaying, setisVideoplaying]=useState(false)
const Videoref=useRef(null)
const Playvideo=()=>{
if(isVideoplaying){
//stop
Videoref.current.pause()
setisVideoplaying(false)

}else{
//play
Videoref.current.play()
setisVideoplaying(true)
const time =video.getTime
console.log(time)
}

}
const [favcolor ,setFavcolor]=useState(true)

const changrcolor=()=>{
if(favcolor){
setFavcolor(false)

}else{
setFavcolor(true)
}


}
const [statebody, setStatebody] = useState(false)
const ShowWatchbody=()=>{
if(statebody){
setStatebody(false)
}
else{
setStatebody(true)
}
}
// Like button
const dispatch = useDispatch();
const user = JSON.parse(localStorage.getItem('profile'));
const [message, SetMessage] = useState('');
const [temp,setTemp]= useState('')
const [comments, setComments] = useState(post?.likes);
const handleComment = async () => {
const newComments = await dispatch(likePost(`${userId}: ${message}`, post._id));

SetMessage('');
setComments(newComments);
console.log(message)
//   commentsRef.current.scrollIntoView({ behavior: 'smooth',top:500 });
};







const [likes, setLikes] = useState(post?.likes);
const [newLikes, setNewLikes] = useState(false)
const userId =  user?.result.user?.uid;
const hasLikedPost = post.likes.find((like) => like === userId);

const userLike=post.likes.includes(userId)
console.log(userLike)

const handleLike = async () => {
dispatch(likePost( post._id ,` ${userId}`));

if (hasLikedPost) {

setLikes(post.likes.filter((id) => id !== userId));
// document.getElementById('up').style.opacity="1"
// document.getElementById('up').style.pointerEvents="none"
} else {
setLikes([...post.likes, userId]);

// document.getElementById('down').style.opacity="1"
// document.getElementById('down').style.pointerEvents="initial"
}
};

const Likes = () => {
if (likes.length > 0) {
return likes.find((like) => like === userId)
? (
  <><ThumbUpAltIcon id="up"  style={{color:'#2196f3',fontSize:30}}/>&nbsp;{likes.length > 2 ? `${likes.length } ` : `${likes.length} ${likes.length > 1 ? '' : ''}` }</>
) : (
  <><ThumbUpAltOutlined id="up" style={{fontSize:30}} fontSize="small"  />&nbsp;{likes.length} {likes.length === 1 ? '' : ''}</>
);
}

return <><ThumbUpAltOutlined id="up" fontSize="small" />&nbsp;</>;
};




// open post
const urll=`hookwal.com/post/${_id}`
const scrolltop= () => window.scrollTo({top:"0",behavior:"smooth"})
const history=useHistory()
const openPost=()=>
{
history.push(`/post/${post._id}`)
}

const Auth=()=>
{
history.push("/auth")
}
const openProfile=()=>
{
history.push(`/user/${post._id}`)
// window.location.reload(true)
}

//  share

const canonical = document.querySelector("link[rel=canonical]");
const url=`/post/${_id}`
const shareDetails = { url, tag, title};

const handleSharing = async () => {
if (navigator.share) {
try {
  await navigator
    .share(shareDetails)
    .then(() =>
      console.log("Hooray! Your content was shared to tha world")
    );
} catch (error) {
  console.log(`Oops! I couldn't share to the world because: ${error}`);
}
} else {
// fallback code
console.log(
  "Web share is currently not supported on this browser. Please provide a callback"
);
}
};


// comment component
const [stated, setStated] = useState(false)
const ShowWatch=()=>{
if(stated){
setStated(false)


}
else{
setStated(true)


}
}


// imoji likecom
const [stated1, setStated1] = useState(false)
const ShowWatch1=()=>{
if(stated1){
setStated1(false)



}
else{
setStated1(true)


}
}

// imoji likecom
const [stated2, setStated2] = useState(false)
const ShowWatch2=()=>{
if(stated2){
setStated2(false)



}
else{
setStated2(true)


}
}

const [state,setState]=useState({
right:false
})
const togleslider=(slider,open)=>()=>{

setState({...state,[slider]:open })
}
const sliderlist= slider=>(
<div component="div"className="slider"
onClick={togleslider(slider,false)}>


{/* <Share

/> */}
<div className="footer">
</div>
</div>
) 
// UN TRACK AN UN FOLLOW DRAWER

const [states,setStates]=useState({
right:false
})
const toglesliders=(slider,open)=>()=>{

setStates({...state,[slider]:open })
}
const sliderlists= slider=>(
<div component="div"className="slider"
onClick={toglesliders(slider,false)}>
<div className="icons__body">
<div className="icons__child">
<VisibilityOutlined/>
<p>view creator</p>
</div>
<div className="icons__child">
<VisibilityOffOutlined/>
<p>Don't want to see this post</p>
</div>
<div className="icons__child">
<PersonAddDisabledOutlined/>
<p>Un Track @pehjos</p>

</div>
<div className="icons__child">
<VolumeMuteOutlined/>
<p>Mute</p>
</div>
<div className="icons__child">
<BlockOutlined/>
<p>Block</p>
</div>
<div className="icons__child">
<ErrorOutlineOutlined/>
<p>Report</p>
</div>
</div>

<div className="footer">
</div>
</div>
) 

// save for later localStorage
const addNote = (e) => {
e.preventDefault();
const newNote = {

id: _id,

};
localStorage.setItem("notes",JSON.stringify(newNote));
};

//Block localStorage
const Block = (e) => {
e.preventDefault();
const newNote = {
id:_id,

};
localStorage.setItem("block",JSON.stringify(newNote));
};

//more stories localStorage
const Like= (e) => {
e.preventDefault();
const newNote = {
id:_id,

};
localStorage.setItem("like",JSON.stringify(newNote));
};





return (
<div className ="overRallCard" id="overall">



<div className="cardmain" id="cards" oncontextmenu="return false" onselectstart="return false"oncut="return false"onpaste="return false" oncopy="return false">

<div className="card__header">
<div className="card__headerleft">
<NewReleasesRounded/>


<h3   >{newsrc}</h3>
</div>
<Rightmobileslider className="drawer" open={states.right} anchor="bottom"
onClose={toglesliders("right",false)}>
{sliderlists("right ")}

</Rightmobileslider >
<div   className="card__headerright">

{stated2?(<CloseTwoToneIcon onClick={ShowWatch2}/>):(<MoreHoriz onClick={ShowWatch2}/>)}
{stated2?(<div className="card_hori">
<div onClick={addNote} className="horis_section">
<BookmarkTwoToneIcon style={{color:"orange"}}/>
<p>Save for later</p>
</div>
<div onClick={handleSharing} className="horis_sections">
<ShareTwoToneIcon/>
<p>Share</p>
</div>
<div onClick={openPost} className="horis_sections">
<LibraryBooksTwoToneIcon style={{color:"#2196f3"}}/>
<p>Full coverage</p>
</div>
<div onClick={openProfile} className="horis_sections">
<LinkTwoToneIcon/>
<p>The publisher</p>
</div>
<div onClick={Block} className="horis_sections">
<BlockTwoToneIcon/>
<p>Hide from source</p>
</div>
<div onClick={Like} className="horis_sections">
<ThumbUpAltTwoToneIcon style={{color:"#2196f3"}}/>
<p>More stories like this</p>
</div>

{/* {user.result.user?.uid==post.user?(<div   onClick={(e) => {
              e.stopPropagation();
              setCurrentId(post._id);
            }} className="horis_sections">
<EditAttributesOutlined style={{color:"orange"}}/>
<p>Edit</p>
</div>):""} */}
{user.result.user?.uid==post.user?(<div  onClick={() => dispatch(deletePost(post._id))} className="horis_sections">
<DeleteTwoTone style={{color:"red"}}/>
<p>Delete</p>
</div>):""}
</div>
):""}
</div>
</div>



<div  className="card__image">
{!post.image==""?(<ReactImageFallback onClick={scrolltop}
src={newimage}
fallbackImage={optionalimage}
initialImage="{<ImageLoader/>}"
alt="Loading... "
onClick={openPost}
/>):(
<video src={video} onClick={Playvideo} ref={Videoref}  />
)

}
{post.image!==""?"":
isVideoplaying?"":(
      (<PlayArrowRounded  onClick={Playvideo}/>)
      )}
      
</div>
<div className="card__content">
<div className="card__contenttitle">
<h5><Hashtags>{title}</Hashtags></h5>

</div>
<div className="card__contentdescription">
{statebody?(<h6><Linkify>{articlebody}</Linkify></h6>):(<p ><Linkify>{description}</Linkify></p>)  }
{statebody?(<Close onClick={ShowWatchbody}/>):(<h5 onClick={ShowWatchbody}>{seeMore}</h5>)}
</div>
</div>
<div className="card__footer">
{/* onClick={handleLike} */}
<IconButton  >
<div onClick={changrcolor} className="card__footericonscontent">

{stated1?(<div className="card__emojis" onClick={ShowWatch1} >
<p onClick={() => dispatch(likePost( post._id ,"💖"),setCount(count + 1))} >💖</p>
<p onClick={() => dispatch(likePost( post._id ,"💖",setTemp('💖'),setCount(count + 1)))}>💖</p>
<p onClick={() => dispatch(likePost( post._id ,"💘",setTemp('💘'),setCount(count + 1)))}  >💘</p>
<p onClick={() => dispatch(likePost( post._id ,"👍",setTemp('👍'),setCount(count + 1)))}  >👍</p>
<p onClick={() => dispatch(likePost( post._id ,"😜",setTemp('😜'),setCount(count + 1)))}  >😜</p>
<p onClick={() => dispatch(likePost( post._id ,"😁",setTemp('😁'),setCount(count + 1)))}  >😁</p>
<p onClick={() => dispatch(likePost( post._id ,"👌",setTemp('👌'),setCount(count + 1)))}  >👌</p>
<p onClick={() => dispatch(likePost( post._id ,"😭",setTemp('😭'),setCount(count + 1)))}  >😭</p>
<p onClick={() => dispatch(likePost( post._id ,"🔥",setTemp('🔥'),setCount(count + 1)))}  >🔥</p>
<p onClick={() => dispatch(likePost( post._id ,"🚀",setTemp('🚀'),setCount(count + 1)))}  >🚀</p>
<p onClick={() => dispatch(likePost( post._id ,"🤐",setTemp('🤐'),setCount(count + 1)))}  >🤐</p>
<p onClick={() => dispatch(likePost( post._id ,"🤦‍♀️",setTemp('🤦‍♀️'),setCount(count + 1)))}  >🤦‍♀️</p>
<p onClick={() => dispatch(likePost( post._id ,"🤩",setTemp('🤩'),setCount(count + 1)))}  >🤩</p>
<p onClick={() => dispatch(likePost( post._id ,"👏",setTemp('👏'),setCount(count + 1)))}  >👏</p>
<p onClick={() => dispatch(likePost( post._id ,"😅",setTemp('😅'),setCount(count + 1)))}  >😅</p>
<p onClick={() => dispatch(likePost( post._id ,"🤣",setTemp('🤣'),setCount(count + 1)))}  >🤣</p>
</div>):(!user?.result.user?(<AddReactionOutlinedIcon id="chatbuble" onClick={Auth}/>):
(<AddReactionOutlinedIcon id="chatbuble" onClick={ShowWatch1}/>))}
<p>{(post.likes.length)+(count)} </p>
</div>
</IconButton>
<IconButton >


{!user?.result.user?(<div className="card__footericonscontent">
{stated?(<Commentsection post={post} onClick={Auth} />):(<ChatBubbleOutline id="chatbuble"onClick={Auth} />)}
<p>{comment}</p>
</div>):(<div className="card__footericonscontent">
{stated?(<Commentsection post={post} onClick={ShowWatch} />):(<ChatBubbleOutline id="chatbuble" onClick={ShowWatch}/>)}
<p>{comment}</p>
</div>)}
</IconButton>
<IconButton   onClick={handleSharing}>
<div className="card__footericonscontent">
<ShareOutlined  />

<p>{share}</p>
</div>
</IconButton>

{

}


<Rightmobileslider className="drawer" open={state.right} anchor="bottom"
onClose={togleslider("right",false)}>
{sliderlist("right ")}

</Rightmobileslider >
</div>

<div className="footline">
<div className="imgfoot">
      {/* <h4>{tag}</h4> */}
      <Avatar src={photo} style={{width:30,height:30,}}/>

      {likes?.map((c, i) => (
        i<3&&(
    <div key={i} className="icolike">
    <p>{c}</p> 
    </div>
    
      ) ))}

<h3>{temp}</h3>        

      {/* {post.status =='prime'?(<div className="card__headerleftfoot">

<p>prime</p>
<CheckCircle/>
</div>):""} */}


      </div>

<div className="card__footericonscontent3">
<div className="foot">
<AccessTime />
</div>
<div className="foot">
<Moment   fromNow>{time}</Moment>
</div>


</div>
</div>



</div>
{stated?(<Close onClick={ShowWatch} className="close"/>):""}

</div>
)
}

export default CardPost
