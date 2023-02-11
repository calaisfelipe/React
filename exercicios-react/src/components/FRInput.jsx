import React from 'react'

 const FRInput = React.forwardRef((props, ref) => {

    return (
      <div>
          <input type="text" name="itext" id="itext" ref={ref}/>
      </div>
    )
  }) 


export default FRInput