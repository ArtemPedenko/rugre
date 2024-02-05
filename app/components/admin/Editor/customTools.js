import { sendImage, sendFile } from "@/app/utils/services/fileService";
import { transliterate } from "@/app/utils/services/fileName";

class ImageName {
  static get toolbox() {
    return {
      title: "Image",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 -960 960 960"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm40-80h480L570-480 450-320l-90-120-120 160Zm-40 80v-560 560Z"/></svg>',
    };
  }

  constructor({ data }) {
    this.data = data;
  }

  render() {
    const wrapper = document.createElement("div");
    const input = document.createElement("input");
    const inputFile = document.createElement("input");
    const button = document.createElement("button");
    const buttonSwitch = document.createElement("button");
    const altInput = document.createElement("input");
    const altError = document.createElement("div");

    wrapper.classList.add("simple-image");
    wrapper.appendChild(input);
    /*   wrapper.appendChild(button); */
    wrapper.appendChild(buttonSwitch);

    inputFile.type = "file";
    altError.classList.add("error-text");
    altError.textContent = "Введите alt";
    altInput.placeholder = "введите alt";
    button.classList.add("button-upload");
    buttonSwitch.classList.add("button-upload");
    button.innerHTML = "загрузить";
    buttonSwitch.innerHTML = "хочу загрузить файл";
    input.placeholder = "Paste an image name...";
    input.value = this.data && this.data.url ? this.data.url : "";
    button.addEventListener("click", async function () {
      if (input.files.length < 1 || altInput.value.length < 1) {
        wrapper.appendChild(altError);
      } else {
        let formData = new FormData();
        const originalFile = input.files[0];
        const newFileName = transliterate(originalFile.name);
        const updatedFile = new File([originalFile], newFileName, {
          type: originalFile.type,
          lastModified: originalFile.lastModified,
        });
        formData.append("file", updatedFile);
        formData.append("alt", altInput.value);
        const result = await sendImage(formData);
        input.type = "text";
        input.value = result.name;
        wrapper.removeChild(button);
        wrapper.removeChild(altInput);
      }
    });
    altInput.addEventListener("input", function () {
      if (wrapper.contains(altError)) {
        wrapper.removeChild(altError);
      }
    });
    buttonSwitch.addEventListener("click", function () {
      input.type = "file";
      wrapper.appendChild(button);
      wrapper.removeChild(buttonSwitch);
      wrapper.appendChild(altInput);
    });
    return wrapper;
  }

  save(blockContent) {
    const input = blockContent.querySelector("input");

    return {
      url: input.value.trim(),
    };
  }

  validate(savedData) {
    if (!savedData.url.trim()) {
      return false;
    }

    return true;
  }
}

class FileName {
  static get toolbox() {
    return {
      title: "File",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 -960 960 960" ><path d="M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"/></svg>',
    };
  }

  constructor({ data }) {
    this.data = data;
  }

  render() {
    const wrapper = document.createElement("div");
    const input = document.createElement("input");
    const button = document.createElement("button");
    const buttonSwitch = document.createElement("button");

    wrapper.classList.add("simple-image");
    wrapper.appendChild(input);
    wrapper.appendChild(buttonSwitch);

    button.classList.add("button-upload");
    buttonSwitch.classList.add("button-upload");
    button.innerHTML = "загрузить";
    buttonSwitch.innerHTML = "хочу загрузить файл";

    input.placeholder = "Paste an file name...";
    input.value = this.data && this.data.url ? this.data.url : "";

    button.addEventListener("click", async function () {
      let formData = new FormData();

      const originalFile = input.files[0];
      const newFileName = transliterate(originalFile.name);
      const updatedFile = new File([originalFile], newFileName, {
        type: originalFile.type,
        lastModified: originalFile.lastModified,
      });
      formData.append("file", updatedFile);
      const result = await sendFile(formData);
      input.type = "text";
      input.value = result.name;
      wrapper.removeChild(button);
    });

    buttonSwitch.addEventListener("click", function () {
      input.type = "file";
      wrapper.appendChild(button);
      wrapper.removeChild(buttonSwitch);
    });

    return wrapper;
  }

  save(blockContent) {
    const input = blockContent.querySelector("input");

    return {
      url: input.value.trim(),
    };
  }

  validate(savedData) {
    if (!savedData.url.trim()) {
      return false;
    }

    return true;
  }
}

export { ImageName, FileName };
