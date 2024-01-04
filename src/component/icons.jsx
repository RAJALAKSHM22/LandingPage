import React  from 'react'

function Icons({marks}) {
  return <>
  
  <div className="col-lg-4">
        <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
            <div className="features-icons-icon d-flex"><i className={marks.pic}></i></div>
            <h3>{marks.title}</h3>
            <p className="lead mb-0">{marks.description}</p>
        </div>
    </div>

   </>
}

export default Icons