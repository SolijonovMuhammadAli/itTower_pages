import React,{useState} from 'react'
import './css/dashboard.css'
import Categories from './Categories'
import Menu from './Menu'
import {data} from './../server'

const allCategories = ['hammasi', ...new Set(data.map(item=>item.category))]
console.log(allCategories)

function Dashboard() {
    const [menuItem,setMenuItem] = useState(data)
    const [categories,setCategory] = useState(allCategories)
    
    const filterItems = (category)=>{
        if(category === 'hammasi'){
            setMenuItem(data)
            return
        }
        const newItems = data.filter((item)=>item.category === category)
         setMenuItem(newItems)
    }
    return (
        <div className="dashboard">
            <div className="shape_1 shape"></div>
            <div className="shape_2 shape"></div>
            <div className="shape_3 shape"></div>
            <div className="shape_4 shape"></div>
            <div className="shape_5 shape"></div> 
            <section className="menu">
                <div className="title">
                    <h2>Our Menu</h2>
                    <hr className="underline" />
                </div>
                <Categories filterItems={filterItems} categories={categories}/>
                <Menu items={menuItem} categories={[...new Set(data.map(item=>item.category))]} />
            </section>
        </div>
    )
}

export default Dashboard
