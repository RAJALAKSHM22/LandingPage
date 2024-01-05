import React from 'react'
import Nav from './component/nav'
import Header from './component/header' 
import Icons from './component/icons' 
import Slids from './component/slids'
import Review from './component/review' 
import Footer from './component/footer' 
import Info from './component/info' 

// import Pic1 from '../src/assets/pic1.jpeg'
// import Pic2 from '../src/assets/pic2.jpg'
// import Pic3 from '../src/assets/pic3.jpg'
import Bg1 from '../src/assets/bg1.avif'
import Bg2 from '../src/assets/bg2.avif'
// import Bg3 from '../src/assets/bg3.jpeg'



function App() {
  
let marks=[
  { pic: "bi-window m-auto text-primary" ,
    title: "Fully Responsive " ,
    description: "This theme will look great on any device, no matter the size! "
  },
  { pic: "bi-layers m-auto text-primary" ,
    title: "Bootstrap 5 Ready " ,
    description: "Featuring the latest build of the new Bootstrap 5 framework! "
  },
  { pic: "bi-terminal m-auto text-primary" ,
    title: "Easy to Use " ,
    description: "Ready to use with your own content, or customize the source files! "
  }
]

let detail =[
  {
    cls1:"col-lg-6 order-lg-2 text-white showcase-img" ,
    cls2:"col-lg-6 order-lg-1 my-auto showcase-text",
    url:"src/assets/bg1.avif",
    title:"Fully Responsive Design",
    describe:"When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!"
  },
  {
    cls1:"col-lg-6 text-white showcase-img",
    cls2:"col-lg-6 my-auto showcase-text",
    url:"assets/img/bg-showcase-2.jpg",
    title:"Updated For Bootstrap 5",
    describe:"Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!"
  },
  {
    cls1:"col-lg-6 order-lg-2 text-white showcase-img",
    cls2:"col-lg-6 order-lg-1 my-auto showcase-text",
    url:"assets/img/bg-showcase-3.jpg",
    title:"Easy to Use & Customize",
    describe:"Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!"
  }
]

let person =[
  {
    img:"Pic1",
    name:"Margaret E.",
    comment:"This is fantastic! Thanks so much guys!"
  },
  {
    img:"assets/img/testimonials-2.jpg ",
    name:"Fred S.",
    comment:"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."
  },
  {
    img:"assets/img/testimonials-3.jpg ",
    name:"Sarah W.",
    comment:"Thanks so much for making these free resources available to us!"
  }
]

return <>
<Nav/>
<Header/>
{/* <img src={Pic3}></img>
<img src={Bg1}></img> */}

<section className="features-icons bg-light text-center">
  <div className="container">
    <div className="row">
      {
        marks.map((e,i)=>{
          return <Icons marks={e} key={(i)} />
        })
      }
    </div>
  </div>
</section> 

<section className="showcase">
  <div className="container-fluid p-0">
      {
        detail.map((e,i)=>{
          return <Slids detail={e} key={i} />
        })
      }
    
    
  </div> 
</section> 

<section className="testimonials text-center bg-light">
  <div className="container">
    <h2 className="mb-5">What people are saying...</h2>
    <div className="row">
      {
        person.map((e,i)=>{
          return <Review person={e} key={i} />
        })
      }
      
    </div>
  </div>
</section>          

<section className="call-to-action text-white text-center" id="signup">
  <div className="container position-relative">
    <div className="row justify-content-center">
      <div className="col-xl-6">

        <Footer/>

      </div> 
    </div> 
  </div>
</section>    


<Info/>
</>
}

export default App