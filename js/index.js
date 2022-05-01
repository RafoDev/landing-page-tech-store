'use strict';

import nav from "./nav.js";

const documentReady = () => {

  nav();
}

document.addEventListener('DOMContentLoaded', documentReady);