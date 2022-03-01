import { ArrowBackOutlined, Close } from '@material-ui/icons';
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import { Avatar } from '@mui/material';
import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import {  useQuery } from 'react-query'
import { useDispatch, useSelector } from 'react-redux';
import './discover.css'
function Discover() {
    const { DtaLoading, error, data } = useQuery('putin', () =>
    fetch("https://russian-ukraine-news-feed.p.rapidapi.com/news", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "russian-ukraine-news-feed.p.rapidapi.com",
            "x-rapidapi-key": "b1afbcb2ffmshd56b639cfd7d9e4p1e023ajsn222a16b68599"
        }
    }).then(res =>
      res.json()
    
    )
    )

console.log(data)



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

{ data && data.map((post,index)=> (
    
    index<90&&(
<div className="discover_main">   
<div className="discover_image">
<img src={post.images[0]||"https://static.dw.com/image/19265466_302.png"} alt={post.title}/>

<div className="discover_avatar">
<Avatar src={post.images[0]||"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeDLUgPm6eqlc3xZzykaaMRKvUUlMVaaiUlA&usqp=CAU"}/>
</div>
</div>

<div className="discover__body">
<p>{post.body}</p>

</div>
</div>)))}
</div>
}

export default Discover;
