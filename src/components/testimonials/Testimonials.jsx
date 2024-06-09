import React from 'react'
import './testimonials.css';
import AVT1 from '../../assets/user.png';
import AVT2 from '../../assets/user.png';
import AVT3 from '../../assets/user.png';
import AVT4 from '../../assets/user.png';

import { Pagination } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    id:1,
    avatar: AVT1,
    name: 'Edward Eshun',
    review: 'We had an association for old students, the same school where both Annan and I attended. We needed a web app to mobilize the membership and he did justice to that'
  },
  {
    id:2,
    avatar: AVT2,
    name: 'Solomon Mensah',
    review: 'I was his lecturer at the university and I once tasked him to create an online portal to track the working progress of my emplyees. He was so superb!'
  },
  {
    id:3,
    avatar: AVT3,
    name: 'Paul Tutu',
    review: 'I was working with him (as a manager) at the bank, before he started tertiary. I needed a databse system to check the attendance of my subordinates. His product in Ms Access was so cool'
  },
  {
    id:4,
    avatar: AVT4,
    name: 'Kofi Sarpong',
    review: 'I was his lecturer. He was my intern when he was in the 2nd year at the university. He did not develop any software per se, but his contributions to the project at hand was so positive'
  },
  {
    id:4,
    avatar: AVT4,
    name: 'Bismark Adjei',
    review: 'I needed a system to track the attendance of my workers at the workplace and he created a mobile app and a website. The app was used by the workers and the site was used by me as an admin dashboard'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{clickable:true}}
      >
        {
          data.map(({id, avatar, name, review})=>{
            return(
              <SwiperSlide key={id} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt={name} />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">
                    {review}
                </small>
              </SwiperSlide>
            )
          })
        }
        
      </Swiper>
    </section>
  )
}

export default Testimonials