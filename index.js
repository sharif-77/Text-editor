document.getElementById("bold").addEventListener("click", () => {
  let textarea = document.getElementById("textField");
  textarea.classList.toggle("font-bold");
  console.log(textarea.classList);
  // textarea.style.fontWeight = "bolder";
  // if (textarea.classList.contains('font-bold')) {
  //   textarea.classList.remove('font-bold')
  // }else{
  //   textarea.classList.add('font-bold')

  // }
});

document.getElementById("italic").addEventListener("click", () => {
  let textarea = document.getElementById("textField");
  textarea.classList.toggle("italic");

  // textarea.style.fontStyle = "italic";
});
document.getElementById("underline").addEventListener("click", () => {
  let textarea = document.getElementById("textField");
  textarea.classList.toggle("underline");

  // textarea.style.textDecoration ="underline";
});
document.getElementById("left").addEventListener("click", () => {
  let textarea = document.getElementById("textField");
  textarea.classList.toggle("text-left");

  // textarea.style.textAlign = "left";
});
document.getElementById("center").addEventListener("click", () => {
  let textarea = document.getElementById("textField");
  textarea.classList.toggle("text-center");

  // textarea.style.textAlign = "center";
});
document.getElementById("right").addEventListener("click", () => {
  let textarea = document.getElementById("textField");
  textarea.classList.toggle("text-right");

  // textarea.style.textAlign = "right";
});
document.getElementById("justify").addEventListener("click", () => {
  let textarea = document.getElementById("textField");
  textarea.classList.toggle("text-justify");

  // textarea.style.textAlign = "justify";
});
document.getElementById("fontSizeNumber").addEventListener("input", (event) => {
  let fontSizeString = event.target.value;
  let fontsize = parseFloat(fontSizeString);
  let textarea = document.getElementById("textField");
  textarea.style.fontSize = fontsize + "px";
});

const toggleButton = document.getElementById("textCase");
const textInput = document.getElementById("textField");
let isUppercase = false;
toggleButton.addEventListener("click", function () {
  const text = textInput.value;
  const toggledText = isUppercase ? text.toLowerCase() : text.toUpperCase();
  textInput.value = toggledText;
  isUppercase = !isUppercase;
});

document.getElementById("colorField").addEventListener("input", (event) => {
  const selectedColor = event.target.value;
  console.log(selectedColor);
  let textarea = document.getElementById("textField");
  textarea.style.color = selectedColor;
});
