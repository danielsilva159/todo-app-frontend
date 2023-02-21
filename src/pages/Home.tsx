import { Text, Input, Button, Row, Column, List } from "components"
import { useState } from "react"

export const Home = () =>{
  const [taskName, setTaskName] = useState('');
  const [tasks, setTasks] = useState<{label: string}[]>([]);
  const handleOkButton = () =>{
    if(!taskName) return;
    setTasks(previous => {
      const copy = [...previous];
      copy.push({label: taskName});
      return copy;
    })
    setTaskName('');
  }
  return(
      <Column width="600px" margin="0 auto">
        <Text fontWeight="bold" fontSize="bodyLarge" my="10px" paddingLeft="10px"> Tasks </Text>
        <Row width="100%">
          <Input placeholder="Enter a task name  here..." value={taskName} onChange={(e) => setTaskName(e.target.value)} flex="1" />
          <Button onClick={handleOkButton}>OK</Button>
        </Row>

        <List items={tasks} />
      </Column>
    
  )
}