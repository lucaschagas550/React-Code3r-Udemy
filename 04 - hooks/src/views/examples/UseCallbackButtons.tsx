import React from "react";

interface UseCallbackButtonsProps {
    incr: (delta: number) => void;
}

const UseCallbackButtons = ({ incr } : UseCallbackButtonsProps) => {
    console.log("render....");

    return (
        <div>
            <button className="btn" onClick={() => incr(6)}>
                +6
            </button>
            <button className="btn" onClick={() => incr(12)}>
                +12
            </button>
            <button className="btn" onClick={() => incr(18)}>
                +18
            </button>
        </div>
    );
};

export default React.memo(UseCallbackButtons);


