"use client";

import Image from 'next/image'
import leftArrow from '../public/icons/Frame 239.png'
import Card from './Card'
import { useRef, useState } from 'react';
import hat from '../public/icons/hat.png'
import certificate from '../public/icons/certificate.png'
import group from '../public/icons/group.png'
import license from '../public/icons/license.png'
import work from '../public/icons/work.png'
import home from '../public/icons/home.png'
import phone from '../public/icons/phone.png'
import arrowDown from '../public/icons/arrowDown.png'
import cross from '../public/icons/cross.png'
import fb from '../public/icons/fb.png'
import wa from '../public/icons/wa.png'
import twitter from '../public/icons/twitter.png'
import mail from '../public/icons/mail.png'
import Credential from './Credential';
import Available from './Available';
import TherapyOffer from './TherapyOffer';
import Detail from './Detail';
import Testimonial from './Testimonial';
import Link from 'next/link';
import { Button, Input } from '@nextui-org/react';
import { useAppContext } from '../app/context/AppContext';

const Therapy = () => {

const { shareClick, setShareClick } = useAppContext();

const [expanded, setExpanded] = useState(false);
const contentRef = useRef(null);

const [number, setNumber] = useState(false);

const offers = ['Stress Management', 'Relationship Skills', 'Anxiety Reduction', 'Depression Relief', 'Behavioral', 'Trauma Healing'];
const testimonials = ['"The guidance I received helped me manage my stress and live a more balanced life."', '"Therapy helped me build self-esteem and confidence that I never thought possible."'];
const repeatedItems = Array.from({ length: number ? 8 : 2 }, (_, index) => testimonials[index % testimonials.length]);

  return (
    <div className="Therapy flex relative">
      {/* left */}
      <div className="left1 flex-auto w-1/3 h-screen p-10"></div>
      <div className="left flex-auto w-1/3 h-screen p-10 fixed">
        <div className='flex items-center mb-10'>
            <Image src={leftArrow} className='w-8 h-8 mr-2' alt='' />
            <p className='text-white text-lg'>Back</p>
        </div>

        <div className='flex justify-center flex-col items-center'>
            <Card />
            <Link className='rounded-full bg-white text-blue-500 w-96 h-14 mt-14 font-semibold font-sans flex justify-center items-center' href={'/sessions'}>Book Session</Link>
        </div>
      </div>

      {/* right */}
      <div className="right flex-auto w-2/3 h-screen pt-20 pl-16 pr-20 font-sans">
        {/* about me */}
        <div>
            <p className='font-semibold text-2xl mb-6'>About Me</p>
            <div className='text-lg text-slate-600 relative'>
                <p>
                Hello, I'm Swetha, a licensed therapist dedicated to guiding individuals through life's challenges with empathy and expertise. With over 4 years of experience, I specialize in helping clients manage anxiety, depression, and relationship issues through personalized, evidence-based practices.
                </p>
                <div
                    ref={contentRef}
                    className={`transition-all duration-1000 ease-in-out overflow-hidden ${expanded ? 'max-h-[1000px]' : 'max-h-0'}`}
                >
                    <p className="mt-10">
                        My commitment to continuous learning keeps me updated with the latest therapeutic techniques, allowing me to provide the best possible care. Whether you seek stress management strategies or personal growth, I am here to empower you on your journey towards emotional well-being. I offer convenient online consultation bookings, making it easier for you to take the first step towards a healthier, happier life.
                    </p>
                </div>
                <span className='absolute right-6 hover:underline text-blue-500 text-base hover:cursor-pointer -mt-6' onClick={() => setExpanded(!expanded)}>{expanded? "Show Less" : "Read More"}</span>
            </div>
        </div>

        {/* credentials */}
        <div className='mt-20'>
            <p className='font-semibold text-2xl mb-6'>Credentials</p>
            <Credential image={hat} text="Ph.D. in Clinical Psychology - Harvard University" />
            <Credential image={hat} text="M.A. in Counseling - University of California, Berkeley" />
            <Credential image={license} text="Licensed Professional Counselor (LPC) - State of DEF" />
            <Credential image={certificate} text="Certified Cognitive Behavioral Therapist (CBT)" />
            <Credential image={group} text="Member, American Psychological Association (APA)" />
            <Credential image={work} text="10+ years of experience in individual and group therapy" />
        </div>

        {/* availabe */}
        <div className='mt-20'>
            <p className='font-semibold text-2xl mb-6'>Available On</p>
            <div className='flex'>
                <Available image={home} text="In-person" width="w-8" background="bg-blue-200" />
                <div className='w-10'></div>
                <Available image={phone} text="Video/ Voice call" width="w-6" background="bg-blue-200" />
            </div>
        </div>

        {/* therapy for */}
        <div className='mt-20'>
            <p className='font-semibold text-2xl mb-6'>I offer therapy for</p>
            <div className='flex flex-wrap gap-5'>
                {offers.map((offer, i) => {
                    return <TherapyOffer key={i} text={offer} />
                })}
            </div>
        </div>

        {/* region and language */}
        <div className='mt-20 flex gap-80'>
            <Detail text1="I am from" text2="Chennai, India" />
            <Detail text1="Languages" text2="English, Hindi" />
        </div>

        {/* testimonial */}
        <div className='pb-20'>
            <div className='font-semibold mt-20 text-2xl mb-6 flex items-end justify-between'>
                Client Testimonials 
                <div className='text-lg font-normal flex items-center'>
                    <span className='hover:underline hover:cursor-pointer' onClick={() => {setNumber(!number)}}>
                        {!number ? "Show More" : "Show Less" }
                    </span>
                    <Image alt='' src={arrowDown} className='w-4 rotate-180' />
                </div>
            </div>
            <div className='flex flex-wrap gap-20'>
                {repeatedItems.map((item, i) => {
                    return <Testimonial key={i} text={item} />
                })}
            </div>
        </div>
      </div>



      <div className={`${shareClick ? 'flex' : 'hidden' } h-full w-full fixed bg-black opacity-50 top-0 flex justify-center`}></div>
      <div className={`${shareClick ? 'block' : 'hidden' } share rounded-xl w-1/3 fixed z-10 bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-16 font-sans`}>
        <div className='flex justify-between items-center'>
            <p className='text-xl font-semibold'>Share</p>
            <Image alt='' src={cross} className='w-8 hover:cursor-pointer' onClick={() => {setShareClick(!shareClick)}} />
        </div>

        <div className='flex justify-between items-center mt-10'>
            <div className='flex flex-col justify-center items-center'>
                <Image alt='' src={fb} className='w-8 pb-2' />
                <p className='text-sm text-gray-400'>Facebook</p>
            </div>

            <div className='flex flex-col justify-center items-center'>
                <Image alt='' src={wa} className='w-8 pb-2' />
                <p className='text-sm text-gray-400'>WhatsApp</p>
            </div>

            <div className='flex flex-col justify-center items-center'>
                <Image alt='' src={twitter} className='w-8 pb-2' />
                <p className='text-sm text-gray-400'>Twitter</p>
            </div>

            <div className='flex flex-col justify-center items-center'>
                <Image alt='' src={mail} className='w-8 pb-2' />
                <p className='text-sm text-gray-400'>Mail</p>
            </div>
        </div>

        <div className='mt-10 share_btn flex gap-6 items-center'>
            <Input type="email" placeholder='http://www.therapist-swetha.com/profile/view' size='lg' />
            <Button color='primary' radius='full' >Copy Link</Button>
        </div>
      </div>
    </div>
  )
}

export default Therapy
