import React, {useState, useEffect} from 'react'
import '../../../styles/App.css';
const HeadingWidget = ({widget,deleteWidget,updateWidget}) =>{

    const [editing, setEditing] = useState(false)
    const [widgetType, setWidgetType] = useState("HEADING")
    const [itemCache, setItemCache] = useState(widget)

    const deleteCurrWidget=()=>{
        deleteWidget(widget)
        setEditing(false)
    }

    const updateCurrWidget=()=>{
        setEditing(false)
       // alert('size:'+itemCache.size+'editing:'+editing)
        updateWidget(itemCache)
    }

    useEffect(()=>{
        setItemCache(widget)
            },[widget.id])

return (
    <div>
      {/*<h2>Heading Widget {widget.id}</h2> */}  
      {  !editing &&
      <i className="fa fa-cog fa-2x webdev-position-right webdev-theme-blue" onClick={()=> setEditing(true)}></i>
    }{
        editing &&<>
        <i className="fa fa-check fa-2x webdev-position-right webdev-theme-blue" onClick={()=> updateCurrWidget()}></i>
        <i className="fa fa-times fa-2x webdev-position-right webdev-theme-red" onClick={()=> deleteCurrWidget()}></i>
        </>
       
    }
      < br/>
        {
            editing &&
            <>
             <select  value={itemCache.type} className="form-control" onChange={(e) => setItemCache({...itemCache, type: e.target.value})}> 
                    <option value="HEADING">Heading</option>
                    <option value="PARAGRAPH">Paragraph</option>
                    <option value="LIST">List</option>
                    <option value="IMAGE">Image</option>
                </select>
                <input  value={itemCache.text} className="form-control" onChange={(e) => setItemCache({...itemCache, text: e.target.value})} />
                <select  value={itemCache.size} className="form-control" onChange={(e) => setItemCache({...itemCache, size: e.target.value})} > 
                    <option value={1}>Heading 1</option>
                    <option value={2}>Heading 2</option>
                    <option value={3}>Heading 3</option>
                    <option value={4}>Heading 4</option>
                    <option value={5}>Heading 5</option>
                    <option value={6}>Heading 6</option>
                </select>
            </>
            
        }

             { parseInt(itemCache.size) ===1 && <h1>{itemCache.text}</h1>}
             { parseInt(itemCache.size) ===2 && <h2>{itemCache.text}</h2>}
             { parseInt(itemCache.size) ===3 && <h3>{itemCache.text}</h3>}
             { parseInt(itemCache.size) ===4 && <h4>{itemCache.text}</h4>}
             {parseInt(itemCache.size) ===5 && <h5>{itemCache.text}</h5>}
             { parseInt(itemCache.size) ===6 && <h6>{itemCache.text}</h6>}
    
             
             
        
    </div>
)
    }


export default HeadingWidget