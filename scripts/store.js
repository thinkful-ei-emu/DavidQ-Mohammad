/* eslint-disable no-unused-vars */
//store iife
/* global STORE cuid*/
'use strict';

const STORE = (function(){
  let foo = 'foo';
  let items= [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  let hideCheckedItems= false;
  let searchTerm ='';
  return{
    items,
    hideCheckedItems,
    searchTerm
  };

}());