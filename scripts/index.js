/* eslint-disable no-console */
/* global shoppingList, cuid, store, Item*/
/* eslint-env jquery */
'use strict';


function main() {
  shoppingList.bindEventListeners();
  shoppingList.render();
 
}

$(main);
console.log(store);
console.log(store.foo);
console.log(Item.foo);

