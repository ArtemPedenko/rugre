import Paragraph from "@editorjs/paragraph";
import Header from "@editorjs/header";
import Link from "@editorjs/link";
import Code from "@editorjs/code";

export const EDITOR_TOOLS = {
  header: {
    class: Header,
    config: {
      placeholder: "Enter a Header",
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
  link: {
    class: Link,
    config: {
      placeholder: "enter file name",
    },
  },
  code: {
    class: Code,
    config: {
      placeholder: "enter image name",
    },
  },
};
