
import Image from 'next/image'
import home from '../public/icons/home.png'
import phone from '../public/icons/phone.png'
import video from "../public/icons/video.png"
import location from '../public/icons/location.png'
import SelectMode from './SelectMode'
import {Button} from "@nextui-org/react";
import TimeButton from './TimeButton'
import CustomCalendar from './CustomCalendar'
import Link from 'next/link'
import blackArrow from '../public/icons/blackArrow.png'


const TherapyModes = () => {
  return (
    <div className="TherapyModes font-sans pt-10">
      <Link href={"/sessions"} className='absolute top-10 left-20'><Image alt="" src={blackArrow} className="w-6" /></Link>
      <p className="text-xl text-center font-semibold">Select therapy mode</p>
      <div className='flex justify-center mb-20'>
        <div className='flex flex-col items-start'>
            <div className="flex gap-20 items-center justify-center text-blue-500 font-semibold mt-10">
                <div className='flex flex-col items-center'>
                    <SelectMode image={home} width="w-8" />
                    <p>In-person</p>
                </div>
                <div className='flex flex-col items-center'><SelectMode image={video} width="w-8"  /><p>Video</p></div>
                <div className='flex flex-col items-center'><SelectMode image={phone} width="w-6" /><p>Call</p></div>
            </div>

            <div className='flex gap-2 items-center mt-8 '>
                <Image src={location} alt='' className='w-6' />
                <p className='text-gray-400 text-sm'>3rd Floor, A2, 35, Block A2, Delhi</p>
            </div>
        </div>
      </div>


      {/* filter by */}
      <div className='mb-20'>
        <p className='text-xl font-semibold pl-20'>Filter by</p>
        <div className='flex gap-8 justify-center'>
            <Button color='default' variant='bordered' radius='full' size='md' className='button_slot'>Slots</Button>
            <Button color='default' variant='bordered' radius='full' size='md' className='button_slot'>Date</Button>
        </div>
      </div>


      {/* slot selection */}
      <div className='flex gap-20 time_buttons justify-between pl-20 mb-20'>
        <div className='morning '>
            <p className='text-sm font-semibold text-gray-500 pb-4'>Morning</p>
            <div className='flex flex-wrap gap-6'>
                <TimeButton time1="8:00" time2="8:45" ap="AM" />
                <TimeButton time1="8:00" time2="8:45" ap="AM" />
                <TimeButton time1="8:00" time2="8:45" ap="AM" />
                <TimeButton time1="8:00" time2="8:45" ap="AM" />
            </div>
        </div>
        <div className='afternoon'>
            <p className='text-sm font-semibold text-gray-500 pb-4'>Afternoon</p>
            <div className='flex flex-wrap gap-6'>
                <TimeButton time1="8:00" time2="8:45" ap="AM" />
                <TimeButton time1="8:00" time2="8:45" ap="AM" />
                <TimeButton time1="8:00" time2="8:45" ap="AM" />
                <TimeButton time1="8:00" time2="8:45" ap="AM" />
            </div>
        </div>
        <div className='evening '>
            <p className='text-sm font-semibold text-gray-500 pb-4'>Evening</p>
            <div className='flex flex-wrap gap-6'>
                <TimeButton time1="8:00" time2="8:45" ap="AM" />
                <TimeButton time1="8:00" time2="8:45" ap="AM" />
                <TimeButton time1="8:00" time2="8:45" ap="AM" />
                <TimeButton time1="8:00" time2="8:45" ap="AM" />
            </div>
        </div>
      </div>


      {/* calendar */}
      <div className='mb-20'>
        <CustomCalendar />
      </div>

      <div className='mode_proceed flex justify-center mb-40'>
        <Link className='bg-blue-500 flex justify-center items-center rounded-full text-white w-96 h-12' href={'/confirmation'}>Proceed</Link>
      </div>
      
    </div>
  )
}

export default TherapyModes
