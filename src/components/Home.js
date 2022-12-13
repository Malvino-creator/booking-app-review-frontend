import React from 'react';
import { Link } from 'react-router-dom'
import download1 from '../img/download1.jpeg'
import download2 from '../img/download2.jpeg'
import download3 from "../img/download3.jpeg"
import download4 from "../img/download4.webp"
import download6 from "../img/download6.jpeg"


function Home() {
  return (
    <>
      <div className='home-cont'>
        <div className='home-cont-cont'>
          <h5>Your Perfect</h5>
          <br />
          <h1>Stress Reliever</h1>
          <br />
          <p>
            Welcome to Octah Spa. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Fugit repellat veniam laborum fuga architecto unde
            maiores rerum deleniti quibusdam, vitae, nobis iusto accusantium
            soluta sit ipsam nam doloribus eaque dolor.
          </p>
          <br />
        </div>
        <div className='home-cont-img'>
          <img src={download1} alt='download1' />
        </div>
      </div>
      <div className='home-cards'>
        <div className='home-card'>
          <img src={download2} alt='download2' />
          <h2>Corn Rows</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
            reiciendis perferendis accusamus esse nisi dignissimos, facilis sed
            iusto animi laboriosam ratione praesentium, atque nemo harum error.
            Porro labore voluptatem, minima recusandae hic, sequi nemo dolor ab
            eos libero ipsum laudantium!
          </p>
          <Link to='/' className='card-link'>
            <h4>Visit us today 》</h4>
          </Link>
        </div>
        <div className='home-card'>
          <img src={download3} alt='download3' />
          <h2>Weaving</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
            reiciendis perferendis accusamus esse nisi dignissimos, facilis sed
            iusto animi laboriosam ratione praesentium, atque nemo harum error.
            Porro labore voluptatem, minima recusandae hic, sequi nemo dolor ab
            eos libero ipsum laudantium!
          </p>
          <Link to='/' className='card-link'>
            <h4>Visit us today 》</h4>
          </Link>
        </div>
        <div className='home-card'>
          <img src={download6} alt='download6' />
          <h2>Coloring</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
            reiciendis perferendis accusamus esse nisi dignissimos, facilis sed
            iusto animi laboriosam ratione praesentium, atque nemo harum error.
            Porro labore voluptatem, minima recusandae hic, sequi nemo dolor ab
            eos libero ipsum laudantium!
          </p>
          <Link to='/' className='card-link'>
            <h4>Visit us today 》</h4>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
