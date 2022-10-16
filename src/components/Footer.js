import React from 'react';
import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer>
      <div className='footercontainer'>
        <div className='footer1'>
          <div className='newslettertext'>
            <h2>Stay up to date</h2>
            <p>
              subscribe to our newsletter to receive update and learn more about
              us.
            </p>
          </div>
          <div className='newsletter'>
            <input id='email' placeholder='Enter your email address'></input>
            <button id='sub'>subscribe</button>
          </div>
        </div>

        <div className='footer2'>
          <div id='section1'>
            <h1>Hair Saloon</h1>
            <p>
              PataBoda is one of the leading asset financing companies in Kenya,
              providing boda boda loans to thousands of aspiring business owners
              every day!
            </p>
            <h3>© Hair saloon 2022</h3>
          </div>
          <div id='section2'>
            <h2>Counties</h2>
            <p>
              <Link to="/contact">Nairobi</Link>
            </p>
            <p>
              <Link to="/contact">Mombasa</Link>
            </p>
            <p>
              <Link to="/contact">Kisumu</Link>
            </p>
            <p>
              <Link to="/contact">Kiambu</Link>
            </p>
            <p>
              <Link to="/contact">Taita Taveta</Link>
            </p>
            <p>
              <Link to="/contact">Kajiado</Link>
            </p>
          </div>
          <div id='section2'>
            <h2>Company</h2>
            <p>
              <Link to="/">Home</Link>
            </p>
            <p>
              <Link to="/beauty">Beauty</Link>
            </p>
            <p>
              <Link to="/">Contact Us</Link>
            </p>
          </div>
          <div id='section2'>
            <h2>Others</h2>
            <p>
              <Link to="/">FAQs</Link>
            </p>
            <p>
              <Link to="/">Terms of Service</Link>
            </p>
            <p>
              <Link to="/">Privacy & Policy</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
