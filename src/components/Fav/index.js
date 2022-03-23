import React, {useState} from 'react'
import useUser from 'hooks/useUser'
import { useLocation } from 'wouter'
import Modal from 'components/Modal'
import Login from 'components/Login'
import './Fav.css'

export default function Fav({ id }) {
    const { isLogged, addFav, favs } = useUser();
    const [, navigate] = useLocation();
    const [showModal, setShowModal] = useState(false);

    const isFaved = favs.some(favID => favID === id)

    const handleClick = () => {
        if(!isLogged) return setShowModal(true)
        addFav({ id })
    }

    const handleClose = () => {
        setShowModal(false)
    }

    const [
        label,
        emoji
    ] = isFaved
            ? ['Remove Gif from favorites', 'X']
            : ['Add Gif to favorites', '<3']

    return (
        <>
            <button onClick={handleClick} className='gf-Fav'>
                <span aria-label='Fav Gif' role='img'> ❤️</span>
            </button>
            {showModal && <Modal onClose={handleClose}><Login/></Modal>}
        </>
    )
    
}