import { useState} from "react";

const DropdownInputIE: React.FC = () =>{

    const options: string[] =  ['Income','Expense'];

    // check if the options are opened, default is false
    const [isOpen, setIsOpen] = useState<boolean>(false);
    //store the selected option value
    const [inputValue, setInputValue] = useState<string>('');
  

    const toggleDropDown = () =>{
        setIsOpen((pre) => !pre);
    };

    const selectOption = (option: string) => {
        setInputValue(option);
        setIsOpen(false);
    }
    
  
      return (
        <div className="input-container">
          <input
            type="text"
            className="input-field"
            placeholder="Click to see options"
            value={inputValue}
            onClick={toggleDropDown}
            onChange={(e) => setInputValue(e.target.value)}
          />
          {isOpen && (
            <div className="dropdown">
              {options.map((option, index) => (
                <div
                  key={index}
                  className="dropdown-option"
                  onClick={() => selectOption(option)}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      );
};

export default DropdownInputIE