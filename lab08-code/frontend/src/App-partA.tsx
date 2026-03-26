import { Card, Button, DatePicker, type DatePickerProps } from 'antd';
import 'antd/dist/reset.css';

import Hello from './components/Hello';
import Goodbye from './components/Goodbye';

function App() {

  let counter = 0
  const onClick = () => {
    console.log(counter++);
  };

  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <>
      <div>
        <Hello />
        <Card title="Card One" style={{ width: 300 }}>
          <p>Card content 1</p>
          <p>Card content 2</p>
          <p>Card content 3</p>
        </Card>
        <br/>
        <Button type="primary" onClick={onClick}>Button</Button>
        <Button type="primary" danger>Button</Button>
        <br/>
        <DatePicker onChange={onChange} />
        <br/>
        <Goodbye name="Everyone"/>

      </div>
    </>
  )
}

export default App