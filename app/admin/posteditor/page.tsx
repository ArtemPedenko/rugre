// @ts-nocheck
"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { ImageName } from "./Editor/customTools";

const Editor = dynamic(() => import("./Editor/Editor"), {
  ssr: false,
});
function addDiv(text) {
  const codexEditor = document.querySelector(".codex-editor__redactor");

  const newElement = document.createElement("div");
  newElement.className = "ce-block";
  newElement.setAttribute("data-id", `R73M5GBiyE`);

  const contentDiv = document.createElement("div");
  contentDiv.className = "ce-block__content";

  const innerDiv = document.createElement("div");
  innerDiv.className = "simple-image";

  const inputElement = document.createElement("input");
  inputElement.value = text;

  innerDiv.appendChild(inputElement);
  contentDiv.appendChild(innerDiv);
  newElement.appendChild(contentDiv);

  codexEditor.appendChild(newElement);
}

const dataImg = {
  time: 1556098174501,
  blocks: [
    {
      type: "paragraph",
      data: {
        text: "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text.",
      },
    },
  ],
};

export default function PageEditor() {
  const [data, setData] = useState(dataImg);
  function adddd() {
    const newData = data;
    newData.blocks.push({
      type: "paragraph",
      data: {
        text: "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text.",
      },
    });
    const img = new ImageName({ data: newData });
    //img.render();
    //setData(img);
  }

  return (
    <div>
      <Editor data={data} onChange={setData} holder="editorjs-container" />
      <button
        onClick={() => console.log(data)}
        className="border border-color-black w-[150px] h-[50px]"
      >
        console log content data
      </button>
      <button
        onClick={() => adddd()}
        className="border border-color-black w-[150px] h-[50px]"
      >
        вставить новыый
      </button>
    </div>
  );
}
