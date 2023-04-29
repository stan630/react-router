import React, { useEffect} from 'react'
// useParams allow us to grab parameters in the URL
import { useParams } from 'react-router-dom'

const VanDetail = () => {
    const params = useParams()
    
    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
          .then(res => res.json())
          .then(data => console.log(data))
      }, [params.id]);
  return (
    <h1>Van Detail Page Goes Here!</h1>
  )
}

export default VanDetail