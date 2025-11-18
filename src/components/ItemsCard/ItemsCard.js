import "./ItemsCard.css";
import {itemContent} from "../ItemsContent/ItemsContent.js";

const result = document.getElementById("result");
const items = document.getElementById("items");

result.textContent = itemContent.length + " items";

itemContent.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
    <img src="${item.img}" alt="${item.title}" />
    <h2>${item.title}</h2>
    <p>${item.price}</p>
    `;
    items.appendChild(card);
});

export default itemContent;