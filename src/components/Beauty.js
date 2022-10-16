import React from 'react';
import { Link } from 'react-router-dom';

function Beauty({ beauty, handleSearch }) {
  
  
  const mappedBeauty = beauty.map((item) => {
    
    return (
      <div className='beauty-item' key={item.id}>
        <h1>{item.name}</h1>
        <br />
        <div className='beauty-item-content'>
          <div className='beauty-item-image'>
            <img src={item.img} alt='microweaving' />
          </div>
          <div className='beauty-item-info'>
            <p>{item.description}</p>
            <section className='beauty-item-info-bottom-section'>
              <h3>Stylist: {item.stylist}</h3>
              <h3 style={item.rating > 8 ? { color: 'green' } : null}>
                Success Rate: {item.rating}/ 10
              </h3>
            </section>
          </div>
        </div>
      </div>
    );
  });
  
  
  const randomizedBeauty = Math.floor(Math.random() * beauty.length); 
  console.log(randomizedBeauty)

  return (
    <div className='beauty'>
      <div className='beauty-search'>
        <input
          type='text'
          name='search'
          id='search'
          placeholder='Search..'
          onChange={handleSearch}
        />
      </div>
      <div className='beauty-list'>{mappedBeauty}</div>
      {/* <div className='beauty-list'>{randomizedBeauty}</div> */}
      <Link to='/addstyle' id='addbuttonlink'>
        <button type='button' className='addbutton'>
          ADD STYLE
        </button>
      </Link>
    </div>
  );
}

export default Beauty;
