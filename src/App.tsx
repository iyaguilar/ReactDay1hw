import React from "react";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import Alert from "./components/Alert"; // Remove the leading slash

function App() {
  let items = [
    'San Diego',
    'Los Angeles',
    'Phoenix',
    'Tucson',
    'Yuma'
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <Alert />
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
      <Button onClick={() => console.log('Clicked')}>My Button</Button>
    </div>
  );
}

export default App;




