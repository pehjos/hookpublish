import React from 'react'
import './Video.css'
import Headlines from './Headlines'
import {  useQuery } from 'react-query'
import {
AppsOutlined, CollectionsBookmarkOutlined ,
Healing,

} from '@material-ui/icons'
function ApiVideos() {
    // FETCH POST
const { DtaLoading, error, data } = useQuery('daily', () =>
fetch('https://api.dailymotion.com/user/x2envzz/videos?fields=embed_url%2Cchannel%2Curl%2Ctitle%2Cfilmstrip_60_url%2Clive_publish_url').then(res =>
  res.json()

)
)
console.log(data)
return (
<div className="nop">
    <h2>ghana man</h2>
{
data&&data.list.map(video=>(
    <div className="video_daily">
<p>{video.title}</p>
{console.log(video.title)}
<iframe width="300px" height="300px" src={video.embed_url} />
<p>hello mr man</p>

</div>
))
}

<h2>why are u not</h2>
</div>
)
}

export default ApiVideos

