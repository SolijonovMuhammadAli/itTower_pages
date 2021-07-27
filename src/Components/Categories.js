import React from 'react'
import {Button} from 'react-bootstrap'
import './css/categories.css'

function Categories({filterItems,categories}) {
    return (
        <div className="category">   
            {categories.map((categories,index)=>(
                <Button  variant="info" key={index} onClick={()=>filterItems(categories)}>{categories}</Button>
            ))}
            
       </div>
    )
}

export default Categories
