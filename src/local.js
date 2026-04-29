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

// =================================================

// const checkbox = document.querySelector(".checkbox");
// const check = document.querySelector(".check");
// const body = document.querySelector("body");

// const STORAGE_KEY = "theme"

// if (localStorage.getItem(STORAGE_KEY) === "on") {
//     checkbox.classList.add("active")
//     body.classList.add("active")
// }

// checkbox.addEventListener("click", () => {
//     checkbox.classList.toggle("active")
//     body.classList.toggle("active")

//     if (body.classList.contains("active")) {
//         localStorage.setItem(STORAGE_KEY, "on")
//     }
//     else {
//         localStorage.setItem(STORAGE_KEY, "off")
//     }
// });


// // =================================================

// const movies = [
//   {
//     id: 1,
//     title: "Inception",
//     year: 2010,
//     genre: ["Sci-Fi", "Action", "Thriller"],
//     rating: 8.8,
//     duration: 148,
//     director: "Christopher Nolan",
//     cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt"],
//     isOscarWinner: true
//   },
//   {
//     id: 2,
//     title: "The Dark Knight",
//     year: 2008,
//     genre: ["Action", "Crime", "Drama"],
//     rating: 9.0,
//     duration: 152,
//     director: "Christopher Nolan",
//     cast: ["Christian Bale", "Heath Ledger"],
//     isOscarWinner: true
//   },
//   {
//     id: 3,
//     title: "Interstellar",
//     year: 2014,
//     genre: ["Sci-Fi", "Drama"],
//     rating: 8.6,
//     duration: 169,
//     director: "Christopher Nolan",
//     cast: ["Matthew McConaughey", "Anne Hathaway"],
//     isOscarWinner: true
//   },
//   {
//     id: 4,
//     title: "Titanic",
//     year: 1997,
//     genre: ["Romance", "Drama"],
//     rating: 7.9,
//     duration: 195,
//     director: "James Cameron",
//     cast: ["Leonardo DiCaprio", "Kate Winslet"],
//     isOscarWinner: true
//   },
//   {
//     id: 5,
//     title: "Avatar",
//     year: 2009,
//     genre: ["Sci-Fi", "Adventure"],
//     rating: 7.8,
//     duration: 162,
//     director: "James Cameron",
//     cast: ["Sam Worthington", "Zoe Saldana"],
//     isOscarWinner: true
//   },
//   {
//     id: 6,
//     title: "The Matrix",
//     year: 1999,
//     genre: ["Sci-Fi", "Action"],
//     rating: 8.7,
//     duration: 136,
//     director: "The Wachowskis",
//     cast: ["Keanu Reeves", "Laurence Fishburne"],
//     isOscarWinner: true
//   },
//   {
//     id: 7,
//     title: "Forrest Gump",
//     year: 1994,
//     genre: ["Drama", "Romance"],
//     rating: 8.8,
//     duration: 142,
//     director: "Robert Zemeckis",
//     cast: ["Tom Hanks", "Robin Wright"],
//     isOscarWinner: true
//   },
//   {
//     id: 8,
//     title: "The Shawshank Redemption",
//     year: 1994,
//     genre: ["Drama"],
//     rating: 9.3,
//     duration: 142,
//     director: "Frank Darabont",
//     cast: ["Tim Robbins", "Morgan Freeman"],
//     isOscarWinner: false
//   },
//   {
//     id: 9,
//     title: "Gladiator",
//     year: 2000,
//     genre: ["Action", "Drama"],
//     rating: 8.5,
//     duration: 155,
//     director: "Ridley Scott",
//     cast: ["Russell Crowe", "Joaquin Phoenix"],
//     isOscarWinner: true
//   }
// ];

// const STORAGE_KEY = "dataMovie";

// const listEl = document.querySelector(".list");

// let currentMuvies = movies;

// const parseMovies = localStorage.getItem("STORAGE_KEY");

// if(parseMovies) {
//     currentMuvies = JSON.parse(parseMovies);
//     createItems(currentMuvies);
// }

// function createItems(array) {
//     const item = array.map(({id, title, year, rating, director, isOscarWinner}) =>{
//         return `
//         <li class="item" id="${id}">
//             <h2>Назва: ${title}</h2>
//             <p>Рік: ${year}</p>
//             <p>Рейтинг: ${rating}</p>
//             <h3>Режисер: ${director}</h3>
//             <p>Оскар: ${isOscarWinner?"Отримав":"Не отримав"}</p>
//             <button class="delit" type=""button>Delit</button>
//         </li>`
//     }).join("")
//     listEl.innerHTML = item;
// }

// createItems(currentMuvies);

// listEl.addEventListener("click", (evt) => {

//     if(evt.target.nodeName !== "BUTTON") {
//         return
//     }

//     const id = Number(evt.target.closest("li").id);
//     const idx = currentMuvies.findIndex((muvie) => muvie.id === id);
    
//     currentMuvies.splice(idx, 1);
//     localStorage.setItem("STORAGE_KEY", JSON.stringify(currentMuvies));

//     createItems(currentMuvies);
// })



// =================================================

// Створіть програму для зберігання контактів — ім'я, прізвище, телефон та електронна адреса. Зберігайте контакти в localStorage та дозволяйте користувачу додавати, видаляти та редагувати контакти.

const name = document.getElementById("name");
const lastName = document.getElementById("lastName");
const number = document.getElementById("number");
const email = document.getElementById("email");
const btnSave = document.getElementById("btn-save");
const list = document.getElementById("list");

let editIndex = null;

btnSave.addEventListener("click", (e) => {
    e.preventDefault();

    if (!name.value || !lastName.value || !number.value || !email.value) {
        alert("Заповніть усі поля!");
        return;
    }

    let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

    const contact = {
        name: name.value,
        lastName: lastName.value,
        number: number.value,
        email: email.value
    };

    if (editIndex !== null) {
        contacts[editIndex] = contact;
        editIndex = null;
    } else {
        contacts.push(contact);
    }

    localStorage.setItem("contacts", JSON.stringify(contacts));

    renderContacts();

    name.value = "";
    lastName.value = "";
    number.value = "";
    email.value = "";
});

function renderContacts() {
    let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

    list.innerHTML = "";

    contacts.forEach((item, index) => {
        const div = document.createElement("div");

        div.innerHTML = `
            <p><b>${item.name} ${item.lastName}</b></p>
            <p>${item.number}</p>
            <p>${item.email}</p>

            <button onclick="deleteContact(${index})">Видалити</button>
            <button onclick="editContact(${index})">Редагувати</button>
            <hr>
        `;

        list.appendChild(div);
    });
}

function deleteContact(index) {
    let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

    contacts.splice(index, 1);

    localStorage.setItem("contacts", JSON.stringify(contacts));

    renderContacts();
}

function editContact(index) {
    let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

    const contact = contacts[index];

    name.value = contact.name;
    lastName.value = contact.lastName;
    number.value = contact.number;
    email.value = contact.email;

    editIndex = index;
}

renderContacts();

window.deleteContact = deleteContact;
window.editContact = editContact;