import Link from "next/link"


const Fail404 = () => {
  return (
    <div className="Fail404 flex items-center justify-center h-screen">
        <div className="mr-20 ml-20 flex justify-center items-center flex-col font-sans w-1/3">
            <p className="text-8xl font-bold text-blue-200 mb-8">404</p>
            <p className="text-4xl font-semibold text-cyan-500 mb-3">Oops! Page Not Found</p>
            <p className="text-gray-400 text-base text-center mb-8">It seems we can't find the page you're looking for, Let's get you back on track!</p>

            <Link className="flex justify-center items-center h-12 text-white bg-cyan-600 w-full rounded-xl" href={"/"} >Back To Home</Link>
        </div>
    </div>
  )
}

export default Fail404
