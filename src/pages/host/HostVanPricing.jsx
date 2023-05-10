import React from 'react'
import { useOutletContext } from 'react-router-dom'

const HostVanPhotos = () => {
    const { currentVan } = useOutletContext()
    return (
    <section>
        <h3 className='host-van-price'><span>${currentVan.price}/day</span></h3>
        
    </section>
  )
}

export default HostVanPhotos