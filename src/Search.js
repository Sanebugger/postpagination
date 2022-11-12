import React from 'react'
import { useGlobalContext } from './context'

export default function Search() {
  const {query,searchPost} = useGlobalContext();

  return (
    <>
      <div className='stories'>
        <div className='navbar'>
          <div className='heading'>Tech News</div>
          <form>
            <div>
              <input type="text" placeholder='enter to be searched' 
                  value={query}
                  onChange={(e)=>searchPost(e .target.value)}
              />

            </div>
          </form>
        </div>
      </div>
    </>
  )
}
