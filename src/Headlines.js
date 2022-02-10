
import React,{useEffect,useState,useRef} from 'react'
import { useStateValue } from "./StateProvider";
import './topic.css'
import { useParams,Link, useHistory } from 'react-router-dom';
import Moment from 'react-moment'
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import BookmarkTwoToneIcon from '@mui/icons-material/BookmarkTwoTone';
import ShareTwoToneIcon from '@mui/icons-material/ShareTwoTone';
import LibraryBooksTwoToneIcon from '@mui/icons-material/LibraryBooksTwoTone';
import LinkTwoToneIcon from '@mui/icons-material/LinkTwoTone';
import BlockTwoToneIcon from '@mui/icons-material/BlockTwoTone';
import ThumbUpAltTwoToneIcon from '@mui/icons-material/ThumbUpAltTwoTone';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import { ForwardOutlined, RedoOutlined, RedoRounded, ShareOutlined } from '@material-ui/icons';

function Headlines({url,src,id,title,description,author,publishedAt,urlToImage}) {

  const history=useHistory()
  const openPost=()=>{
history.push("/read")
}
  const [{basket},dispatch]=useStateValue();
  const [state,setState] =useState(false)
  const addToBasket=()=>{
  dispatch({
  type:'ADD_TO_BASKET',
  item:{
  id:id,
 urlToImage:urlToImage,
  description:description,
  title:title,
  publishedAt:publishedAt,
  author:author,
 url:url,
 src:src
  }
  })
 
  }
  
// save for later localStorage
  const addNote = (e) => {
    e.preventDefault();
    const newNote = {
      id:id,
      urlToImage:urlToImage,
      description:description,
      title:title,
      publishedAt:publishedAt,
      author:author,
      url:url,
      src:src
    };
    localStorage.setItem("notes",JSON.stringify(newNote));
  };
 
 //Block localStorage
 const Block = (e) => {
  e.preventDefault();
  const newNote = {
    id:url,
 
  };
  localStorage.setItem("block",JSON.stringify(newNote));
};

  //more stories localStorage
  const Like= (e) => {
    e.preventDefault();
    const newNote = {
      id:src,
   
    };
    localStorage.setItem("like",JSON.stringify(newNote));
  };

  const removeFromBasket = () => {
    // remove the item from the basket
    dispatch({
    type: 'REMOVE_FROM_BASKET',
    id: id,
    })
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

const shareDetails = { url, author, title};
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


  return <div onClick={addToBasket}   >
<div onClick={removeFromBasket}  className="topics_container__ch_content">
<div onClick={openPost}  className="topics_container__ch_text">
<h4>{title}</h4>
<p>{description}</p>

<div className="topics_container__ch_footer">
<p>{author}</p>
<h6><Moment fromNow>{publishedAt}</Moment></h6>

</div>

</div>

<div className="topics_container__ch_img">
<img  src={urlToImage}/>
<div className="topics_forward">
{stated1?(<CloseTwoToneIcon onClick={ShowWatch1}/>):(<MoreHoriz onClick={ShowWatch1}/>)}
<RedoRounded onClick={handleSharing}/>
</div>
{stated1?(<div onClick={ShowWatch1} className="card_horiz">
<div onClick={addNote}  className="horis_sections">
<BookmarkTwoToneIcon   style={{color:"orange"}}/>
<p>Save for later</p>
 
</div>
<div onClick={handleSharing}  className="horis_sections">
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



  </div>;
}

export default Headlines;

