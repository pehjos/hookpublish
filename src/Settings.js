import React from 'react';
import {useHistory} from 'react-router-dom'
function Settings() {
    const history = useHistory()
    const home=()=>{
history.push("/")

    }
  return <div className="settings">

<p>Setting not available</p>
<h5 onClick={home} >Back to homepage</h5>

  </div>;
}

export default Settings;
