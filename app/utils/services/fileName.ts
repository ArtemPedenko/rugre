function transliterate(text: string) {
  const russianLetters = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
  const englishTranslit = [
    "a",
    "b",
    "v",
    "g",
    "d",
    "e",
    "yo",
    "zh",
    "z",
    "i",
    "y",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "r",
    "s",
    "t",
    "u",
    "f",
    "kh",
    "ts",
    "ch",
    "sh",
    "shch",
    "",
    "y",
    "",
    "e",
    "yu",
    "ya",
  ];

  return text
    .toLowerCase()
    .split("")
    .map((char) => {
      const index = russianLetters.indexOf(char);
      if (index !== -1) {
        return englishTranslit[index];
      }
      return char;
    })
    .join("");
}

export { transliterate };
