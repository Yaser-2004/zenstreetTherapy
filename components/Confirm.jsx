import Link from "next/link"

const Confirm = () => {
  return (
    <div className="confirmed m-20 flex justify-center">
        <div className="flex flex-col justify-center items-center text-center font-sans w-1/2">
            <p className="text-3xl font-semibold mb-6">Booking Confirmed!</p>
            <p className="text-gray-400 mb-20">Congratulations! Your therapy session has been successfully scheduled. We're looking forward to helping you on your journey to better mental health.</p>

            <p className="italic mb-4 text-left w-full">i. Instructions</p>
            <ul className="text-left text-sm font-semibold list-disc mb-20">
                <li className="mb-2">A confirmation email with all the session details has been sent to amal123@gmail.com</li>
                <li>If this is your first session, consider jotting down any key points or questions you want to discuss.</li>
            </ul>

            <Link className="flex justify-center items-center h-12 text-white bg-blue-500 w-full rounded-xl" href={"/"} >Back To Home</Link>
        </div>
    </div>
  )
}

export default Confirm
