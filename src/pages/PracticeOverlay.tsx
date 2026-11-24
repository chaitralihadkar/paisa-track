import { useState } from "react";
import AddTransaction from "../components/AddTransaction";

function PracticeOverlay() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="h-screen flex justify-center items-center">
      <div onClick={()=>{setIsOpen(true)}}>Show</div>

      {isOpen && (
        <div className="fixed bg-black/50 z-10">
          hi
        </div>
      )}
    </div>
  );
}

export default PracticeOverlay;
