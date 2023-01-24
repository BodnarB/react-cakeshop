import React from 'react'
import './Home.css'
import Products from '../../Components/Products/Products'
import Header from '../../Components/Header/Header'
import introImg from '../../Assets/photo-1491222825723-0b8308840432.avif'

export default function Home({ addFunc }) {

  return (
    <>
      <Header />
      <main className='home'>
        <div className='intro-img-fade'>
          <img className='intro-cover-img' src="https://images.pexels.com/photos/461431/pexels-photo-461431.jpeg" alt="" />
          <p className='intro-cover-text'>The best cakes in town</p>
        </div>
        <section className='about-us'>
          <div className='max-width-about'>
            <div>
              <h2>About us</h2>
              <p className='home-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consectetur voluptatibus vitae quam quaerat porro, aperiam maiores temporibus illum reprehenderit qui quas ipsa ad quis?
                Perspiciatis.</p>
              <p className='home-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aspernatur, minus nemo atque porro nesciunt
                nobis quidem id necessitatibus,
                cupiditate aliquid magni a architecto repellendus ullam! Numquam, distinctio.</p>
            </div>
            <img className='intro-img' src={introImg} alt="" />
          </div>
        </section>
        <section className='history'>
          <div className="max-width-history">
            <div>
              <h2>Our history</h2>
              <p className='home-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eligendi eius optio porro aspernatur,
                molestias fugit sint. Iusto atque et iure illo autem repudiandae quas quaerat, eligendi possimus velit
                porro laborum odit, esse voluptatum est laboriosam! Architecto culpa excepturi, consequatur quam
                labore eius, explicabo est alias tempora beatae quo quaerat!</p>
            </div>
            <img className='history-img' src="https://images.pexels.com/photos/6210908/pexels-photo-6210908.jpeg" alt="" />
          </div>
        </section>
      </main>
    </>
  )
}
