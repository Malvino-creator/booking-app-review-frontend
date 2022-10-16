import React from 'react';
import { Link } from 'react-router-dom';
import hair from '../img/hair.png';
import cornrow from '../img/corn-row.jpeg';
import weaving from "../img/weaving.jpeg"
import coloring from "../img/coloring.jpeg"
import homebook from "../img/home-book.png"

function Home() {
  return (
    <>
      <div className='home-cont'>
        <div className='home-cont-cont'>
          <h5>Your Amazing</h5>
          <br />
          <h1>New Look</h1>
          <br />
          <p>
            Welcome to Hair Saloon. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Fugit repellat veniam laborum fuga architecto unde
            maiores rerum deleniti quibusdam, vitae, nobis iusto accusantium
            soluta sit ipsam nam doloribus eaque dolor.
          </p>
          <br />
          <Link to='/beauty'>
            <button type='button'>See Styles</button>
          </Link>
        </div>
        <div className='home-cont-img'>
          <img src={hair} alt='hair' />
        </div>
      </div>
      <div className='home-cards'>
        <div className='home-card'>
          <img src={cornrow} alt='cornrow' />
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
          <img src={weaving} alt='cornrow' />
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
          <img src={coloring} alt='cornrow' />
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
      <div className='home-book-main'>
        <div className='home-book'>
          <div className='home-book-cont'>
            <p>
              Welcome to Hair Saloon. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Fugit repellat veniam laborum fuga architecto
              unde maiores rerum deleniti quibusdam, vitae, nobis iusto
              accusantium soluta sit ipsam nam doloribus eaque dolor.
            </p>
            <br />
            <Link to='/addstyle'>
              <button type='button'>SEE STYLES</button>
            </Link>
          </div>
          <div className='home-book-img'>
            <img src={homebook} alt='hair' />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
