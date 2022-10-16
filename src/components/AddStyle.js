import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AddStyle() {
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [img, setImg] = useState('');
  const [description, setDescription] = useState('');
  const [stylist, setStylist] = useState('');
  function handleSubmit(e) {
    const formData = {
      name,
      rating,
      img,
      description,
      stylist,
    };
    e.preventDefault();
    fetch('https://hair-saloon-api.herokuapp.com/beauty', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then(() => {
        setDescription('');
        setImg('');
        setName('');
        setStylist("")
        setRating("")
      });
  }

  return (
    <div className='addstyle-cont'>
      <form action='POST' onSubmit={handleSubmit} className='form'>
        <label htmlFor='stylename'>New Style Name</label>
        <br />
        <input
          type='text'
          name='stylename'
          id='stylename'
          placeholder='Enter new style name..'
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <br />
        <label htmlFor='stylist'>Stylist Name</label>
        <br />
        <input
          type='text'
          name='stylist'
          id='stylist'
          placeholder='Enter stylist name..'
          value={stylist}
          onChange={(event) => setStylist(event.target.value)}
        />
        <br />
        <label htmlFor='description'>Style description</label>
        <br />
        <textarea
          name='description'
          id='description'
          cols='30'
          rows='10'
          placeholder='Write your description here..'
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        ></textarea>
        <br />
        <label htmlFor='successrate'>
          Success Rate <em>(out of 10)</em>
        </label>
        <br />
        <input
          type='number'
          name='successrate'
          id='successrate'
          placeholder='Between 1 - 10'
          step='0.1'
          min='0'
          max='10'
          value={rating}
          onChange={(event) => setRating(event.target.value)}
        />
        <br />
        <label htmlFor='imageurl'>Style Image Link</label>
        <br />
        <input
          type='url'
          name='imageurl'
          id='imageurl'
          placeholder='https://i.postimg.cc/VL4Xm6dQ/Image-300x300.jpg'
          value={img}
          onChange={(event) => setImg(event.target.value)}
        />
        <p>
          <em>
            <strong>Instructions:</strong> Go to{' '}
            <Link to='https://postimages.org/'>PostImages</Link> and upload your
            new hair style picture. Copy the Direct Link and paste it above.
          </em>
        </p>
        <button type='submit' id='addstylesubmitbutton'>
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default AddStyle;
