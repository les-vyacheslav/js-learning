/**
 * Project: JS Constructor
 * Version: 1.0.0
 */

import '../css/main.css'

import { model } from './model'
import { templates } from './templates';

const $site = document.querySelector("#site");

model.forEach((block) => {
  let html = "";

  if (block.type === "title") {
    html = title(block);
  } else if (block.type === "text") {
    html = text(block);
  } else if (block.type === 'columns') {
    html = columns(block)
  } else if (block.type === 'image') {
    html = image(block)
  }

  $site.insertAdjacentHTML('beforeend', html);
});
