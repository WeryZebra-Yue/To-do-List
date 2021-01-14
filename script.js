// In Style , Query Selector , id = # , class= . ,
let submit = document.querySelector('#submit');
let text = document.querySelector('#input');
let todosec = document.querySelector('.todosection');
let change = document.querySelector('h1');
let landing = document.querySelector("#landingid");
let i = 0;
let Menu = document.querySelector("#Menu");
Menu.addEventListener('click', () => {
    landing.classList.toggle('landinganime');
    Menu.classList.toggle("menu_anime1");
   
})
let Name = prompt("Enter Your Name : ");
change.innerHTML = Name?Name + '&apos;s To-Do List':change.innerHTML; 
submit.addEventListener('click', (e) => {
    e.preventDefault();
    if (text.value != "") {
    
        let mainbox = document.createElement('div');
        let box = document.createElement('div');
        box.innerHTML = text.value;
        let delete_img = document.createElement('img');
        let check_img = document.createElement('img');
        delete_img.src = "icons8-delete-64.png"
        check_img.src = "icons8-checkmark-64.png"
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
        Menu.addEventListener('click', () => {
            setTimeout(()=>{check_img.classList.toggle("overlayer")
                delete_img.classList.toggle("overlayer")
           }, 255)
           
        });
       
    }
});
