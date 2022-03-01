import React,{useState,useEffect} from 'react'

import {  useQuery } from 'react-query'


import Card from  './Card3'
import SportsApi from './sportsApi'
import CardPost from  './CardPost'
import Paginate from './Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import {getPostsBySearch,getPost} from './actions/Post'
function useQuery1() {
  return new URLSearchParams(useLocation().search);
}
function Science(setCurrentId) {
// FETCH POST
const { DtaLoading, error, data } = useQuery('sportspp', () =>
fetch("https://premier-league-news.p.rapidapi.com/news", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "premier-league-news.p.rapidapi.com",
		"x-rapidapi-key": "b1afbcb2ffmshd56b639cfd7d9e4p1e023ajsn222a16b68599"
	}
}).then(res =>
  res.json()

)
)

console.log(data)

 
return (
<div className="new">

<div className="Page__di">

{/* <SportsApi/> */}
</div>
{ data && data.map(post1 => (
<Card

photo="{post.photo}"
newsrc="hook.studio"
newtype="MH"
newstypeimg ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYd2zxgqMSBA62puWUurhS_MLaOmpoOEoQZA&usqp=CAU"
Url="url"
newimage={post1.img}
// video={post1.video}
title={post1.title}
tag="local"
description={post1.description}
seeMore="see more..."
articlebody={post1.title}
rank="view"
src="#news"
ProviderUrl={post1.url}
time={post1.publishedAt}
_id={post1._id}
share=""
Clicks="@news"




/>
))} 
</div>

)
}

export default Science
