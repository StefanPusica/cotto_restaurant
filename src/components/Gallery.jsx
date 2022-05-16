import { useState, useEffect } from 'react'

import { getDoc, doc } from 'firebase/firestore'
import { db } from '../firebase.config'

import SwiperCore, {Navigation, Pagination, Scrollbar, A11y} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'

import './Gallery.css'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

// import ImgGallery1 from '../assets/hrana/g1.jpg'
// import ImgGallery2 from '../assets/hrana/g2.jpg'
// import ImgGallery3 from '../assets/hrana/g3.jpg'
// import ImgGallery4 from '../assets/hrana/g4.jpg'
// import ImgGallery5 from '../assets/hrana/g5.jpg'

// import images from '../constants/images'

// import { IoCloseOutline } from "react-icons/io5";

function Gallery() {

    const [loading, setLoading] = useState(true)
    const [listing, setListing] = useState(null)

    const dataId = 'V2nQzc0qSXYfpu1T2yCr'
    
    useEffect(() => {
        const fetchListings = async () => {
            const docRef = doc(db, 'listings', dataId)
            const docSnap = await getDoc(docRef)

            if (docSnap.exists()) {
                setListing(docSnap.data())
                setLoading(false)
            }
        }

        fetchListings()
    })

    if (loading) {
        return <img src='../assets/loader.gif' alt='#' />
    }

  return (
    <div className='Gallery'>
          <h1 className='page-heading' onClick={() => console.log(listing)}>Galerija</h1>
          <div className='gallery-holder'>
            <Swiper slidesPerView={1} pagination={{clickable: true}} className='swiper-holder'>
                <div className="call call-to-left">
                    <p className='drag drag-left'>Prevuci na levo</p>
                </div>   
                {listing.imgUrl.map((url, index) => (
                    <SwiperSlide key={index} className='gallery-slide'> 
                        <img src={`${listing.imgUrl[index]}`} alt='#' />
                    </SwiperSlide>
                ))}
                <div className="call call-to-right">
                    <p className='drag drag-right'>Prevuci na desno</p>
                </div>
            </Swiper>
          </div>
      </div>
  )
}

export default Gallery