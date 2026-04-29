let e=document.getElementById("name"),t=document.getElementById("lastName"),a=document.getElementById("number"),l=document.getElementById("email"),n=document.getElementById("btn-save"),u=document.getElementById("list"),o=null;function c(){let e=JSON.parse(localStorage.getItem("contacts"))||[];u.innerHTML="",e.forEach((e,t)=>{let a=document.createElement("div");a.innerHTML=`
            <p><b>${e.name} ${e.lastName}</b></p>
            <p>${e.number}</p>
            <p>${e.email}</p>

            <button onclick="deleteContact(${t})">\u{412}\u{438}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{438}</button>
            <button onclick="editContact(${t})">\u{420}\u{435}\u{434}\u{430}\u{433}\u{443}\u{432}\u{430}\u{442}\u{438}</button>
            <hr>
        `,u.appendChild(a)})}n.addEventListener("click",n=>{if(n.preventDefault(),!e.value||!t.value||!a.value||!l.value)return void alert("Заповніть усі поля!");let u=JSON.parse(localStorage.getItem("contacts"))||[],m={name:e.value,lastName:t.value,number:a.value,email:l.value};null!==o?(u[o]=m,o=null):u.push(m),localStorage.setItem("contacts",JSON.stringify(u)),c(),e.value="",t.value="",a.value="",l.value=""}),c(),window.deleteContact=function(e){let t=JSON.parse(localStorage.getItem("contacts"))||[];t.splice(e,1),localStorage.setItem("contacts",JSON.stringify(t)),c()},window.editContact=function(n){let u=(JSON.parse(localStorage.getItem("contacts"))||[])[n];e.value=u.name,t.value=u.lastName,a.value=u.number,l.value=u.email,o=n};
//# sourceMappingURL=goit-teme9.c55636e0.js.map
