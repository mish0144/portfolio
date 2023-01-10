const menu = document.querySelector(".menu");
const menuButton = document.querySelector(".burger_menu");
const onelinePortrait = document.querySelector("#portrait_oneline_background");
const normalPortrait = document.querySelector("#portrait_background");

window.addEventListener("load", sidenVises);

function sidenVises(){
  console.log("sidenVises")

    menuButton.addEventListener("click", burgerMenu);
    normalPortrait.classList.add("hide");
    onelinePortrait.addEventListener("mouseenter", hidePortrait);
    normalPortrait.addEventListener("mouseleave", switchPortrait);
  }

function burgerMenu() {
    menu.classList.toggle("shown");
  
    const menuShown = menu.classList.contains("shown");

    if (menuShown) {
      console.log(menuShown); // se i konsollen
      menuButton.textContent = "LUK";
    } else {
      console.log(menuShown); // se i konsollen
      menuButton.textContent = "MENU";
    }
  }

function hidePortrait() {
  console.log("hidePortrait");
    this.classList.add("fadeout");
    normalPortrait.classList.remove("hide");

    this.addEventListener("animationend", changePortrait1);
  }

function changePortrait1() {
  console.log("changePortrait1");
    this.classList.add("hide");
    this.classList.remove("fadeout");
    this.offsetLeft;
      
    this.removeEventListener("animationend", changePortrait1);
  }

function switchPortrait() {
  console.log("switchPortrait");
    onelinePortrait.classList.remove("hide");
    onelinePortrait.classList.remove("fadein");
    this.classList.add("fadeout");

    this.addEventListener("animationend", changePortrait2);
  }

function changePortrait2() {
  console.log("changePortrait2");
    this.classList.add("hide");
    this.classList.remove("fadeout");
    this.offsetLeft;
      
    this.removeEventListener("animationend", changePortrait2);
  }






