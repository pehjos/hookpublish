import React from 'react'
import './navmenu.css'
import { useHistory } from 'react-router-dom'
import Toggle from './Toglemode'
import{ Business,
    NightsStayIcon,
   HomeOutlined,
   PolicyOutlined,
ContactSupport,

} from '@material-ui/icons'
function Navmenu() {
const history = useHistory()
const home=()=>{

history.push("/")

}
const privacy=()=>{

    history.push("/privacy")
    
    }
    const help=()=>{

        history.push("/help")
        
        }
        const setting=()=>{

            history.push("/setting")
            
            }
    const about=()=>{

        history.push("/about")
        
        }
    return (
        <div className="navmenu">
<div className="navmenucontent">
<div className="navmenuicons">
<HomeOutlined/>
<img src="https://img.icons8.com/color/48/000000/gears.png"/>

<Business/>

<PolicyOutlined/>
<ContactSupport/>
<Toggle className="togle"/>
</div>
<div className="navmenutext">
<p onClick={home}>Home</p>
<p onClick={setting}>Settings</p>
<p onClick={about}>Pehjos Inc</p>
<p onClick={privacy}>Privacy Policy</p>
<p onClick={help}>Help</p>

</div>
</div>
</div>
    )
}

export default Navmenu
