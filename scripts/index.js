/* eslint-disable no-console */
/* global shoppingList, cuid */
/* global store cuid*/
'use strict';

// eslint-disable-next-line no-unused-vars

function main() {
  shoppingList.bindEventListeners();
  shoppingList.render();
}

$(main);
console.log(store);
console.log(store.foo);
