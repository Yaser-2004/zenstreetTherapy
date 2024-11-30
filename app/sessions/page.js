import SessionCard from "@/components/SessionCard";
import Image from "next/image";
import blackArrow from '../../public/icons/blackArrow.png'
import Link from "next/link";

export default function Sessions() {
    return (
      <>
        <div className="mr-20 ml-20 font-sans">
            <div className="flex flex-col items-center">
                <div className="flex items-center gap-1 w-full pl-40">
                  <Link href={"/"}><Image alt="" src={blackArrow} className="w-6" /></Link>
                  <p className="mb-20 pt-20 font-semibold text-left">Available Sessions</p>
                </div>
                <div className="flex flex-row gap-10">
                    <SessionCard price="₹3,200" text="Group Therapy" />
                    <SessionCard price="₹3,200" text="Individual Therapy" />
                    <SessionCard price="₹3,200" text="Couple Therapy" />
                </div>
            </div>
        </div>
      </>
    );
  }