import {React,useEffect} from 'react';
import './main.css';
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi';
import img from '../../Assets/img(1).jpg'
import img2 from '../../Assets/img(2).jpg'
import img3 from '../../Assets/img(3).jpg'
import img4 from '../../Assets/img(4).jpg'
import img5 from '../../Assets/img(5).jpg'
import img6 from '../../Assets/img(6).jpg'
import img7 from '../../Assets/img(7).jpg'
import img8 from '../../Assets/img(8).jpg'
import img9 from '../../Assets/img(9).jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Data=[
  {
    id:1,
    imgSrc: img,
    destTitle:'Bora Bora',
    location:'New Zealand',
    grade:'CULTURAL RELAX ',
    fees:'$700',
    description:'The epitome of romance,Bora Bora is one of the best travel destinations in the World.This place is known for its Luxurious stays and adventurous activities. '
  },
  {
    id:2,
    imgSrc: img2,
    destTitle:'Machu Pichu',
    location:'Peru',
    grade:'CULTURAL RELAX ',
    fees:'$600',
    description:'Huayna Picchu is a mountain in Peru, rising over Machu Picchu,the so-called Lost City of Incas. This place is popular among tourists as the sunrise from the Sun Gate is simply spectacular. '
  },
  {
    id:3,
    imgSrc: img3,
    destTitle:'Great Barrier Reef',
    location:'Australia',
    grade:'CULTURAL RELAX ',
    fees:'$700',
    description:'One of the most remarkable Australian natural gifts is the Great Barrier Reef The hallmark of this place is `Lavish` and `beauty` Always interesting to be in this place. '
  },
  {
    id:4,
    imgSrc: img4,
    destTitle:'Cappadocia',
    location:'Turkey',
    grade:'CULTURAL RELAX ',
    fees:'$800',
    description:'According to the World Tourism Ranking 45 Million people visit Turkey each year, and from that about 2 million come to visit Cappadacio This place is known for its Luxurious and adventurous activities . '
  },
  {
    id:5,
    imgSrc: img5,
    destTitle:'Guanajuato',
    location:'Mexico',
    grade:'CULTURAL RELAX ',
    fees:'$1100',
    description:'A city in Central Mexico Guanajuato is known for its history of silver mining and colonial architecture The houses in the city are very attractive painted with the most bright colors available Always Welcome . '
  },
  {
    id:6,
    imgSrc: img6,
    destTitle:'Cinque Terre',
    location:'Italy',
    grade:'CULTURAL RELAX ',
    fees:'$840',
    description:'The Vibrant hues of the houses are its benchmark and explains the beauty of this plaec . Also, if you are a foodie and Love seafood, you will be exhilerated with the choice you are about to get here. Happy exploring great food . '
  },
  {
    id:7,
    imgSrc: img7,
    destTitle:'Angkor Wat',
    location:'Combodia',
    grade:'CULTURAL RELAX ',
    fees:'$790',
    description:'Angkot wat represents the entire range of Khmer art from the 9th to 15th century This temple is considered the heart and soul of Combodia This place is known for its Luxurious stays and adventurous activities. '
  },
  {
    id:8,
    imgSrc: img8,
    destTitle:'Taj Mahal',
    location:'India',
    grade:'CULTURAL RELAX ',
    fees:'$900',
    description:'An immense masoleum of white marble built in Agra by Mughal emperor Shah Jahan in memory of his wife Mumtaz, the monument is breathtakingly beautiful This place is known for its Luxurious stays and adventurours activities. '
  },
  {
    id:9,
    imgSrc: img9,
    destTitle:'Bali Island',
    location:'Indonesia',
    grade:'CULTURAL RELAX ',
    fees:'$500',
    description:'Bali is an Indonesian Island and one of the best holiday destinations in the Indonesian archipelago. Bali is known for its volcanic mountains, history, art & culture food, temples and beautiful sandy beaches. '
  },
]
const Main = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])




  console.log("Main component")
  return (
    <section className='main container section'>
      <div className='secTitle'>
        <h3 data-aos="fade-right" className='title'>
          Most Viewed Destinations
        </h3>
      </div>
      <div className='secContent grid'>
        {
          Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
            return(
              <div key={id} data-aos="fade-up" className='singleDestination'>
                  <div className='imageDiv'>
                    <img src={imgSrc} alt={destTitle}></img>
                  </div>
                  <div className='cardInfo'>
                    <h4 className='destTitle'>{destTitle}</h4>
                    <span className='continent flex'>
                      <HiOutlineLocationMarker className='icon'/>
                      <span className='name'>{location}</span>
                    </span>
                    <div className='fees flex'>
                      <div className='grade'>
                        <span>{grade}<small>+1</small></span>
                      </div>
                      <div className='price'>
                        <h5>{fees}</h5>
                      </div>
                    </div>
                    <div className='desc'>
                      <p>{description}</p>
                    </div>
                    <button className='btn flex'>
                      DETAILS <HiOutlineClipboardCheck className='icon'/>
                    </button>
                  </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Main;
