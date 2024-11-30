"use client"

import Image from "next/image"
import date from "../public/icons/date.png"
import {Button, Input} from "@nextui-org/react";
import CustomCheck from "./CustomCheck";
import Link from "next/link";
import blackArrow from '../public/icons/blackArrow.png'


const BookingConfirm = () => {

    function getRandomNumber() {
        return Math.floor(Math.random() * 10) + 1;
    }

    const random = getRandomNumber();
    let confirm = true;
    if (random%2 != 0) {
        confirm = false;
    }

    let finalPage = "";
    if (confirm) {
        finalPage = "/confirmed";
    } else {
        finalPage = "/failed";
    }

    return (
      <div className="booking flex justify-center ml-20 mr-20 pt-16 pb-20 font-sans">
        <Link href={"/mode"} className='absolute top-10 left-20'><Image alt="" src={blackArrow} className="w-6" /></Link>
        <div className="rounded-xl shadow-xl w-1/2">
            <div className="top rounded-t-xl bg-blue-400 p-6 text-white flex items-center justify-between">
                <div className="text-center w-40 flex flex-col items-center">
                    <Image alt="" src={date} className="w-6" />
                    <p className="text-xs">Change date</p>
                    <p className="text-xl">Sat, 06 Aug</p>
                    <p className="text-sm">3:30 PM - 4:20 PM</p>
                </div>

                <div className="pr-4">
                    <p className="text-xl font-semibold">₹ 2,400/-</p>
                </div>
            </div>

            <div className="down rounded-b-xl pt-10 pb-10 pr-14 pl-14">
                <div className="flex gap-10">
                    <Input type="email" label="First Name" />
                    <Input type="email" label="Last Name" />
                </div>
                <Input type="email" label="Email" className="mt-6" />
                <Input type="email" label="+91 00000 00000" className="mt-6" />
                <p className="text-xs text-gray-400 pt-2 pl-1">i. You will receive booking details on WhatsApp</p>

                <p className="mt-8 text-xl font-semibold mb-2">Have you been referred by your employer?</p>
                <CustomCheck />
                <div className="flex items-center gap-8  mt-4 verification">
                    <Input type="email" label='"Partnering Company Name" or "Company ID"' />
                    <Button color="primary" radius="md" >Verify</Button>
                </div>

                <div className="mt-20">
                    <Link onClick={() => getRandomNumber()} href={finalPage} className="rounded-xl text-white bg-blue-500 font-semibold text-lg flex w-full h-12 justify-center items-center">Book Session</Link>
                </div>
            </div>
        </div>
      </div>
    )
  }
  
  export default BookingConfirm