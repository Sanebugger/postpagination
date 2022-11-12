import React from 'react'
import { useGlobalContext } from './context'
import './App.css'

export default function Stories() {

  const { hits, nbPages, isLoading } = useGlobalContext();

  if (isLoading) {
    return (
      <>
        <h1>Loading.....</h1>
      </>
    )
  }

  return (
    <>
      <div className='stories'>
      
      {
        hits.map((curPost) => {
          const {title,author,objectID,url} = curPost;
          return (
            <>
              <div className='title'>
                <p className='titlehead'>{title}</p>
                <div>
                   By:-  { author}
                   <a href={url} target="_blank"> Read More</a>
                </div> 
              </div>  
            </>
          )
        })
      }
      </div>
    </>
  )
} 
