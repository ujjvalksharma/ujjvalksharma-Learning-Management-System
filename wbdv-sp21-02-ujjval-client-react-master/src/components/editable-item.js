import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import '../styles/course-editor.style.client.css';
const EditableItem = (
    {
        to,
        item,
        updateItem,
        deleteItem,
        active
    }) => { 
        
    const [editing, setEditing] = useState(false)
    const [itemCache, setItemCache] = useState(item)
    useEffect(()=>{
setItemCache(item)
    },[item._id])

 //   alert(active)
    return( 
        <>
            {
                !editing &&
                <>
                    <Link to={to} className={`nav-link ${active ?'active' : ''} `} >
                   {item.title}
                    <i onClick={() => setEditing(true)} className="fa fa-edit"></i>
                    </Link>
                   
                </> 
            }
            {
                editing &&
                <>
                    <input
                        onChange={(e) => setItemCache({...itemCache, title: e.target.value})}
                        value={itemCache.title}/>
                    <i onClick={() => {
                        setEditing(false)
                      //  setItemCache({})
                        updateItem(itemCache)
                    }} 
                    
                    className="fa fa-check"></i>
                    <i onClick={() => deleteItem(item)} className="fa fa-times"></i>
                </>
            }
        </>
    )
}

export default EditableItem