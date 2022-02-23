
import React,{useState} from 'react'
import './stars.css'
import RadioOutlinedIcon from '@mui/icons-material/RadioOutlined';


import{BrowserRouter as Router,Route ,Switch} from 'react-router-dom'
import Science from '@mui/icons-material/Science';
import {
HomeOutlined,
VideoLibraryOutlined,
ImageOutlined,
ShoppingCartOutlined,
} from '@material-ui/icons'

import {Link,NavLink} from 'react-router-dom'


function Stars() {
   const [state, setstate] = useState({
       index: 0,
     })
     
      const handleChange = (event, value) => {
         setstate({
           index: value,
         });;
       };
     
      const handleChangeIndex = index => {
         setstate({
           index,
         });
       };
     
       const { index } = state;
       const styles = {
         tabs: {
           // background: '#fff',
         },
         slide: {
        
          // maxHeight: 1000,
           color: '#fff',
          
         },
         slide1: {
          // minHeight: 150,
           with:'200'
           // backgroundColor: '#FEA900',
         },
         slide2: {
          // minHeight: 150,
           with:'200',
           // backgroundColor: '#B3DC4A',
         },
         slide3: {
          // minHeight: 150,
           with:'200',
           // backgroundColor: '#6AC0FF',
         },
         slide4: {
          // minHeight: 150,
           // backgroundColor: '#6AC0FF',
         },
         slide5: {
          // minHeight: 150,
           // backgroundColor: '#6AC0FF',
         },
         slide6: {
          // minHeight: 150,
           // backgroundColor: '#6AC0FF',
         },
       };
     
   return (
       <div className="stars">
          <div className="star__pages">
            <div className="star__textf">
          <NavLink activeClassName="link"className="li" to="/news"><HomeOutlined/>
          <p>Home</p>
          </NavLink>
         
          </div>
          <div className="star__textf">
    <NavLink activeClassName="link" to="/video"className="li"><VideoLibraryOutlined/>
    <p>Videos</p>
     </NavLink>
  
    </div>
    <div className="star__textf">
    <NavLink activeClassName="link" to="/image"className="li"> 
    <ImageOutlined/>
    <p>Images</p>
    </NavLink>
  
    </div>
    <div className="star__textf">

    <NavLink activeClassName="link" to="/radio"className="li"><RadioOutlinedIcon/>
    <p>Radio</p>
    </NavLink>

    </div>
    <div className="star__textf">
   
    <NavLink activeClassName="link" to="/shop"className="li">< ShoppingCartOutlined/>
    <p>Shop</p>
    </NavLink>
 
    </div>
  
     </div>
  
       </div>
   )
}

export default Stars
