"use client";
import Popup from "@/app/components/admin/Popup";
import { useState } from "react";
import Button from "@/app/components/admin/Button";

export default function PageEditor() {
  const [open, setOpen] = useState(false);

  function handler() {
    setOpen(!open);
  }

  return (
    <>
      <div>admin page</div>
      <Popup isOpen={open} onClose={handler}>
        ololo
      </Popup>
      <Button onClick={() => handler()}>popup</Button>
    </>
  );
}
export const revalidate = 0;
