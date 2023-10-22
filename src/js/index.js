"use strict";

import "../../node_modules/tw-elements/dist/js/tw-elements.umd.min.js"

import "../css/style.css";
import '../css/main.scss'

import generateRandom from "./generateName";

function content_ready_scripts() {
    generateRandom();
}

// Document Loaded
document.addEventListener("DOMContentLoaded", () => {
    content_ready_scripts();
});