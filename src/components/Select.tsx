import React, { useState } from 'react'
import {BiDownArrow} from 'react-icons/bi'


interface SelectOption {
    label:string;
    value:number;
}


interface SelectProps {
    options: SelectOption[];
    value?: SelectOption;
    onChange:(value:SelectOption | undefined) => void
}

const Select = ({value,onChange,options}:SelectProps) => {
   
  const [isOpen,setOpen] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isSelected,setSelected] = useState()

  function clearOptions(){
    onChange(undefined);
  }

  function selectOptionFunc(option:SelectOption){
    if(option !== value) onChange(option);
  }

  function isOptionSelected(option:SelectOption){
    return option === value
  }
  
  return (
   <>
   <div 
   onBlur={()=> setOpen(false)}
   onClick={()=> setOpen(prev => !prev)}
   className=' min-h-[1.5em] w-[20em] relative border border-slate-600 flex items-center gap-4 p-2 outline-none focus:border-cyan-400'>
    <span className='flex-grow'>{value?.label}</span>
    <button
    onClick={e =>{
      e.stopPropagation();
      clearOptions();
    }}
    className=' bg-none text-gray border-none outline-none cursor-pointer p-1 text-xl hover:bg-slate-700' style={{ top: 'calc(100% + 0.25em)' }}>&times;</button>
    <div className='bg-slate-700 self-stretch w-0.5'></div>
    <div className='cursor-pointer'>
      <BiDownArrow/>
    </div>
    <ul className={`absolute list-none m-0 p-0  max-h-[15em] overflow-y-auto top-calc border w-full z-50 ${isOpen?"block":"hidden"}`}>
      {
        options.map((option,index) => (
          <li key={option.value}
          onClick={e=> {e.stopPropagation()
          selectOptionFunc(option)
          setOpen(false)
        }}
          className={`text-black cursor-pointer  ${index === isSelected? "":"hover:bg-cyan-400"} ${isOptionSelected(option) ? 'bg-cyan-600':''}`}>{option.label}</li>
        ))
      }
    </ul>
   </div>
    
   </>
  )
}

export default Select
