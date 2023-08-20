import React, { useState } from 'react'
import {BiDownArrow} from 'react-icons/bi'


export type SelectOption = {
    label:string;
    value: number;
}

type MultiSelectProps = {
    multiple: true;
    value: SelectOption[];
    onChange:(value:SelectOption[]) => void
}

type SingleSelectProps = {
    multiple?:false;
    value?: SelectOption;
    onChange:(value:SelectOption | undefined) => void
}


type SelectProps ={
    options: SelectOption[];
} &(SingleSelectProps | MultiSelectProps)

const Select = ({multiple,value,onChange,options}:SelectProps) => {
   
  const [isOpen,setOpen] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isSelected,setSelected] = useState()

  function clearOptions(){
    multiple? onChange([]): onChange(undefined)

  }

  function selectOptionFunc(option:SelectOption){
    if(multiple){
        if(value?.includes(option)){
            onChange(value.filter(val => val !== option))
        }
        else{
            onChange([...value,option])
        }
      
    }else{
        if(option !== value) onChange(option);
    }

    
  }

  function handleDisplay(){
    if(isOpen){
        setOpen(false)
    }
  }

  function isOptionSelected(option:SelectOption){
    return multiple? value.includes(option): option === value
  }
  
  return (
   <>
   <div
   
   className='min-h[1.5em] w-[100em] border-2 flex items-center p-2 '
   >
    <span className='flex-grow '>
     {
        multiple?(value.map(v => (
            <button
            className='px-2 border gap-5 ml-5'
            key={v.value}
            onBlur={()=> setOpen(false)}
            onClick={handleDisplay}
            >
                {v.label} <span onClick={e =>   selectOptionFunc(v)}>&times;</span>
            </button>
        ))):value?.label
     }
    </span>
    <button
    onClick={e =>{
      e.stopPropagation();
      clearOptions();
    }}
    className=' bg-none text-gray border-none outline-none cursor-pointer p-1 text-xl hover:bg-slate-700' style={{ top: 'calc(100% + 0.25em)' }}>&times;</button>
   </div>



   <div 
   onBlur={()=> setOpen(false)}
   onClick={()=> setOpen(prev => !prev)}
   className=' min-h-[1.5em] w-[20em] relative border border-slate-600 flex items-center gap-4 p-2 outline-none focus:border-cyan-400'>
    <span className='flex-grow'>Select option..</span>
    
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
