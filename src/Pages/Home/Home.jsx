import React from 'react'
import './Home.css'
import introImg from '../../Assets/photo-1491222825723-0b8308840432.avif'
import BestSellers from '../../Components/BestSellers/BestSellers'

export default function Home({ addFunc, ProductList, cart }) {

  return (
    <>
      <main className='home'>
        <div className='intro-img-fade'>
          <img className='intro-cover-img' src="https://images.pexels.com/photos/461431/pexels-photo-461431.jpeg" alt="cake with strawberries" />
          <p className='intro-cover-text'>The best cakes in town</p>
        </div>
        <section className='about-us'>
          <div className='max-width-about'>
            <div>
              <h2>About us</h2>
              <p className='home-text'>Welcome to our bakery! We specialize in creating delicious cakes that are made with only the finest ingredients.
                From classic flavors like vanilla and chocolate, to more unique options like lavender lemon and matcha green tea,
                we have something for everyone.</p>
              <p className='home-text'>Our cakes are perfect for birthdays, weddings, and any other special occasion.
                Browse our selection today and place your order for pickup or delivery. Let us help make your special day even sweeter!</p>
            </div>
            <img className='intro-img' src={introImg} alt="cake shop" />
          </div>
        </section>
        <section className='best-sellers-home'>
          <BestSellers addFunc={addFunc} ProductList={ProductList} cart={cart} />
        </section>
        <section className='history'>
          <div className="max-width-history">
            <div>
              <h2>Our history</h2>
              <p className='home-text'>Our bakery has a long history of providing customers with delicious cakes for all occasions. We were founded by a family of bakers who have been passionate about creating sweet treats for generations. We started off as a small local business, but our reputation for producing high-quality cakes quickly spread.</p>
              <p className='home-text'>Today, we are proud to serve a wide range of customers, from individuals looking for a special treat to businesses in need of desserts for events. Throughout the years, we have constantly evolved and innovated our recipes, equipment and techniques to bring you the best cakes we can make.</p>
            </div>
            <img className='history-img' src="https://images.pexels.com/photos/6210908/pexels-photo-6210908.jpeg" alt="decorating a cake" />
          </div>
        </section>
      </main>
    </>
  )
}
