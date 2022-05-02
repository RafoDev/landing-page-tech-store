'use strict';

import galleryFilter from "./galleryFilter.js";
import nav from "./nav.js";

const documentReady = () => {

  nav();
  galleryFilter();

}

document.addEventListener('DOMContentLoaded', documentReady);
