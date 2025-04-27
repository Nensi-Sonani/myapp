import React from 'react';
import '../Css/Home.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

const Home = () => {
  const reviews = [
    {
      name: "Sophia R.",
      rating: 5,
      comment: "Absolutely stunning! The craftsmanship is top-notch. I get compliments every time I wear it!",
      date: "April 12, 2025",
      image: "https://i.ibb.co/d074PzSB/review-1-2.jpg"
    },
    {
      name: "Emily W.",
      rating: 4,
      comment: "Beautiful jewelry with brilliant diamonds. Fast shipping too!",
      date: "March 28, 2025",
      image: "https://i.ibb.co/rRyCBkds/review-2.jpg"
    },
    {
      name: "Isabella M.",
      rating: 5,
      comment: "Exceeded my expectations! The sparkle is unmatched. Highly recommend.",
      date: "March 10, 2025",
      image: "https://i.ibb.co/4wH4MX2G/download-8.jpg"
    }
  ];

  return (
    <div>
      <section>
        <Swiper
          effect={'cube'}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          loop
          pagination={true}
          autoplay={{ delay: 2000 }}
          modules={[EffectCube, Pagination, Autoplay]} // Add Autoplay to modules
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="banner-nailedjewel">
              <div className="banner-content">
                <div className="left-side">
                  <h1>NailedJewel</h1>
                  <p className="quote">
                    "At NailedJewel, every diamond is a masterpiece.<br />
                    Wear your story, sparkle your soul."
                  </p>
                  <p className="offer">Get up to 20% off</p>
                  <p className="new-arrivals">New Arrivals</p>
                </div>
                <div className="right-side">
                  <img src="https://i.ibb.co/v6rLWXb5/download-2.jpg" alt="Model wearing jewelry" />
                </div>
                <div className='stars'>
                  <img src="https://i.ibb.co/vCNVMWsT/stars.png" alt="" />
                </div>
                <div className='star'>
                  <img src="https://i.ibb.co/cKKfWR75/star.png" alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner-nailedjewel">
              <div className="banner-content">
                <div className="left-side">
                  <h1>NailedJewel</h1>
                  <p className="quote">
                    "At NailedJewel, every diamond is a masterpiece.<br />
                    Wear your story, sparkle your soul."
                  </p>
                  <p className="offer">Get up to 20% off</p>
                  <p className="new-arrivals">New Arrivals</p>
                </div>
                <div className="right-side">
                  <img src="https://i.ibb.co/0pw9R9JS/jen.jpg" alt="Model wearing jewelry" />
                </div>
                <div className='stars'>
                  <img src="https://i.ibb.co/vCNVMWsT/stars.png" alt="" />
                </div>
                <div className='star'>
                  <img src="https://i.ibb.co/cKKfWR75/star.png" alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner-nailedjewel">
              <div className="banner-content">
                <div className="left-side">
                  <h1>NailedJewel</h1>
                  <p className="quote">
                    "At NailedJewel, every diamond is a masterpiece.<br />
                    Wear your story, sparkle your soul."
                  </p>
                  <p className="offer">Get up to 20% off</p>
                  <p className="new-arrivals">New Arrivals</p>
                </div>
                <div className="right-side">
                  <img src="https://i.ibb.co/2R5QMVn/kylie.jpg" alt="Model wearing jewelry" />
                </div>
                <div className='stars-k'>
                  <img src="https://i.ibb.co/vCNVMWsT/stars.png" alt="" />
                </div>
                <div className='star'>
                  <img src="https://i.ibb.co/cKKfWR75/star.png" alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <div className="page-width">
        <section className='d-flex section-padding'>
          <div className='w-50 stonequalityimg'>
            <img src="https://ferkosfinejewelry.com/cdn/shop/files/stone_quality_copy_672x@2x.jpg?v=1653329864" alt="" className='' />
          </div>
          <div className='w-50 stoneqalitytext'>
            <h2>Stone Quality</h2>
            <p>
              When buying jewelry, it’s imperative to purchase high quality pieces that will last. Our family-owned business is proud to use only 14k & 18k solid gold and high quality diamonds.
            </p>
          </div>
        </section>

        <section className='d-flex flex-wrap section-padding'>
          <div className='w-50 stoneqalitytext2'>
            <h3>Our Craftsmanship</h3>
            <p>
              We take pride in creating the perfect piece of jewelry. By crafting and manufacturing all of our pieces in house, we make sure every design is built with you in mind.
            </p>
          </div>
          <div className='w-50 stonequalityimg'>
            <img src="https://ferkosfinejewelry.com/cdn/shop/files/craftman_ship_672x@2x.jpg?v=1653330120" alt="" className='' />
          </div>
        </section>
      </div>

      <section>
        <div className="wintter">
          <div className="wintter-overly">
            <div className="page-width">
              <div className="winter-text">
                <p className="gnw">Our Story</p>
                <p className="collection">Jewelry is in our blood. Through the passion of family values, art, and the importance of hands-on processes, we manufacture our jewelry in-house and pride ourselves on customer relationships. </p>
                <button>Get To Know US</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='service'>
        <div className="page-width">
          <div className='mainbox'>
            <div className='box'>
              <img src="https://i.ibb.co/mVYJDfsv/icons-heart.png" alt="" />
              <p>Ethically Sourced</p>
            </div>
            <div className='box'>
              <img src="https://i.ibb.co/vGYgjjP/affordable-luxury.png" alt="" />
              <p>Affordable Luxury</p>
            </div>
            <div className='box'>
              <img src="https://i.ibb.co/TCh9VC1/icons-gold.png" alt="" />
              <p>14K & 18K Gold</p>
            </div>
            <div className='box'>
              <img src="https://i.ibb.co/tPCP4SDk/icons-family.png" alt="" />
              <p>Family Business</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="video-banner">
          <video
            className="background-video"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="https://v1.pinimg.com/videos/mc/720p/8d/da/8c/8dda8ce48b6aebbe71721b68ff647957.mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="overlay">
            {/* <h1>Welcome to My Website</h1> */}
            <Link to='/product'>
              <button className='btn btn-outline-dark'>Shop Now</button>
            </Link>
          </div>
        </div>
      </section>
      <section className="review-section">
        <h2 className="section-title">Our Happy Clients</h2>
        <div className="reviews-container">
          {reviews.map((review, index) => (
            <div className="review-card" key={index}>
              <img src={review.image} alt={review.name} className="reviewer-image" />
              <h3 className="reviewer-name">{review.name}</h3>
              <div className="review-rating">
                {Array(review.rating).fill("⭐").join(" ")}
              </div>
              <p className="review-comment">"{review.comment}"</p>
              <p className="review-date">{review.date}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;