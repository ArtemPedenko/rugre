import Paragraph from "@editorjs/paragraph";
import Header from "@editorjs/header";
import { FileName, ImageName, Video } from "./customTools";

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
      inlineToolbar: true,
    },
  },
  image: {
    class: ImageName,
  },
  file: {
    class: FileName,
  },
  video: {
    class: Video,
  },
};
