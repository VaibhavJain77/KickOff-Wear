let wishitemObj   = [];
let wishitemObj1  = [];
let wishitemObj2  = [];
let wishitemObj3  = [];
let wishitemObj4  = [];

let wishlistItemStr = localStorage.getItem('wishlistItem')
wishlistItem = wishlistItemStr ? JSON.parse(wishlistItemStr) : [];
let wishlistItemStr1 = localStorage.getItem('wishlistItem1')
wishlistItem1 = wishlistItemStr1 ? JSON.parse(wishlistItemStr1) : [];
let wishlistItemStr2 = localStorage.getItem('wishlistItem2')
wishlistItem2 = wishlistItemStr2 ? JSON.parse(wishlistItemStr2) : [];
let wishlistItemStr3 = localStorage.getItem('wishlistItem3')
wishlistItem3 = wishlistItemStr3 ? JSON.parse(wishlistItemStr3) : [];
let wishlistItemStr4 = localStorage.getItem('wishlistItem4')
wishlistItem4 = wishlistItemStr4 ? JSON.parse(wishlistItemStr4) : [];


window.onload = function () {
  loadwishItemsObj();
  loadwishlistItemsObj1();
  loadwishlistItemsObj2()
  loadwishlistItemsObj3()
  loadwishlistItemsObj4()
  displaywish();
  displaywish1();
  displaywish2()
  displaywish3()
  displaywish4()
};

function loadwishItemsObj() {
  let wishlistItemStr = localStorage.getItem('wishlistItem');
  let wishlistItem = wishlistItemStr ? JSON.parse(wishlistItemStr) : [];

  let matchedItems0 = [];

  wishlistItem.forEach(id => {
    for (let i = 0; i < clubData.length; i++) {
      if (id == clubData[i].id) {
        matchedItems0.push(clubData[i]);
        return;
      }
    }
  });

   wishitemObj = matchedItems0;
}

function loadwishlistItemsObj1() {
  let wishlistItemStr1 = localStorage.getItem('wishlistItem1');
  let wishlistItem1 = wishlistItemStr1 ? JSON.parse(wishlistItemStr1) : [];

  let matchedItems0 = [];

  wishlistItem1.forEach(id => {
    for (let i = 0; i < retroData.length; i++) {
      if (id == retroData[i].id) {
        matchedItems0.push(retroData[i]);
        return;
      }
    }
  });

   wishitemObj1 = matchedItems0;
}

function loadwishlistItemsObj2() {
  let wishlistItemStr2 = localStorage.getItem('wishlistItem2');
  let wishlistItem2 = wishlistItemStr2 ? JSON.parse(wishlistItemStr2) : [];

  let matchedItems0 = [];

  wishlistItem2.forEach(id => {
    for (let i = 0; i < countryData.length; i++) {
      if (id == countryData[i].id) {
        matchedItems0.push(countryData[i]);
        return;
      }
    }
  });

   wishitemObj2 = matchedItems0;
}

function loadwishlistItemsObj3() {
  let wishlistItemStr3 = localStorage.getItem('wishlistItem3');
  let wishlistItem3 = wishlistItemStr3 ? JSON.parse(wishlistItemStr3) : [];

  let matchedItems0 = [];

  wishlistItem3.forEach(id => {
    for (let i = 0; i < bootsData.length; i++) {
      if (id == bootsData[i].id) {
        matchedItems0.push(bootsData[i]);
        return;
      }
    }
  });

   wishitemObj3 = matchedItems0;
}

function loadwishlistItemsObj4() {
  let wishlistItemStr4 = localStorage.getItem('wishlistItem4');
  let wishlistItem4 = wishlistItemStr4 ? JSON.parse(wishlistItemStr4) : [];

  let matchedItems0 = [];

  wishlistItem4.forEach(id => {
    for (let i = 0; i < footballData.length; i++) {
      if (id == footballData[i].id) {
        matchedItems0.push(footballData[i]);
        return;
      }
    }
  });

   wishitemObj4 = matchedItems0;
}

// Display club items
function displaywish() {
  let wishContainerElement = document.querySelector('.wish-club');
  let innerHTML = '';

  wishitemObj.forEach(wishItem => {
    innerHTML += generatewishHtml(wishItem);
  });

  wishContainerElement.innerHTML = innerHTML;
}

// Display retro items
function displaywish1() {
  let wishContainerElement1 = document.querySelector('.wish-retro');
  let innerHTML1 = '';

  wishitemObj1.forEach(wishItem1 => {
    innerHTML1 += generatewishHtml1(wishItem1);
  });

  wishContainerElement1.innerHTML = innerHTML1;
}

function displaywish2() {
  let wishContainerElement2 = document.querySelector('.wish-country');
  let innerHTML2 = '';

  wishitemObj2.forEach(wishItem2 => {
    innerHTML2 += generatewishHtml2(wishItem2);
  });

  wishContainerElement2.innerHTML = innerHTML2;
}

function displaywish3() {
  let wishContainerElement3 = document.querySelector('.wish-boots');
  let innerHTML3 = '';

  wishitemObj3.forEach(wishItem3 => {
    innerHTML3 += generatewishHtml3(wishItem3);
  });

  wishContainerElement3.innerHTML = innerHTML3;
}

function displaywish4() {
  let wishContainerElement4 = document.querySelector('.wish-football');
  let innerHTML4 = '';

  wishitemObj4.forEach(wishItem4 => {
    innerHTML4+= generatewishHtml4(wishItem4);
  });

  wishContainerElement4.innerHTML = innerHTML4;
}


function generatewishHtml(club) {
  return `
    <div class="wish-item">
      <img src="${club.image}" alt="Jersey" class="wish-item-image">
      <div class="wish-item-details">
        <p class="item-name">${club.item_name}</p>
        <p class="item-price">${club.current_price}</p>
        <p class="item-ori">${club.original_price}</p>
      </div>
    </div>
  `;
}

// Retro HTML
function generatewishHtml1(retro) {
  return `
    <div class="wish-item">
      <img src="${retro.image}" alt="Jersey" class="wish-item-image">
      <div class="wish-item-details">
        <p class="item-name">${retro.item_name}</p>
        <p class="item-price">${retro.current_price}</p>
        <p class="item-price">${retro.original_price}</p>
      </div>
    </div>
  `;
}

function generatewishHtml2(country) {
  return `
    <div class="wish-item">
      <img src="${country.image}" alt="Jersey" class="wish-item-image">
      <div class="wish-item-details">
        <p class="item-name">${country.item_name}</p>
        <p class="item-price">${country.current_price}</p>
        <p class="item-price">${country.original_price}</p>
      </div>
    </div>
  `;
}

function generatewishHtml3(boots) {
  return `
    <div class="wish-item">
      <img src="${boots.image}" alt="Jersey" class="wish-item-image">
      <div class="wish-item-details">
        <p class="item-name">${boots.item_name}</p>
        <p class="item-price">${boots.current_price}</p>
        <p class="item-price">${boots.original_price}</p>
      </div>
    </div>
  `;
}

function generatewishHtml4(football) {
  return `
    <div class="wish-item">
      <img src="${football.image}" alt="Jersey" class="wish-item-image">
      <div class="wish-item-details">
        <p class="item-name">${football.item_name}</p>
        <p class="item-price">${football.current_price}</p>
        <p class="item-price">${football.original_price}</p>
      </div>
    </div>
  `;
}