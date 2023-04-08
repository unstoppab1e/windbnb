import React from 'react'
import './card.css'

export const Card = () => {
  return (
    <div className='card'>
       <img src='https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80' alt=''/>
       <div className='info'>
            <div className='space'>
                <button className='superhost'>Super Host</button>
                <div className='type'>Entire apartment</div>
            </div>            
            <div className='rating'>
                <span class="material-symbols-rounded">star</span>
                4.40
            </div>
            
       </div>
       <h1 className='title'>Stylist apartment in center of the city</h1>
    </div>
  )
}
