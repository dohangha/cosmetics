import React from 'react';
import CardItem from './CardItem';
import './Cards.css';



const Cards = () => {
  return (
    <div className='cards'>
      <div>
        <h1>Uncover Our Selections</h1>
          <div className='cards__container'>
              <div className='cards__wrapper'>
                <ul className='cards__items'>
                  <CardItem
                    src='images/makeup-3.jpg'
                    text='Discover the transformative power of our makeup collection'
                    label='Makeup'
                    path='/services'
                  />
                  <CardItem
                    src='images/skincare.jpg'
                    text='Products are designed to celebrate your unique beauty'
                    label='Skincare'
                    path='/products'
                  />
                  <CardItem
                    src='images/hair.jpg'
                    text='Elevate your beauty routine and let your confidence shine'
                    label='Hair'
                    path='/sign-up'
                  />
                </ul>
              </div>
          </div>
        </div>
      <div><img src="images/banner-1.png" alt="banner" /></div>
      <div>
        <h1>Trending Products</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
              <ul className='cards__items'>
                <CardItem
                  src='images/makeup-3.jpg'
                  text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                  label='Makeup'
                  path='/services'
                />
                <CardItem
                  src='images/skincare.jpg'
                  text='Experience Football on Top of the Himilayan Mountains'
                  label='Skincare'
                  path='/products'
                />
                <CardItem
                  src='images/hair.jpg'
                  text='Ride through the Sahara Desert on a guided camel tour'
                  label='Hair'
                  path='/sign-up'
                />
                <CardItem
                  src='images/hair.jpg'
                  text='Ride through the Sahara Desert on a guided camel tour'
                  label='Hair'
                  path='/sign-up'
                />
              </ul>
              <ul className='cards__items card-2'>
                <CardItem
                  src='images/makeup-3.jpg'
                  text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                  label='Makeup'
                  path='/services'
                />
                <CardItem
                  src='images/skincare.jpg'
                  text='Experience Football on Top of the Himilayan Mountains'
                  label='Skincare'
                  path='/products'
                />
                <CardItem
                  src='images/hair.jpg'
                  text='Ride through the Sahara Desert on a guided camel tour'
                  label='Hair'
                  path='/sign-up'
                />
                <CardItem
                  src='images/hair.jpg'
                  text='Ride through the Sahara Desert on a guided camel tour'
                  label='Hair'
                  path='/sign-up'
                />
              </ul>
            </div>
            
        </div>
        </div>
    </div>
  )
}

export default Cards
