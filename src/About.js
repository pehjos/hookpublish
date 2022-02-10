import { ArrowBack } from '@material-ui/icons';
import React from 'react';
import {Link} from 'react-router-dom'
function about() {
  return <div className="privacy">
<Link to="/">
<ArrowBack/>

</Link>
<h3>COMPANY PROFILE</h3>
<p>Pehjos Inc is  licensed company based 
in China and ghana ，new emerging businesses unit of 
online news articles that specializes in distance reading with
 acess across ghana。 The design of Pehjos Inc,is to help 
 blogers anr reader to have full privilages to our platform.
 Our online news portal （hookwal） was developed
  through ground-breaking information acess solutions.</p>
<h3>MISSION</h3>
<p>Pehjos Inc, corporate mission is to make efficient use of online 
 opportunities, thus developing a profitable and stable
 solutions for the greater good of our users, shareholders,
   employees, partners and society.</p> 
<h3>PRINCIPLES</h3>
<p>Pehjos Inc strives to 
create environment that makes reading and writing as
 convenient, easy and efficient as possible. 
 While pursuing these goals, we are guided by 
 several principles: follow the latest trends in 
 creating and developing the information range, anticipate
 users' needs, comply with all applicable laws, 
  ensure information transparency and availability for
   dialog.</p>


  </div>;
}

export default about;
