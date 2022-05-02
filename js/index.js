'use strict';

import darkMode from "./darkMode.js";

const documentReady = () => {
  darkMode();
}

document.addEventListener('DOMContentLoaded', documentReady);