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
return <div className="carosel">

{/* showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb} */}
<Carousel showArrows={false} interval="10000" autoPlay={true} infiniteLoop={true} showThumbs={false} showIndicators={false} showArrows={true}>
{recommendedPosts.map((post,index)=>( 
       index<6&&(
      
<div onClick={() => history.push(`post/${post._id}`)} >
<img className="img"  src={post.image}/>
<p className="legend">{post.title}</p>
</div>
)))}
</Carousel>


</div>;
}

export default Carosel;
