import { Button } from "@nextui-org/react"

const TimeButton = (props) => {
  return (
    <Button radius="full">{props.time1}-{props.time2} {props.ap}</Button>
  )
}

export default TimeButton
