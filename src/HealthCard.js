import React from 'react';
import Health from './Health'
import {  useQuery } from 'react-query'
function HealthCard() {
    const { DtaLoading, error, data } = useQuery('poData', () =>
    fetch('https://saurav.tech/NewsAPI/top-headlines/category/health/in.json').then(res =>
      res.json()
    
    )
    )
  return <div className="healthCard">
        <div className="cardstory">
          
          <div className="cardstorys">
        
         { data && data.articles.map(post1 => (
<Health
urlToImage={post1.urlToImage}
title={post1.title}
description={post1.description}
author={post1.author}
id={post1._id}
publishedAt={post1.publishedAt}
url={post1.url}
src={post1.source.name}
/>
   ))}
  </div>
  </div>
  </div>;
}

export default HealthCard;
