import React from 'react'

function Review({person}) {
  return <>
  <div className="col-lg-4">
                        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img className="img-fluid rounded-circle mb-3" src={`${person.img}`} alt="reviwer img" />
                            <h5>{person.name}</h5>
                            <p className="font-weight-light mb-0">"{person.comment}"</p>
                        </div>
                    </div>

  </>
}

export default Review