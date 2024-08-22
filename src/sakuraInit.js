import $ from 'jquery';
// Ensure jQuery Sakura plugin is loaded
import 'https://cdn.jsdelivr.net/gh/timoschaefer/jQuery-Sakura/jquery-sakura.min.js';

export const initializeSakura = () => {
  // Initialize the Sakura plugin directly
  $('.sakura-falling').sakura();
};