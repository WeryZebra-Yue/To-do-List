// In Style , Query Selector , id = # , class= . ,
let submit = document.querySelector('#submit');
let text = document.querySelector('#input');
let todosec = document.querySelector('.todosection');
let change = document.querySelector('h1');
let landing = document.querySelector("#landingid");
let audio = document.querySelector('audio');
let audio_button = document.querySelector("#audiobutton");
let property = document.querySelector(".property");
let i = 1;
let Menu = document.querySelector("#Menu");
let portfoliodoc = document.querySelector("#portfolio");
let portfoliodetails = document.querySelector("portfolio");
let creditsdoc = document.querySelector("#credits");
let creditsdetails = document.querySelector("credits");
let Functiondoc = document.querySelector("#function");
let Functiodetails = document.querySelector("Functions");
let Notesdoc = document.querySelector("#notes");
let Notesdetails = document.querySelector("Notes");

audio_button.addEventListener('click', () => {
    var button = i % 2 != 0 ? 'icons8-speaker-100.png' : 'icons8-mute-100.png';
    audio_button.setAttribute('src', button);
    i % 2 != 0 ? audio.play() : audio.pause();
    i++
});
Menu.addEventListener('click', () => {
    landing.classList.toggle('landinganime');
    Menu.classList.toggle("menu_anime1");

})
let Name = prompt("Enter Your Name : ");
change.innerHTML = Name ? Name + '&apos;s To-Do List' : change.innerHTML;
submit.addEventListener('click', (e) => {
    e.preventDefault();
    if (text.value != "") {

        let mainbox = document.createElement('div');
        let box = document.createElement('div');
        box.innerHTML = text.value;
        let delete_img = document.createElement('img');
        let check_img = document.createElement('img');
        delete_img.src = "Images//icons8-delete-64.png";
        check_img.src = "Images//icons8-checkmark-64.png";
        delete_img.classList.add("delete");
        check_img.classList.add("check");
        box.classList.add('box');
        mainbox.classList.add('mainbox');
        text.value = "";
        mainbox.append(box, check_img, delete_img)
        todosec.append(mainbox);
        delete_img.addEventListener('click', (e) => {
            mainbox.classList.add("animation")
            setTimeout(() => { mainbox.remove(mainbox); }, 595)

        });
        check_img.addEventListener('click', (e) => {
            box.classList.toggle('done');
        });
        box.ondrop = "drop(event)";
        box.ondragover = "allowDrop(event)"
        mainbox.draggable = "true";
        mainbox.ondragstart = "drag(event)"
        Menu.addEventListener('click', () => {

            setTimeout(() => {
                check_img.classList.toggle("overlayer")
                delete_img.classList.toggle("overlayer");
                box.classList.toggle("overlayer");

            }, 260)

        });

    }
});

function MENU(doc, details, Class) {
    doc.addEventListener('click', () => {
        details.classList.toggle(Class);
    })
}

MENU(portfoliodoc, portfoliodetails, "portfolio");
MENU(creditsdoc, creditsdetails, "credits")
MENU(Notesdoc, Notesdetails, "portfolio");
MENU(Functiondoc, Functiodetails, "portfolio")




// function drag(ev) {
//     ev.dataTransfer.setData("text", ev.target.id);
// }

// function drop(ev) {
//     ev.preventDefault();
//     var data = ev.dataTransfer.getData("div");
//     ev.target.appendChild(document.getElementById(data));
// }