
import { useState } from 'react';
import Select from './components/Select';

const options = [
  {label:'First', value:1 },
  {label:'Secondt', value:2 },
  {label:'Third', value:3 },
  {label:'Fourth', value:4 },
 
]

const App = () => {
  const [value,setValue] = useState<typeof options[0] | undefined>(options[0])
  return (
   <>
   <Select options={options} value={value} onChange={o => setValue(o)}/>
   </>
  );
}

export default App;
