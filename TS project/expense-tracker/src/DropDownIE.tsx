import { useState } from "react";

const DropdownInputIE: React.FC = () =>{

    const option: string[] =  ['Income','Expense'];

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>('');

    const toggleDropDown = () =>{
        setIsOpen(!isOpen);
    };

    const selectOption = (option: string) =>{

    }

}
export default DropdownInputIE