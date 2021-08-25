import React from 'react'
import styled from 'styled-components'
import {team} from '../utils'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import SwiperCore, { Navigation, Pagination, A11y, EffectCoverflow } from 'swiper';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/effect-coverflow/effect-coverflow.scss';
SwiperCore.use([Navigation, Pagination, A11y, EffectCoverflow]);
const Team = () => {
    
    return (
        
        <Wrapper className='section-center' id='ourteam'>
            <h1 className='title'>our <span>team</span></h1>
            <div className='underline'></div>
            {/* <div className='grid'> */}
            <Swiper 
            spaceBetween={32}
            slidesPerView={3}
            centeredSlides='true'
            navigation speed={500}
            pagination={{ clickable: true }}
            effect='coverflow'
            autoplay={3000}
            breakpoints={{
                300:{
                    spaceBetween: 16,
                    slidesPerView: 'auto'
                },
                420:{
                    slidesPerView: 3,
                }

            }}>
                {team.map((person)=>{
                    const {id, name, proffesion, img} = person;
                    return (
                        <SwiperSlide  key={id}>
                    <div className='card'>
                        <img src={img} alt={name} />
                        <div className='card-info'>
                        <h5>{name}</h5>
                        <h6>{proffesion}</h6>
                        </div>
                        {/* <div className='person-info'>

                        </div> */}
                    </div>
                </SwiperSlide>
                    )
                })}
            </Swiper>
            {/* </div> */}
        </Wrapper>
    )
}
const Wrapper = styled.section`
    .title{
        text-align: center;
    }
    .swiper-container{
        padding-top: .4rem;
        height: 50vh;
        margin-bottom: 1rem;
    }
    .swiper-container-3d .swiper-slide-shadow-left, .swiper-container-3d, .swiper-slide-shadow-right{
        background-image: none;
    }
    .swiper-pagination{
        bottom: -10px;
    }
    .swiper-slide {
    display:flex;
    /* align-items: center; */
    justify-content:center;
    }
    .swiper-button-next{
        margin-right: -.7rem;
    }

    h5{
        margin-top: .8rem;
    }
    .title span{
        color: var(--second-500);
    }
    .card{
        width: 14rem;
        height: 45vh;
        position: relative;
        border-radius: .7rem;
        overflow: hidden;
        -webkit-box-shadow: 1px 1px 4px #99fff3, 1px 1px 4px #99fff3, 1px 1px 4px #99fff3, 1px 1px 4px 0px rgba(0,0,0,0); 
        box-shadow: 1px 1px 4px  #99fff3, 1px 1px 4px #99fff3, 1px 1px 4px  #99fff3, 1px 1px 4px rgba(0,0,0,0);
    }
    .card img{
        height: 100%;
    }
    .card-info{
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
        padding-left: 1rem;
        padding-bottom: 1rem;
        transform: translateY(100%);
        display: flex;
        flex-direction: column;
        transition: var(--transition);
    }
    .card:hover .card-info{
        transform: translateY(0);
        background: rgba(0, 0, 0, 0.59);
    }
    /* dont forget to add */
    /* .person-info{
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateY(50%) translateX(-50%);
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        background: var(--second-300);
        border: 1px solid var(--second-500);
    } */
    @media screen and (max-width: 768px){
        .card{
            width: 13rem
        }
        h5{
            font-size: 1.1rem;
        }
        h6{
            font-size: 0.9rem;
        }
    }
    @media screen and (max-width: 576px){
        .card{
            width: 14rem;
        }
        h5{
            font-size: 1.1rem;
        }
        h6{
            font-size: 0.9rem;
        }
        .swiper-container{
            width: 100%;
        }
    }
    @media screen and (max-width: 420px){
        .card{
            width: 13rem;
        }
         h5{
            font-size: 1rem;
        }
        h6{
            font-size: 0.8rem;
        }
        .swiper-container{
            width: 100%;
        }
        .swiper-slide{
            width: 60%;
        }
    }
`

export default Team
