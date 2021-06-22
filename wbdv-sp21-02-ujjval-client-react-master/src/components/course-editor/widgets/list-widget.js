import React, {useState, useEffect} from 'react'
import '../../../styles/App.css';
const ListWidget = ({widget,deleteWidget,updateWidget}) => {

    const [editing, setEditing] = useState(false)
    const [itemCache, setItemCache] = useState(widget)
    const [widgetType, setWidgetType] = useState("LIST")
    const deleteCurrWidget=()=>{
        deleteWidget(widget)
        setEditing(false)
    }

    const updateCurrWidget=()=>{
        setEditing(false)
        if(itemCache.type!==widget.type){
            itemCache.size=1
        }
       // const textFromItemCache = itemCache.text.replaceAll("\n","<br />");
       // setItemCache({...itemCache, type: textFromItemCache})
        updateWidget(itemCache)
        
    }


    useEffect(()=>{
        setItemCache(widget)
            },[widget.id])

    return (
        <div>
           {/*<h1>Testing list widget</h1>*/} 
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
                    {
                        itemCache.widgetOrder===1&&
                        <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="ordered-check" checked onClick={(e) => setItemCache({...itemCache, widgetOrder: e.target.checked===true?1:-1})}/>
                    <label class="form-check-label" for="ordered-check">Ordered</label>
                     </div>
                    }
                    
                    {
                        itemCache.widgetOrder!==1&&
                        <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="ordered-check" onClick={(e) => setItemCache({...itemCache, widgetOrder: e.target.checked===true?1:-1})}/>
                    <label class="form-check-label" for="ordered-check">Ordered</label>
                     </div>
                    }


                        <select  value={itemCache.type} className="form-control" onChange={(e) => setItemCache({...itemCache, type: e.target.value})}> 
                        <option value="HEADING">Heading</option>
                    <option value="PARAGRAPH">Paragraph</option>
                    <option value="LIST">List</option>
                    <option value="IMAGE">Image</option>
                </select>
                    <textarea
                    value={itemCache.text}
                    onChange={(e) => setItemCache({...itemCache, text: e.target.value})}
                    className="form-control"></textarea>
                    </>
            }
            {
                !editing && itemCache.widgetOrder===1&&
                <ol>
                        {itemCache.text.split("\n").map(text=>{
                           return(<>
                            <li>{text}</li>
                           </>) 
                           
                        })}
                        </ol>    
            }
            {
                !editing && itemCache.widgetOrder!==1&&
                <ul>
                        {itemCache.text.split("\n").map(text=>{
                           return(<>
                            <li>{text}</li>
                           </>) 
                           
                        })}
                        </ul>    
            }
        </div>
    )
}

export default ListWidget