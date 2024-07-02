import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPhotosTC } from '../../store/slices/photosReducer'

import './Photos.scss'

const Photos = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPhotosTC())
    }, [])

    const {photos, isFetching} = useSelector(state => state.photosData)
  return (
    <div className='photosWrapper'>
        {isFetching ? <h1>Loading...</h1> : photos.map(el =>(
           <div key={el.id} className='item'>
            <img src={el.url} alt="" />
            <p>{el.title}</p>
           </div>
        ))}
    </div>
  )
}

export default Photos