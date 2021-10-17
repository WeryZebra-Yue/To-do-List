//timer by sohamsinh31
const { Script } = require("vm");

// In Style , Query Selector , id = # , class= . ,
let submit = document.querySelector('#submit');
let text = document.querySelector('#input');
let todosec = document.querySelector('.todosection');
let change = document.querySelector('h1');
let landing = document.querySelector("#landingid");
let audio = document.querySelector('audio');
let audio_button = document.querySelector("#audiobutton");
let property = document.querySelector(".property");
let Menu = document.querySelector("#Menu");
let portfoliodoc = document.querySelector("#portfolio");
let portfoliodetails = document.querySelector("portfolio");
let creditsdoc = document.querySelector("#credits");
let creditsdetails = document.querySelector("credits");
let Functiondoc = document.querySelector("#function");
let Functiodetails = document.querySelector("Functions");
let Notesdoc = document.querySelector("#notes");
let Notesdetails = document.querySelector("Notes");
let i = 0;

audio_button.addEventListener('click', () => {
    var button = i % 2 != 0 ? 'icons8-speaker-100.png' : 'icons8-mute-100.png';
    audio_button.setAttribute('src', button);
    i % 2 != 0 ? audio.play() : audio.pause();
    i++
});
var _0x5ce7 = ['innerHTML', '3CTGUBP', '1545201onfkOe', '1305573XMhYnp', '1lZpEMF', '968849NKTdrh', '429841xdRSIx', '-->\x20Made\x20by\x20Ayush\x20Master.', '1cFTyyw', '261682plyleX', '706235PUAARO', '1KueBkK', '593740bsnvcv'];
var _0x490d = function(_0x38c6dd, _0xe1020c) { _0x38c6dd = _0x38c6dd - 0xb2; var _0x5ce767 = _0x5ce7[_0x38c6dd]; return _0x5ce767; };
var _0x678940 = _0x490d;
(function(_0x341229, _0x5ea376) { var _0x273a08 = _0x490d; while (!![]) { try { var _0x4c072b = parseInt(_0x273a08(0xbc)) + parseInt(_0x273a08(0xb2)) * -parseInt(_0x273a08(0xbb)) + -parseInt(_0x273a08(0xb6)) + parseInt(_0x273a08(0xb4)) * parseInt(_0x273a08(0xb3)) + parseInt(_0x273a08(0xb9)) * parseInt(_0x273a08(0xbe)) + -parseInt(_0x273a08(0xb5)) * -parseInt(_0x273a08(0xb8)) + -parseInt(_0x273a08(0xba)); if (_0x4c072b === _0x5ea376) break;
            else _0x341229['push'](_0x341229['shift']()); } catch (_0x107d62) { _0x341229['push'](_0x341229['shift']()); } } }(_0x5ce7, 0xed49b), property[_0x678940(0xbd)] = _0x678940(0xb7));
Menu.addEventListener('click', () => {
    landing.classList.toggle('landinganime');
    Menu.classList.toggle("menu_anime1");

});
let Name = prompt("Enter Your Name : ");
change.innerHTML = Name ? Name + '&apos;s To-Do List' : change.innerHTML;
submit.addEventListener('click', (e) => {
    e.preventDefault();
    if (text.value != "") {

        let mainbox = document.createElement('div');
        let box = document.createElement('div');
        let timer = document.createElement('img');
        timer.classList.add("time")
        timer.src = "Images//download.png"
        box.innerHTML = text.value;
        timer.classList.add("timer2");
        let delete_img = document.createElement('img');
        let check_img = document.createElement('img');
        delete_img.src = "Images//icons8-delete-64.png";
        check_img.src = "Images//icons8-checkmark-64.png";
        delete_img.classList.add("delete");
        check_img.classList.add("check");
        box.classList.add('box');
        mainbox.classList.add('mainbox');
        text.value = "";
        mainbox.append(box, check_img, delete_img, timer)
        todosec.append(mainbox);
        delete_img.addEventListener('click', (e) => {
            mainbox.classList.add("animation")
            setTimeout(() => { mainbox.remove(mainbox); }, 595)

        });
        timer.addEventListener('click', (e) => {
            function samay()
        })
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
