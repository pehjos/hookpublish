import React from 'react'
import './topic.css'
import Headlines from './HeadlinesTop'
import Moment from 'react-moment'
import { useDispatch, useSelector } from 'react-redux';
import {  useQuery } from 'react-query'
import {
AppsOutlined
,CollectionsBookmarkOutlined
} from '@material-ui/icons'
function Topics() {
    // FETCH POST
    const {posts,isLoading}=useSelector((state)=>state.posts)
    const recommendedPosts = posts?.filter(({ tags }) => tags== 'top');
return (
<div className="topics">
<div className="topics_container">
   
<div className="topics_container__ch">

{recommendedPosts.map((post,index)=>( 
       index<3&&(
        post.tags!=="top"?"":(
<Headlines
urlToImage={post.image}
title={post.title}
description={post.description}
author={post.name}
id={post._id}
publishedAt={post.createdAt}
url={post._id}
src={post.name}
post={post}
/>

))))} 


</div>
</div>     
</div>
)
}

export default Topics

