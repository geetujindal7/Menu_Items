import React from 'react'

function Menu({menu}) {
  return (
  <>
  {
      menu.map((e)=>
      {
          return(
            <div key={e.id} style={{display:"inline"}}>
  <div className="card"> 
  <div>
  <div style={{display:"flex"}}>
  <div>
  <img className="image" src={e.img} alt=""/>
  </div>
 
      <div style={{display:"flex", marginLeft:"150px"}}>
      <p style={{marginLeft:"4rem"}}>{e.title}</p>
      <h5 style={{marginLeft:"7rem"}}>${e.price}</h5>
      
  </div>
      <div>
     
      </div>
      </div>
  
  </div>
 
  </div>
   </div>
          )
      })
 

  
  }

  </>
  )
}

export default Menu
