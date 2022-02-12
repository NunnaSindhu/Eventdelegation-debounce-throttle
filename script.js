const category = document.querySelector("#category");
category.addEventListener("click", (event) => {
  console.log(event.target.id);
  if (event.target.tagName == "LI") {
    window.location.href = "/" + event.target.id;
  }
});

document.querySelector("#form").addEventListener("keyup", (e) => {
  if (e.target.dataset.uppercase != undefined) {
    e.target.value = e.target.value.toUpperCase();
  }
});

//debouncing examples
let counter = 0;
const getData = () => {
  console.log("fetching data..." + counter++);
};
const debounce = (fn, delay) => {
  let timer;
  return function () {
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
};
const betterFunction = debounce(getData, 300);

// throttling examples
let count = 0;
const expensive = () => {
  console.log("making api call", count++);
};

const throttle = (fn, limit) => {
  let flag = true;
  return function () {
    let context = this;
    let args = arguments;
    if (flag) {
      fn.apply(context, args);
      flag = false;
    }
    setTimeout(function () {
      flag = true;
    }, limit);
  };
};
const expensiveFunction = throttle(expensive, 1000);
window.addEventListener("resize",expensiveFunction);
