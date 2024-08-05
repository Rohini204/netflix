import React, { useState } from 'react';
import '../Styles/Faq.css'; 
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Footer2 from './Footer2';

const Faq = () => {
  
  const [descc, setDesc] = useState(null);
  
  const display = (index) => {
    setDesc(index === descc ? null: index);
  };
  document.body.style.backgroundColor='black';
  document.body.style.margin=0;
  document.body.style.padding=0;

  return (
    <div className='faqdiv'>
      <center><h1 className='heading'>Frequently Asked Questions</h1></center>

      <button onClick={() => display(1)}>
        <div className='faqdiv2'>
          <p>What is Netflix?</p>
          <AddOutlinedIcon/>
        </div>
      </button>
      {descc === 1 && (
        <div className='descrip'>
          <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.</p>
          <p>You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>
        </div>
      )}

      <button onClick={() => display(2)}>
        <div className='faqdiv2'>
          <p>How much does Netflix cost?</p>
          <AddOutlinedIcon />
        </div>
      </button>
      {descc === 2 && (
        <div className='descrip'>
          <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.</p>
        </div>
      )}

      <button onClick={() => display(3)}>
        <div className='faqdiv2'>
          <p>Where can I watch?</p>
          <AddOutlinedIcon />
        </div>
      </button>
      {descc === 3 && (
        <div className='descrip'>
          <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.</p>
          <p>You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
        </div>
      )}
      <button onClick={() => display(4)}>
        <div className='faqdiv2'>
          <p>How do I cancel?</p>
          <AddOutlinedIcon />
        </div>
      </button>
      {descc === 4 && (
        <div className='descrip'>
          <p>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
        </div>
      )}
      <button onClick={() => display(5)}>
        <div className='faqdiv2'>
          <p>What can I watch on Netflix?</p>
          <AddOutlinedIcon />
        </div>
      </button>
      {descc === 5 && (
        <div className='descrip'>
          <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
        </div>
      )}
      <button onClick={() => display(6)}>
        <div className='faqdiv2'>
          <p>Is Netflix good for kids?</p>
          <AddOutlinedIcon />
        </div>
      </button>
      {descc === 6 && (
        <div className='descrip'>
          <p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.</p>
          <p>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p>
        </div>
      )}
      <div className='inside'>
      <div>Ready to watch? Enter your email to create or restart your membership.</div>
        <form action='Subscription'>

        <div className='inside1'>
          <input type="email" placeholder="Email address" required/>
            
          <button type="submit"><h2 className='heading'>
            Get Started
            </h2></button>
            
        </div>
        </form>
      </div>
      <Footer2/>
    </div>
  );
};

export default Faq;
