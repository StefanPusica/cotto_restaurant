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
    <div className='Gallery' id='Gallery'>
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
                    
                    {/* <img src='https://previews.dropbox.com/p/thumb/ABgBaGhGerma3liZDobJYDhZ5Y2b2X7_qgWFQ89ieGOfQJ4Cc2kBdIQojFpobw_05W5si1u6h4RaAETLIKM1y4-Pb6vVOtGmZ0LMlOIXFjHI0v_zgJE_b43UfM0s6lD_O1epmOrBjv6rYppZOqaSv_rxBpbluE2yM9KE4LwxoV-aqHiXxqCAcYcs-zUmV_wy45l-QOZQIpX2oAN_sUE8dVDy41hXXolgmMLrvP5MKTSzh89hKz1qzIcYj-4imG0rf0Iftoj9uSH30M40LHHkOjq9BmtQUJ1QNbmZKOAjMBIL5KEc-UtG_a7d1rKz9dLks1hfut3sh7nsBEAG_pyN9Ni__aS0HNucDXrkOEbbRpMzCyr0bl-rzd7G3OXYtwiPeIERSPq5bOdRm37nxt833F6uI4GxE3JC_rSwZHlUY7Zx9flQzVgI0kSYmyzPYUQYfsWsbPLy0mOEiysKrT9YFwgaVjVenqxRl2sG0NIU9ZlsuLRHSPp3xhCQTIuh8RB7ga8lhOiOqc7XatN_Fl_auOc-JJriaJzQXjbc05-UFO2KY3B5PHpG_vsnZlZrwZtwTz_R7zMCwVCAkAi79yuotVYcnLJkUedQA_soUdPNU7SicyWyZOfXFZ5G05_xoa31CrM/p.jpeg' alt='#' /> */}
                </div>
            </Swiper>
          </div>
      </div>
  )
}

export default Gallery