import React from 'react'

function Slids({detail}) {

  return <>
    <div className="row g-0">
        <div className="col-lg-6 order-lg-2 text-white showcase-img" src={detail.pic} alt="image" >
          {/* style={"background-image: url('assets/img/bg-showcase-1.jpg')"} */}
        </div>
        <div className="col-lg-6 order-lg-1 my-auto showcase-text">
            <h2>{detail.title}</h2>
            <p className="lead mb-0">
              {detail.describe}
            </p>
        </div>
    </div>
  </>
}

export default Slids