'use strict'

document.querySelector('.hero-btn').addEventListener('click', function () {
  document.querySelector('.backdrop').classList.toggle('is-open');
});

document.querySelector('.modal-close-btn').addEventListener('click', function () {
  document.querySelector('.backdrop').classList.toggle('is-open');
});




document.querySelector('.mobile-menu-open-btn').addEventListener('click', function () {
  document.querySelector('.mobile-menu').classList.toggle('is-open');
});

document.querySelector('.mobile-menu-close-btn').addEventListener('click', function () {
  document.querySelector('.mobile-menu').classList.toggle('is-open');
});