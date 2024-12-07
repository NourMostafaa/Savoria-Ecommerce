import React from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import { IoMdDownload } from "react-icons/io";
import './Download.css'
const Download = () => {
  return (
    <div className='download mt-5 text-center fw-bold fs-1' id='download'>
        <p className='mb-4'>Download Our App <IoMdDownload  /></p>
        <div className='download-links d-flex justify-content-center column-gap-5 flex-wrap row-gap-3'>
            <img src={assets.play_store} alt="" className='play-store'/>
            <img src={assets.app_store} alt="" className='app-store'/>
        </div>
    </div>
  )
}

export default Download