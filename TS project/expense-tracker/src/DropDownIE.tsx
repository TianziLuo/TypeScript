import { useState, useRef, useEffect } from "react";

const DropdownInputIE: React.FC = () =>{

    const options: string[] =  ['Income','Expense'];

    // check if the options are opened, default is false
    const [isOpen, setIsOpen] = useState<boolean>(false);
    //store the selected option value
    const [inputValue, setInputValue] = useState<string>('');
    const dropdownRef = useRef(null);

    const toggleDropDown = () =>{
        setIsOpen(!isOpen);
    };

    const selectOption = (option: string) => {
        setInputValue(option);
        setIsOpen(false);
    }
    
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
          }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);
    
      return (
        <div className="input-container" ref={dropdownRef}>
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