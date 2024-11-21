import React, { useState } from 'react';

const HeartButton:React.FC = () =>{
    const [isLike, setIsLike] = useState<boolean>(false);

    const handleClick = () => {
        setIsLike((prev) => !prev)
    };

    return(
        <div>
            <button onClick={handleClick}
                    style={{
                        fontSize: '24px',
                        border: 'none',
                        background: 'none',
                        cursor: 'pointer',
                    }}>
                        {isLike ? '❤️' : '🤍'}
            </button>
        </div>
    )
}   
export default HeartButton
