import React, { useState } from 'react'
import Linkify from 'react-linkify';
import Rightmobileslider from'@material-ui/core/Drawer'
import {useQuery} from 'react-query';
import './card.css'
import {makeStyles} from '@material-ui/core/styles'
import optionalimage from './logo.jpg'
import Moment from 'react-moment';
import { useStateValue } from "./StateProvider";
import './topic.css'
import { useParams,Link, useHistory } from 'react-router-dom';
import BookmarkTwoToneIcon from '@mui/icons-material/BookmarkTwoTone';
import ShareTwoToneIcon from '@mui/icons-material/ShareTwoTone';
import LibraryBooksTwoToneIcon from '@mui/icons-material/LibraryBooksTwoTone';
import LinkTwoToneIcon from '@mui/icons-material/LinkTwoTone';
import BlockTwoToneIcon from '@mui/icons-material/BlockTwoTone';
import ThumbUpAltTwoToneIcon from '@mui/icons-material/ThumbUpAltTwoTone';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
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
Favorite,
Close,MoreHoriz,
VisibilityOffOutlined,
PersonAddDisabledOutlined,
VolumeMuteOutlined,
BlockOutlined,
ErrorOutlineOutlined,
VisibilityOutlined,
CheckCircle
} from '@material-ui/icons'





function Cardnews({newsrc,_id,tag,rank,src,title,newimage,seeMore,description,time,share,articlebody,ProviderUrl})
//
{
//  share

const canonical = document.querySelector("link[rel=canonical]");
const url=ProviderUrl
const shareDetails = { url, tag, title};
// imoji likecom
const [stated2, setStated2] = useState(false)
const ShowWatch2=()=>{
if(stated2){
setStated2(false)

// document.getElementById('overall').style.height="400px";

}
else{
setStated2(true)


}
}



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


const history=useHistory()
const openPost=()=>{
history.push("/reads")
}
const [{basket},dispatch]=useStateValue();

const addToBasket=()=>{
dispatch({
type:'ADD_TO_BASKET',
item:{
newsrc:newsrc,
_id:_id,
tag:tag,
rank:rank,
src:src,
title:title,
newimage:newimage,
seeMore:seeMore,
description:description,
time:time,
share:share,
articlebody:articlebody,
ProviderUrl:ProviderUrl,
}
})

}

const removeFromBasket = () => {
  // remove the item from the basket
  dispatch({
  type: 'REMOVE_FROM_BASKET',
  id: _id,
  })
  }// save for later localStorage
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
// comment component
const [stated, setStated] = useState(false)
const ShowWatch=()=>{
if(stated){
setStated(false)
document.getElementById('cards').style.height="560px";
// document.getElementById('overall').style.height="400px";

}
else{
setStated(true)
document.getElementById('cards').style.height="600px";

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

return (
<div className ="overRallCard" id="overall">


<div className="cardmain" id="cards"oncontextmenu="return false" onselectstart="return false"oncut="return false"onpaste="return false" oncopy="return false">

<div className="card__header">
<div className="card__headerleft">
<NewReleasesRounded/>
<a target="_self" href={ProviderUrl} ><h3 >{newsrc}</h3></a>
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
<div className="horis_sections">
<a href={url}>
<LibraryBooksTwoToneIcon style={{color:"#2196f3"}}/>
<p>Full coverage</p>
</a>
</div>
<div className="horis_sections">
  <a href={url}>
<LinkTwoToneIcon/>
<p>The publisher</p>
</a>
</div>
<div onClick={Block} className="horis_sections">
<BlockTwoToneIcon/>
<p>Hide from source</p>
</div>
<div onClick={Like} className="horis_sections">
<ThumbUpAltTwoToneIcon style={{color:"#2196f3"}}/>
<p>More stories like this</p>
</div>
</div>
):""}

</div>
</div>
{/* <div onClick={addToBasket}   >
<div onClick={removeFromBasket}  >
<div onClick={openPost} > */}
<div className="card__image">
<ReactImageFallback
src={newimage}
fallbackImage={optionalimage}
initialImage="Loading..."
alt="Loading... "

/>
<div className="imgfoot">
         
         
          <div className="visible">
            <VisibilityOutlined/>
            <p>{rank}</p>
          </div>
 <div className="card__headerleftfoot">

<p>prime</p>
<CheckCircle/>
</div>
<div className="card__rank">
<p>{src}</p>
</div>

{/* 
           </div>
           </div>
           </div> */}
           </div>
</div>
<div className="card__content">
<div className="card__contenttitle">
<h5>{title}</h5>

</div>
<div className="card__contentdescription">
{statebody?(<h6><Linkify>{articlebody}</Linkify></h6>):(<p ><Linkify>{description}</Linkify></p>)  }
{statebody?(<Close onClick={ShowWatchbody}/>):(<h5 onClick={ShowWatchbody}>{seeMore}</h5>)}
</div>
</div>
{/* <div className="card__footer">
<IconButton>
<div onClick={changrcolor} className="card__footericonscontent">
{favcolor?(<FavoriteBorder onClick={changrcolor}/>):(<Favorite style={{color:'tomato',fontSize:30}} onClick={changrcolor}/>)}
<p>{love}</p>

</div>
</IconButton>
<IconButton >


<div className="card__footericonscontent">
{stated?(<Commentsection onClick={ShowWatch} />):(<ChatBubbleOutline id="chatbuble" onClick={ShowWatch}/>)}
<p>{comment}</p>
</div>
</IconButton>
<IconButton   onClick={togleslider("right",true)}>
<div className="card__footericonscontent">
<ShareOutlined/>

<p>{share}</p>
</div>
</IconButton>
<Rightmobileslider className="drawer" open={state.right} anchor="bottom"
onClose={togleslider("right",false)}>
{sliderlist("right ")}

</Rightmobileslider >
</div> */}

<div className="footline">

<div className="card__footericonscontent3">
<div className="foot">
<AccessTime/>
</div>
<div className="foot">
<Moment fromNow>{time}</Moment>
<IconButton onClick={handleSharing}>
<div className="card__footericonsconten">
<ShareOutlined/>

<p>{share}</p>
</div>
</IconButton>
<Rightmobileslider className="drawer" open={state.right} anchor="bottom"
onClose={togleslider("right",false)}>
{sliderlist("right ")}

</Rightmobileslider >

</div>

</div>

</div>

</div>
{stated?(<Close onClick={ShowWatch} className="close"/>):""}

</div>
)
}

export default Cardnews
