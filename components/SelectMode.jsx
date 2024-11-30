import Image from "next/image"


const SelectMode = (props) => {
  return (
    <div className="Selectmode flex justify-center items-center rounded-xl hover:border hover:border-blue-200 w-20 h-20">
      <Image alt="" src={props.image} className={props.width} />
    </div>
  )
}

export default SelectMode
