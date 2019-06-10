/* eslint-disable no-console */
/* global shoppingList, cuid */
/* global STORE cuid*/
'use strict';

// eslint-disable-next-line no-unused-vars

function main() {
  shoppingList.bindEventListeners();
  shoppingList.render();
}

$(main);
console.log(STORE);
console.log(STORE.foo);
