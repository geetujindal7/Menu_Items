import React,{useState,useEffect} from 'react'

function Categories(props) {

    
  

    return (
        <div className="categories">
        <div>
        {
            props.Category.map((e) => 
            {
                return(
                    <button className="btn" onClick={() => props.filtere(e)}>{e}</button>
                )
            })
        }
       
        </div>
                

        

        </div>
    )
}

export default Categories
