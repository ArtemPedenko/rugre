import Paragraph from "@editorjs/paragraph";
import Header from "@editorjs/header";
import { FileName, ImageName } from "./customTools";

export const EDITOR_TOOLS = {
  header: {
    class: Header,
    config: {
      placeholder: "Enter a Header",
      inlineToolbar: true,
      levels: [2, 3, 4],
      defaultLevel: 2,
    },
  },
  paragraph: {
    class: Paragraph,
    config: {
      placeholder: "enter paragraph",
    },
  },
  image: {
    class: ImageName,
  },
  file: {
    class: FileName,
  },
};
