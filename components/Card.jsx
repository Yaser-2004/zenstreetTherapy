"use client";

import Image from "next/image"
import therapist_image from '../public/image/therapist_image.png'
import share_black from '../public/icons/share-black.png'
import location from '../public/icons/location.png'
import verified from '../public/icons/verified.png'
import share_blue from '../public/icons/share.png'
import { useAppContext } from '../app/context/AppContext';


const Card = () => {

  const { shareClick, setShareClick } = useAppContext();

  return (
    <div className="Card bg-white rounded-lg p-8 pt-10 max-w-96 text-center font-sans relative">
      <Image alt="" src={therapist_image} className="w-2/3 mr-auto ml-auto"/>
      <div className="flex items-center justify-center mt-4">
        <p className="text-lg font-bold ml-2 mr-2">Swetha Verma</p>
        <Image alt="" src={verified} className="w-6" />
      </div>
      <p className="text-gray-400 mb-2 mt-1">Consultant Clinical Psychologist</p>
      <p className="font-bold text-sm mb-4">10+ Years of experience</p>
      <p className="text-xs"><span className="font-bold">Starts at </span> <span className="font-bold text-lg">1,200</span> <span className="text-gray-400 font-bold">/Session</span></p>
      <div className="flex items-center justify-center mt-4">
        <Image alt="" src={location} className="w-6" />
        <p className="text-sm text-gray-400 ml-2">Block A2, Delhi</p>
      </div>

      <Image alt="" src={share_blue} className="w-4 absolute right-8 top-8 hover:cursor-pointer" onClick={() => {setShareClick(true)}} />
    </div>
  )
}

export default Card
