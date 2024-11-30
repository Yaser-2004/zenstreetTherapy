import Image from "next/image"

const Credential = (props) => {
  return (
    <div className="credential flex items-center font-sans mb-5">
      <Image alt="" src={props.image} className="w-6" />
      <p className="text-slate-600 ml-3 text-lg">{props.text}</p>
    </div>
  )
}

export default Credential
