import React, {useState, useEffect} from 'react'
import '../../../styles/App.css';
const ParagraphWidget = ({widget,deleteWidget,updateWidget}) => {

    const [editing, setEditing] = useState(false)
    const [itemCache, setItemCache] = useState(widget)
    const [widgetType, setWidgetType] = useState("PARAGRAPH")
    const deleteCurrWidget=()=>{
        deleteWidget(widget)
        setEditing(false)
    }

    const updateCurrWidget=()=>{
        setEditing(false)
        if(itemCache.type!==widget.type){
            itemCache.size=1
        }
        updateWidget(itemCache)
        
    }


    useEffect(()=>{
        setItemCache(widget)
            },[widget.id])

    return (
        <div>
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
              /*  <textarea
                    onChange={(e) => setWidget({...widget, text: e.target.value})}
                    value={widget.text}
                    className="form-control"></textarea>*/
                    <>
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
                !editing &&
                    <p>
                        {widget.text}
                    </p>
            }
        </div>
    )
}

export default ParagraphWidget