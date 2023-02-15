import { Text, Input, Button } from "components"

export const Home = () =>{
  return(
    <div>
     <Text fontWeight="bold"> Tasks </Text>
     <Input placeholder="Enter a task name  here..." />
     <Button>OK</Button>
    </div>
  )
}