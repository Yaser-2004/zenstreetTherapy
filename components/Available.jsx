import Image from "next/image"


const Available = (props) => {
  return (
    <>
        <div className="flex flex-col items-center">
            <div className={`${props.background} 'Available rounded-xl p-10 mb-1 w-28 h-28 flex items-center justify-center'`}>
                <Image alt="" src={props.image} className={props.width} />
            </div>
            <p className="text-gray-500 text-base font-sans font-semibold">{props.text}</p>
        </div>
    </>
  )
}

export default Available
