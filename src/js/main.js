/**
 * Project: JS Constructor
 * Version: 1.0.0
 */

import '../css/main.css'

import {model} from './model'
import {templates} from './templates';

const $site = document.querySelector("#site");

model.forEach((block) => {

  let toHTML = templates[block.type]

  if(toHTML) {
    $site.insertAdjacentHTML('beforeend', toHTML(block));    
  }

});
