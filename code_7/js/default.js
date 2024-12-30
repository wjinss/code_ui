let frame = document.querySelector("section");
let lists = document.querySelectorAll(".arc");
let prev = document.querySelector(".btnPrev");
let next = document.querySelector(".btnNext");
let num = 0;
let deg = 360 / lists.length;
let active = 0;
let len = lists.length - 1;

let rotateFn = function () {
  frame.style.transform = `rotate(${deg * num}deg)`;
  lists.forEach((list) => {
    list.classList.remove("on");
  });
};

lists[0].classList.add("on");
lists.forEach((list, i) => {
  list.style.transform = `rotate(${45 * i}deg) translateY(-90vh)`;
});
next.addEventListener("click", () => {
  num--;
  rotateFn();
  active === len ? (active = 0) : active++;
  lists[active].classList.add("on");
});

prev.addEventListener("click", () => {
  num++;
  rotateFn();
  active === 0 ? (active = len) : active--;
  lists[active].classList.add("on");
});

let modal = document.querySelector(".modal");
let close = document.querySelector(".btn_close");

lists.forEach((list) => {
  list.addEventListener("click", (e) => {
    let target = e.currentTarget;
    let tit = target.querySelector(".sub_tit").textContent;
    let imgSrc = target.querySelector(".thum").getAttribute("src");
    modal.style.opacity = `1`;
    modal.style.pointerEvents = "auto";
    modal.querySelector(".big_subtit").textContent = tit;
    modal.querySelector(".big_img>img").setAttribute("src", imgSrc);
  });
});

close.addEventListener("click", () => {
  modal.style.opacity = `0`;
  modal.style.pointerEvents = "none";
});

let btnDarkMode = document.querySelector("#darkmode");
btnDarkMode.addEventListener("click", () => {
  document.body.classList.toggle("darkmode");
});
