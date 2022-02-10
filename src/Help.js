import React from 'react';
import {Link} from 'react-router-dom'
import {ArrowBack} from '@material-ui/icons'
function Help() {
  return <div className="help">
      <Link to="/">
<ArrowBack/>

</Link>
<p>Contact our support line:+233596188679 
Support email:pehjos4@gmail.com  <br/>
</p>

  </div>
  }

export default Help;
