import React, { useState } from 'react'
import './Subscription.css';
import logop from '../Riya/Assets/logo_plans.jpg'

const Subscription = () => {
  const [click,setClick]=useState(2);
  const [innerClick,setInnerClick]=useState(2);

  const count =(index)=>{
    setClick(index === null ? null: index);
  }

  const innerCount=(index)=>{
    setInnerClick(index === null ? null : index);
  }

  
  return (
    <div className='subscription'>
      <div className='topsub' >
      <img src={logop} alt="" />
      <a href="/">Sign Out</a>
      </div>
      <h1 >Choose the plan that’s right for you</h1>
      <div className='flexouter'>
        <div className='ibwhole'>

      <div className={`ib ${innerClick ===1 ? 'clicked':''}`} onClick={()=>innerCount(1)}>
            <h3>Mobile</h3>
            <h5>480p</h5>
          </div>
          <div className={`ib ${innerClick ===2 ? 'clicked':''}`} onClick={()=>innerCount(2)}>
        <h3>Basic</h3>
          <h5>720p</h5>
        </div>
        <div className={`ib ${innerClick ===3 ? 'clicked':''}`} onClick={()=>innerCount(3)}>
        <h3>Standard</h3>
          <h5>1080p</h5>
        </div>
        <div className={`ib ${innerClick ===4 ? 'clicked':''}`} onClick={()=>innerCount(4)}>
        <h3>Premium</h3>
          <h5>4k + HDR</h5>
        </div>
        </div>
        <div className={`flexinner1 ${click === 1 ? 'clicked':''}`} onClick={()=>count(1)}>
          <div className={`innerbox ${innerClick ===1 ? 'clicked':''}`} onClick={()=>innerCount(1)}>
            <h2>Mobile</h2>
            <h4>480p</h4>
          </div>
          
          <div className={`innerbox2 ${innerClick === 1 ? 'disp':''}`}>
            <div className='col-grey'>Monthly price</div>
            <div className='col-black'>₹ 149</div>
            <div className='col-grey'>Video and sound quality</div>
            <div className='col-black'>Fair</div>
            <div className='col-grey'>Resolution</div>
            <div className='col-black'>480p</div>
            <div className='col-grey'>Supported devices</div>
            <div className='col-black'>Mobile phone, tablet</div>
            <div className='col-grey'>Devices your household can watch at the same time</div>
            <div className='col-black'>1</div>
            <div className='col-grey'>Download devices</div>
            <div className='col-black'>1</div>
          </div>
        </div>
        <div className={`flexinner1 ${click === 2 ? 'clicked':''}`} onClick={()=>count(2)}>
        <div className={`innerbox ${innerClick ===2 ? 'clicked':''}`} onClick={()=>innerCount(2)}>
        <h2>Basic</h2>
          <h4>720p</h4>
        </div>
        <div className={`innerbox2 ${innerClick === 2 ? 'disp':''}`}>
        <div className='col-grey'>Monthly price</div>
            <div className='col-black'>₹ 199</div>
            <div className='col-grey'>Video and sound quality</div>
            <div className='col-black'>Good</div>
            <div className='col-grey'>Resolution</div>
            <div className='col-black'>720p HD</div>
            <div className='col-grey'>Supported devices</div>
            <div className='col-black'>TV, computer, mobile phone, tablet</div>
            <div className='col-grey'>Devices your household can watch at the same time</div>
            <div className='col-black'>1</div>
            <div className='col-grey'>Download devices</div>
            <div className='col-black'>1</div>
          </div>
        </div>
        <div className={`flexinner1 ${click === 3 ? 'clicked':''}`} onClick={()=>count(3)}>
        <div className={`innerbox ${innerClick ===3 ? 'clicked':''}`} onClick={()=>innerCount(3)}>
        <h2>Standard</h2>
          <h4>1080p</h4>
        </div>
        <div className={`innerbox2 ${innerClick === 3 ? 'disp':''}`}>
        <div className='col-grey'>Monthly price</div>
            <div className='col-black'>₹ 499</div>
            <div className='col-grey'>Video and sound quality</div>
            <div className='col-black'>Great</div>
            <div className='col-grey'>Resolution</div>
            <div className='col-black'>1080p Full HD</div>
            <div className='col-grey'>Supported devices</div>
            <div className='col-black'>TV, computer, mobile phone,tablet</div>
            <div className='col-grey'>Devices your household can watch at the same time</div>
            <div className='col-black'>2</div>
            <div className='col-grey'>Download devices</div>
            <div className='col-black'>2</div>
          </div>
        </div>
        <div className={`flexinner1 ${click === 4 ? 'clicked':''}`} onClick={()=>count(4)}>
        <div className={`innerbox ${innerClick ===4 ? 'clicked':''}`} onClick={()=>innerCount(4)}>
        <h2>Premium</h2>
          <h4>4k + HDR</h4>
        </div>
        <div className={`innerbox2 ${innerClick === 4 ? 'disp':''}`}>
        <div className='col-grey'>Monthly price</div>
            <div className='col-black'>₹ 649</div>
            <div className='col-grey'>Video and sound quality</div>
            <div className='col-black'>Best</div>
            <div className='col-grey'>Resolution</div>
            <div className='col-black'>4K Ultra HD + HDR</div>
            <div className='col-grey'>Supported devices</div>
            <div className='col-black'>TV, computer, mobile phone,tablet</div>
            <div className='col-grey'>Devices your household can watch at the same time</div>
            <div className='col-black'>4</div>
            <div className='col-grey'>Download devices</div>
            <div className='col-black'>6</div>
          </div>
        </div>
      </div>
      <div className='bottom'>

      <button>Next</button>
      </div>
    </div>
  )
}

export default Subscription