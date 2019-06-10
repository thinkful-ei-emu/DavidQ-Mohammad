/* eslint-disable no-unused-vars */
'use strict';

const Item = (function (){
  const foo = 'bar';
  function validateName(name){
    if(name === ''){
      throw new TypeError('Name does Not Exist');
    } 
  }
  function create(name){
    return {id:cuid(),name,checked:false};
  }
  return {
    create,
    validateName
  }; // returns empty object

}());