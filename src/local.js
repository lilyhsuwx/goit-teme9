// const name = "Liliya";

// const arr = ["Jura", "Dasha", "oleg"]

// const objA = {
//     name: "Jura",
//     age: 42
// }

// localStorage.setItem("qwe", name)

// const parseName = localStorage.getItem("qwe")

// localStorage.removeItem("qwe")

// console.log(parseName);

// localStorage.setItem("name", "Jura")
// localStorage.setItem("age", 42)

// localStorage.removeItem("name")
// localStorage.removeItem("age")

// localStorage.clear()

const checkbox = document.querySelector(".checkbox");
const check = document.querySelector(".check");
const body = document.querySelector("body");

const STORAGE_KEY = "theme"

if (localStorage.getItem(STORAGE_KEY) === "on") {
    checkbox.classList.add("active")
    body.classList.add("active")
}

checkbox.addEventListener("click", () => {
    checkbox.classList.toggle("active")
    body.classList.toggle("active")

    if (body.classList.contains("active")) {
        localStorage.setItem(STORAGE_KEY, "on")
    }
    else {
        localStorage.setItem(STORAGE_KEY, "off")
    }
});

// let time = 0

// setInterval(() => {
//     time +=1
//     console.log(time)

//     localStorage.clear()

// },1000)

