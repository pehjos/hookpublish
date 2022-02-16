import { ArrowBackOutlined, Close } from '@material-ui/icons';
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import { Avatar } from '@mui/material';
import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import './discover.css'
function Discover() {
  
    const {posts,isLoading}=useSelector((state)=>state.posts)
    const [stated1, setStated1] = useState(false)
    const ShowWatch1=()=>{
    if(stated1){
    setStated1(false)
    
    // document.getElementById('overall').style.height="400px";
    
    }
    else{
    setStated1(true)
    
    
    }
    }
    const recommendedPosts = posts?.filter(({ tags }) => tags== 'discovery');
return <div className="discover">
    <div className="discover_controls">
    <Link to="/">
        
<ArrowBackOutlined/>
</Link>

{!stated1?(<MoreHoriz onClick={ShowWatch1}/>):(<Close onClick={ShowWatch1}/>)}

</div>
    {recommendedPosts.map((post,index)=>(  
    
    index<70&&(
<div className="discover_main">   
<div className="discover_image">
<img src={post.image} alt={post.title}/>

<div className="discover_avatar">
<Avatar src={post.photo}/>
</div>
</div>

<div className="discover__body">
<p>{post.description}</p>

</div>
</div>)))}
</div>
}

export default Discover;
