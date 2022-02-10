import React,{useEffect,useState,useRef} from 'react'
import { useStateValue } from "./StateProvider";
import './news.css'
import Moment from 'react-moment'



import { useParams,Link, useHistory } from 'react-router-dom';
function StoryBtn ({url,src,id,title,description,author,publishedAt,urlToImage}) {




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
    
    const removeFromBasket = () => {
      // remove the item from the basket
      dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
      })
      }

    return (
        <div className="cardstory">
          
             <div className="cardstorys">
           
         
            <div  onClick={addToBasket} className="cardstory">
              <div onClick={removeFromBasket} className="cardstory1">
          <img onClick={openPost} src={urlToImage}   />
          <h6>{title}</h6>
          <p style={{display:'none'}}>{author}</p>
          <p style={{display:'none'}}>{description}</p>
          <h6 style={{display:'none'}}><Moment fromNow>{publishedAt}</Moment></h6>
          <Link/>
        
        
        </div>
        </div>
         
        </div>
        </div>
    )
}

export default StoryBtn;

