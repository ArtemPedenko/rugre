import { useEffect, useState } from "react";

interface PopupProps {
  isOpen: boolean;
  onClose: Function;
  children: any;
}

export default function Popup({ isOpen, onClose, children }: PopupProps) {
  const [popupClass, setPopupClass] = useState("hidden");

  useEffect(() => {
    if (isOpen) {
      setPopupClass(
        "block absolute z-50 border border-black w-[300px] h-[300px] left-[200px]",
      );
      setTimeout(() => {
        onClose();
      }, 1000);
    } else {
      setPopupClass("hidden");
    }
  }, [isOpen]);

  return (
    <div className={popupClass}>
      <div className="">{children}</div>
    </div>
  );
}
