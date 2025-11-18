import "./NavMenu.css";
import { menuContent } from "../MenuContent/MenuContent.js";

const burger = document.getElementById("burger");
const result = document.getElementById("navchoice");
  
burger.addEventListener("click", () => {
    const menu = document.getElementById("menu");
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        menu.classList.add("off");
    } else {
        menu.classList.add("active");
        menu.classList.remove("off");
    }
});

menuContent.forEach((value) => {
    const menuItem = document.createElement("li");
    menuItem.textContent = value.title;
    menu.appendChild(menuItem);
    menuItem.addEventListener("click", () => {
        document.querySelectorAll(".submenu").forEach(ul => ul.remove());
        result.textContent = value.title;
        const existingSubMenu = menuItem.querySelector(".submenu");
        if (existingSubMenu) {
            existingSubMenu.remove();
            return;
        }
        if (!value.subMenu) return;
        const subMenuList = document.createElement("ul");
        subMenuList.classList.add("submenu");
        value.subMenu.forEach((sub) => {
            const subMenuItem = document.createElement("li");
            subMenuItem.textContent = sub.title;
            subMenuList.appendChild(subMenuItem);
        });

        menuItem.appendChild(subMenuList);
    });
});



// desktop
const menuDesktop = document.getElementById("desktopNav");

menuContent.forEach((value) => {
    const menuItem = document.createElement("li");
    menuItem.textContent = value.title;
    menuDesktop.appendChild(menuItem);
});



export {burger};