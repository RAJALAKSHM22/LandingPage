import React from 'react'

function Slids({detail}) {

  return <>
    <div className="row g-0">
        <div className={`${detail.cls1}`} style={{backgroundimage:` url(${detail.url})`}} >
        </div>
        
        <div className={`${detail.cls2}`}>
            <h2>{detail.title}</h2>
            <p className="lead mb-0">
              {detail.describe}
            </p>
        </div>
    </div>
  </>
}

export default Slids