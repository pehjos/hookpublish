import React from 'react'
import './news.css'
import Card from './Card'
import optionalimage from './logo.jpg'
import {  useQuery } from 'react-query'
import { Language, Link } from '@material-ui/icons'


function StoryBtn () {
    const country=JSON.parse(localStorage.getItem("country"))
// news x to be intergrated
// Premier League News
// Russian - Ukraine News Feed


// const { DtaLoading, error, data } = useQuery('oData', () =>
//     fetch("https://free-news.p.rapidapi.com/v1/search?q=us&lang=en", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "free-news.p.rapidapi.com",
// 		"x-rapidapi-key": "b1afbcb2ffmshd56b639cfd7d9e4p1e023ajsn222a16b68599"
// 	}
// }).then(res =>
//       res.json()
    
//     )
//     )

    const { DtaLoading, error, data } = useQuery('oData', () =>
    fetch(`https://newsx.p.rapidapi.com/search?q=${country}&limit=20&skip=0`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "newsx.p.rapidapi.com",
            "x-rapidapi-key": "b1afbcb2ffmshd56b639cfd7d9e4p1e023ajsn222a16b68599"
        }
    }).then(res =>
      res.json()
    
    )
    )



    return (
        <div className="cards">
             {/* <p>Top tech News</p> */}
             <div className="cardstor">
           
            { data && data.map(post=> (
           <Card
           articlebody={post.summary}
           src={post.topic}
           photo="{post.photo}"
           newsrc={post.author}
           newtype="MH"
           newstypeimg ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYd2zxgqMSBA62puWUurhS_MLaOmpoOEoQZA&usqp=CAU"
           Url="url"
           newimage={post.image||"https://static.dw.com/image/19265466_302.png"}
           // video={post1.video}
           title={post.title}
          src={post.tags[0]}
           description={post.summary}
           seeMore="see more..."
           articlebody={post.summary}
           ProviderUrl={post.url}
           time={post.dateLong}
           share=""
           rank="view"
           Clicks="clicks"
           tag=""
           _id={post._id}
           />
            ))}
        </div>
        </div>
    )
}

export default StoryBtn;

