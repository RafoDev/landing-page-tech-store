'use strict';

import galleryFilter from "./galleryFilter.js";

const documentReady = () => {
  galleryFilter();
}

document.addEventListener('DOMContentLoaded', documentReady);