import Image from "next/image"
import invComma from '../public/icons/invComma.png'


const Testimonial = (props) => {
  return (
    <div className="Testimonial rounded-2xl font-sans p-10 shadow-xl">
      <Image alt="" src={invComma} className="w-12 mb-3" />
      <p className="text-lg font-semibold w-72 text-center mb-10">{props.text}</p>
      <p className="text-lg font-semibold">Anonymous</p>
    </div>
  )
}

export default Testimonial
