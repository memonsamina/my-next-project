

import Image from "next/image"
import myimg from '../../images//assets/Logo (2).svg'
import heroimg from '../../images/assets/OBJECTS.svg'
import './Navbar.css'


const Header = () => {
    return(


        <div className="bg-color">
<div class="">

<div class="container bg-color">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      
        <span class="fw-bold"> 
        <Image src={myimg} width={40}/>
        Simple header </span>
      </a>

      <ul class="nav nav-pills  ">
        <li class="nav-item"><a href="#" class="nav-link text-black fw-bold">Home</a></li>
        <li class="nav-item"><a href="#" class="nav-link text-black fw-bold">Features</a></li>
        <li class="nav-item"><a href="#" class="nav-link text-black fw-bold">Pricing</a></li>
        <li class="nav-item"><a href="#" class="nav-link text-black fw-bold">FAQs</a></li>
        <li class="nav-item"><a href="#" class="nav-link text-black fw-bold ">About</a></li>
      </ul>
      <button type="button" class="btn btn-color rounded-pill text-white">Sign in</button>
    </header>
  </div><br/>

  <div class="">
    <div class="container">
      <div class="row pt-5 pb-5 d-flex align-item-center">
        <div class="col-md-6">
          <h1 class="nav fw-bold  position-relative ">The  Smart <br/>
             Choice For  Future</h1>

             <br/>
          <p class="text"> Elearn is a global training provider based across the UK that <br/>
            specialises in accredited and bespoke training courses. We crush <br/> the...</p>


            <div class="">
    <form class="d-flex" role="search">
      <input class="rounded-pill length" type="search" placeholder="Search"  aria-label="Search"/>
      <button class="btn btn-color text-white rounded-pill" type="submit">Continue</button>
    </form>
  </div>
  
        
        </div>
      <div class="col-md-6 px-5">
      <Image src={heroimg} width={330}/>
      </div>
      </div>
</div>
  </div>



</div>
</div>

    )
}

export default Header