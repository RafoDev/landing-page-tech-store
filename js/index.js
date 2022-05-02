'use strict';

import galleryFilter from "./galleryFilter.js";
import nav from "./nav.js";
import validacion from "./validacion.js";
import darkMode from "./darkMode.js";

const documentReady = () => {
  nav();
  galleryFilter();
  validacion();
  darkMode();

}

document.addEventListener('DOMContentLoaded', documentReady);

