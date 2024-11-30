import Link from "next/link"
import SessionTime from "./SessionTime"


const SessionCard = (props) => {
  return (
    <div className="SessionCard bg-blue-500 w-80 bg-gradient-to-b from-blue-500 to-blue-800 rounded-xl pb-4 pt-4 flex flex-col items-center font-sans">
        <p className="text-center text-white text-2xl mb-2 font-semibold">{props.price} <span className="text-slate-200 text-sm font-normal">/ session</span></p>
        <div className="flex gap-2 justify-center">
            <SessionTime time="45 min" />
            <SessionTime time="60 min" />
            <SessionTime time="90 min" />
        </div>
        <p className="pb-1 pt-8 mb-8 border-b borger-gray-200 w-fit font-semibold text-white text-lg">{props.text}</p>
        <ul className="ml-4 list-disc text-white text-xs">
            <li className="pb-3">Joint Evaluation</li>
            <li className="pb-3">Communication Exercises</li>
            <li className="pb-3">Conflict Resolution</li>
            <li className="pb-3">Goal Setting</li>
            <li className="pb-3">Follow to Plan</li>
        </ul>

        <Link className="rounded-full bg-white w-2/3 mt-10 mb-3 flex justify-center items-center h-12 text-blue-500 font-semibold" href={'/mode'}>Proceed</Link>
    </div>
  )
}

export default SessionCard
