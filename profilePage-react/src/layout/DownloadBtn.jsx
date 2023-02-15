import React from 'react'
import '../styles/components/DownloadBtn.sass'

function DownloadBtn({text,url,docName}) {
  return (
 
    <div className='btnContainer'>   
        
    <a id="DownloadBtn" href={url} download={docName} type='application/pdf'>{text}</a>
    
    </div>
  )
}

export default DownloadBtn