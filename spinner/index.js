var element = document.getElementById("mainbox");
function rotateFunction() {
  var min = 1024;
  var max = 9999;
  var deg = Math.floor(Math.random() * (max - min)) + min;
  document.getElementById("box").style.transform = "rotate(" + deg + "deg)";
}

document.getElementsByClassName("spin")[0].addEventListener("click", () => {
  rotateFunction();
  setTimeout(function () {
    element.classList.add("animate");
    calculater();
  }, 5000);
  element.classList.remove("animate");
});
const calculater = () => {
  const distance_from_arrow = [0, 0, 0, 0, 0, 0, 0, 0];
  const arrow = document.getElementsByClassName("arrow");
  const arrow_rect = arrow[0].getBoundingClientRect();
  const arrow_x = arrow_rect.left;
  const arrow_y = arrow_rect.top;
  let i = 0;
  for (const data of document.getElementsByClassName("sp")) {
    const rect = data.getBoundingClientRect();
    let x = rect.left;
    let y = rect.top;
    let distance = Math.sqrt(
      Math.pow(x - arrow_x, 2) + Math.pow(y - arrow_y, 2)
    );
    distance_from_arrow[i] = distance;
    i++;
  }
  let distance_min_value = Math.min(...distance_from_arrow);
  let index = distance_from_arrow.indexOf(distance_min_value);
  console.log(document.getElementsByClassName("sp")[index].innerHTML);
  console.log(distance_from_arrow);
};
