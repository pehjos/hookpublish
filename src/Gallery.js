import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Carosel.css'
import {useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
function Carosel() {
    const {posts,isLoading}=useSelector((state)=>state.posts)
const recommendedPosts = posts?.filter(({ tags }) => tags== 'gallery');
const history = useHistory()
return <div >

{/* showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb} */}

{recommendedPosts.map((post,index)=>( 
       index<1&&(
      
<div className="carosel" onClick={() => history.push(`post/${post._id}`)}>
<img    src={post.image}/>
<p>{post.title}</p>
</div>
)))}



</div>;
}

export default Carosel;
