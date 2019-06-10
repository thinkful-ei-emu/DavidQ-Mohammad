/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
//store iife
/* global STORE, cuid, Item */
'use strict';

const store = (function(){
  let foo = 'foo';
  let items= [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  let hideCheckedItems= false;
  let searchTerm ='';
  /**
   * 
   * @param {string} id  cuid to search for
   * 
   * @returns {number} index of item in array
   */
  function findById(id){
    return store.items.findIndex((i)=>{
      return i.id === id;
    });
  }
  function addItem(name){
    try{
      Item.validateName(name);
      store.items.push(Item.create(name));
    }
    catch(e){
      console.log(`Can not add Item: ${e.message}`);
    }
  }
  /**
   *  @param {string}
    */
  function findAndToggleChecked(id){
    let item = store.items[this.findById(id)];
    item.checked = !item.checked;
  }
  function findAndUpadateName(id,newName){
    try{
      Item.validateName(newName);
      let item = store.items[findById(id)];
      item.name = newName;
    }
    catch(e){
      console.log(`Cannot add item: ${e.message}`);
    }

  }
  function findAndDelete(id){
    this.items = this.items.filter((i)=>{
      return i.id !== id;
    });
    
  }
  function toggleCheckedItemsFilter(){
  /* which toggles this.hideCheckedItems prop */
    this.hideCheckedItems = !this.hideCheckedItems;
  }
  function setSearchTerm(term){
  /*   changes this.searchTerm to the first argument passed in */
    this.searchTerm = term;
  }
  

  return{
    items,
    hideCheckedItems,
    searchTerm,
    findAndUpadateName,
    findAndDelete,
    findAndToggleChecked,
    findById,
    addItem,
    setSearchTerm,
    toggleCheckedItemsFilter
  };

}());