const contact = document.querySelector(".contact");

//function mouse move of an element 
import { mouseMove } from "./dom.js";
mouseMove(contact);

//
let mode = document.querySelector(".mode");
import { modes } from "./dom.js"
modes(mode, document.body);
//
const nav = document.querySelector("nav ");
const links = document.querySelector("nav .links");
const open = document.querySelector("#open");
const close = document.querySelector("#close");

import { displyMinu } from "./dom.js";
displyMinu(open, close, nav);
//
const header = document.querySelector("header");
const button_up = document.querySelector(".fa-angle-up")
import { scrolling } from "./dom.js";

scrolling(links, button_up);
//