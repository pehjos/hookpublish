import React,{useState,useEffect} from 'react'
import {ArrowBack, CameraAltOutlined, CameraAltRounded, EditOutlined } from '@material-ui/icons'
import { useDispatch, useSelector } from 'react-redux';
import {Avatar } from '@material-ui/core'
import { useParams, useHistory } from 'react-router-dom';
import {getPostsBySearch,getPost} from './actions/Post'
import { withRouter } from 'react-router-dom'
import {userStatus,userImg} from './actions/auth'
import './profile.css'
import CardPost from  './CardPost'
export default withRouter(({ history,setCurrentId }) => {
// const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
const user=JSON.parse(localStorage.getItem("profile"))
const { post, posts, isLoading } = useSelector((state) => state.posts);
const dispatch = useDispatch();
const { id } = useParams();

useEffect(() => {
dispatch(getPost(id));
}, [id,posts]);


if (!post) return null;
const recommendedPosts = posts.filter(({user}) => user==post.user);
console.log(recommendedPosts)
// UPLOAD PREVIEW

//  useEffect(() => {
// if (post) {
// dispatch(getPostsBySearch({ search: 'none', }));
// }
// }, [post]);
 







return (
<div className="Profile__container">
<div className="Profile">
<input  accept="image/*" type="file" id="btnImg" 

/> 


<div className="media___sectionImageOption"></div>
<div className="profile__ico">

<ArrowBack onClick={() => history.goBack()}/>
</div>

<div className="user__name">
<h3>{post.name}</h3>
</div>
</div>
<div className="profile_img">
<div className="profile_cover">

<img src={post.photo}/>

</div>
<div className="profile_profile">

<Avatar src={post.photo}/>
<h5>{post.name}</h5>

</div>
<div className="profile_Links">


</div>
<div className="profile_Links">

</div>
</div>
<div className="post">
 
<div>
{recommendedPosts.map((post1)=>( 

<CardPost post={post} setCurrentId={setCurrentId} key={post._id}
photo={post1.photo}
newsrc={post1.name}
newtype={post1.accountType}
newstypeimg ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYd2zxgqMSBA62puWUurhS_MLaOmpoOEoQZA&usqp=CAU"
Url="url"
newimage={post1.image}
video={post1.video}
title={post1.title}
description={post1.description}
seeMore="see more..."
articlebody={post1.description}
ProviderUrl="url"
time={post1.createdAt}
share=""
love={post1.likeCount}
comment={post1.comments.length}
/>
))}
</div>




</div>
</div>

)
});