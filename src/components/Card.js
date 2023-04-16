import React from 'react'
import './card.css'

export const Card = ({...element}) => {
  return (
    <div className='card'>
       <img src={element.photo} alt={element.title}/>
       <div className='info'>
            <div className='space'>
                {(element.superHost) && <button className='superhost'>SUPER HOST</button>}
                
                <div className='type'>{element.type}</div>
            </div>            
            <div className='rating'>
                <span className="material-symbols-rounded">star</span>
                {element.rating}
            </div>
            
       </div>
       <h1 className='title'>{element.title}</h1>
    </div>
  )
}
