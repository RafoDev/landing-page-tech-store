'use strict';

import galleryFilter from "./galleryFilter.js";
import nav from "./nav.js";
import validacion from "./validacion.js";

const documentReady = () => {
  nav();
  galleryFilter();
  validacion();
}

document.addEventListener('DOMContentLoaded', documentReady);
