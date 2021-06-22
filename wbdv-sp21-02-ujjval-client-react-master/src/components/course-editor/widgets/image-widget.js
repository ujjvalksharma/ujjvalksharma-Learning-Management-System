import React, {useState, useEffect} from 'react'
import '../../../styles/App.css';
const ImageWidget = ({widget,deleteWidget,updateWidget}) => {

    const [editing, setEditing] = useState(false)
    const [itemCache, setItemCache] = useState(widget)
    const [widgetType, setWidgetType] = useState("IMAGE")
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
                    <>
                      <select  value={itemCache.type} className="form-control" onChange={(e) => setItemCache({...itemCache, type: e.target.value})}> 
                        <option value="HEADING">Heading</option>
                    <option value="PARAGRAPH">Paragraph</option>
                    <option value="LIST">List</option>
                    <option value="IMAGE">Image</option>
                </select>
                <br />
                <h6>Image Url</h6>
                        <div class="form-check">
                       <input  value={itemCache.src} className="form-control" id="image-url" onChange={(e) => setItemCache({...itemCache, src: e.target.value})} />
                     </div>
                     <br />
                     <h6>Image Width</h6>
                     <div class="form-check">
                       <input  value={itemCache.width} className="form-control" id="image-width" onChange={(e) => setItemCache({...itemCache, width: e.target.value})} />
                     </div>
                     <br />
                     <h6>Image Height</h6>
                     <div class="form-check">
                       <input  value={itemCache.height} className="form-control" id="image-height" onChange={(e) => setItemCache({...itemCache, height: e.target.value})} />
                     </div>

                    </>
            }
            {
                !editing &&
               <>
               <img src={itemCache.src} width={itemCache.width} height={itemCache.height} alt="no url for image" />  
              {/*<h1>{itemCache.src}</h1>
               <h1>{itemCache.width}</h1>
               <h1>{itemCache.height}</h1>*/}
               </> 
            }
           
        </div>
    )
}

export default ImageWidget