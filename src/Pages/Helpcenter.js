import React, { useState } from 'react';


import './Helpcenter.css';

import Header1 from '../Sanmi/Help/Header1.js';
import SearchBar from '../Sanmi/Help/SearchBar.js';
import PopularTopics from '../Sanmi/Help/PopularTopics.js';
import FAQ from '../Sanmi/Help/FAQ.js';
import Footer2 from '../Riya/Components/Footer2.js';

const Helpcenter = () => {

  const [searchTerm, setSearchTerm] = useState('');

  const faqs = {
    "Getting Started": [
      { question: "What is Netflix?", answer: "Netflix is a streaming service that offers a wide variety of TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices." },
      { question: "How to pay for Netflix?", answer: "You can pay for Netflix through various payment methods, including credit/debit cards, PayPal, and gift cards." },
      { question: "How to download the Netflix app?", answer: "You can download the Netflix app from the App Store (iOS devices), Google Play Store (Android devices), or directly from the Netflix website for other devices." }
    ],
    "Can't Watch": [
      { question: "Forgot Netflix email address or password", answer: "If you forgot your email address or password, you can reset it on the Netflix login page by clicking 'Forgot Email/Password'." },
      { question: "Can't find the Netflix app in app stores", answer: "If you can't find the Netflix app in app stores, make sure your device is compatible with the app. Check the Netflix Help Center for more details." },
      { question: "Netflix says 'This app is not compatible with your device.'", answer: "If you see this message, your device may not meet the minimum requirements for the Netflix app. Check the Netflix Help Center for compatible devices." }
    ],
    "Manage My Account": [
      { question: "Plans and Pricing", answer: "Netflix offers several plans to meet your needs. Check the Netflix website for the latest plans and pricing information." },
      { question: "Billing and Payments", answer: "You can manage your billing information and payment methods from your Netflix account page. Make sure your payment method is up to date to avoid interruptions." },
      { question: "My email was changed without my permission", answer: "If your email was changed without your permission, contact Netflix customer support immediately to secure your account." }
    ],
    "Watching Netflix": [
      { question: "How to download TV shows and movies to watch offline", answer: "To download titles, open the Netflix app on your mobile device, select the title you want to download, and tap the download icon." },
      { question: "How to watch Netflix on your TV", answer: "You can watch Netflix on your TV by using a smart TV, streaming device, gaming console, or by connecting your computer or mobile device to the TV." },
      { question: "How to use a mobile device to watch Netflix on a TV", answer: "You can use a mobile device to watch Netflix on a TV by using a casting device like Chromecast or by connecting via an HDMI cable." }
    ],
    "Quick Links": [
      { question: "Reset Password", answer: "To reset your password, go to the Netflix login page and click 'Forgot Password'. Follow the instructions to reset your password." },
      
      { question: "Get help signing in", answer: "If you need help signing in, visit the Netflix Help Center for troubleshooting tips or contact customer support." }
   ]
  };

  const filteredFaqs = Object.keys(faqs).reduce((acc, category) => {
    acc[category] = faqs[category].filter(faq => 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return acc;
  }, {});

  document.body.style.margin=0;
  document.body.style.padding=0;

  return (
    <div className="App3">
      <Header1/>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <PopularTopics />
      <div className="faq-container">
        {Object.keys(filteredFaqs).map((category, index) => (
          <FAQ key={index} title={category} faqs={filteredFaqs[category]} />
          
        ))}
      </div>
    </div>
  );
};

export default Helpcenter;