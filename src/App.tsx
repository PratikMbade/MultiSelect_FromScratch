import { useState } from "react";
// import Select from "./components/Select";
import MultiSelect, { SelectOption } from "./components/MultiSelect";

const options = [
  { label: "First", value: 1 },
  { label: "Secondt", value: 2 },
  { label: "Third", value: 3 },
  { label: "Fourth", value: 4 },
];

const App = () => {
  // const [value1, setValue1] = useState<SelectOption | undefined>(options[0]);
  const [value2, setValue2] = useState<SelectOption[]>([options[0]]);
  return (
    <>
      {/* <Select options={options} value={value1} onChange={(o) => setValue1(o)} /> */}
      <MultiSelect
        multiple
        options={options}
        value={value2}
        onChange={(o) => setValue2(o)}
      />
    </>
  );
};

export default App;
