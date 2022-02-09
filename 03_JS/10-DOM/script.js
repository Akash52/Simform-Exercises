//DOM (Document object Model)

//Single Element Selector
console.log(document.getElementById("my-form"));
console.log(document.querySelector("h1"));

//Multiple Element Selector

console.log(document.querySelectorAll(".item"));

//Work with Event

const btn = document.querySelector(".btn");
btn.style.background = "green";
btn.style.color="white";

btn.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("#my-form").style.background = "#ccc";
  console.log("click");
});
