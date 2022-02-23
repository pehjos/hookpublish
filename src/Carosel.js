import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Carosel.css'
import Rightmobileslider from'@material-ui/core/Drawer'
import {useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
function Carosel({post}) {
    const history = useHistory()
    const openPost=()=>
{
history.push(`/post/${post._id}`)
}
    const {posts,isLoading}=useSelector((state)=>state.posts)
const recommendedPosts = posts?.filter(({ tags }) => tags== 'discovery');

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
