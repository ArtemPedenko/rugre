class ImageName {
  static get toolbox() {
    return {
      title: "Image Name",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 -960 960 960" width="24"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm40-80h480L570-480 450-320l-90-120-120 160Zm-40 80v-560 560Z"/></svg>',
    };
  }

  constructor({ data }) {
    this.data = data;
  }

  render() {
    const wrapper = document.createElement("div");
    const input = document.createElement("input");

    wrapper.classList.add("simple-image");
    wrapper.appendChild(input);

    input.placeholder = "Paste an image name...";
    input.value = this.data && this.data.url ? this.data.url : "";
    //console.log(wrapper);
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
      title: "File Name",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 -960 960 960" width="24"><path d="M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"/></svg>',
    };
  }

  constructor({ data }) {
    this.data = data;
  }

  render() {
    const wrapper = document.createElement("div");
    const input = document.createElement("input");

    wrapper.classList.add("simple-image");
    wrapper.appendChild(input);

    input.placeholder = "Paste an file name...";
    input.value = this.data && this.data.url ? this.data.url : "";

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
