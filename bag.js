let cartItemObj  = [];
let cartItemObj1 = [];
let cartItemObj2 = [];
let cartItemObj3 = [];
let cartItemObj4 = [];
let ttoal = clubMrp()
function clubMrp(){
  let totalMrp1 ='';
cartItemObj.forEach(cartItem => {
   
  totalMrp1 += cartItem.original_price;
});
return totalMrp1;
}
function clubMrp1(){
  let totalMrp2 = 0;
cartItemObj1.forEach(cartItem1 => {
  totalMrp2 += cartItem1.original_price;
});
return totalMrp2;
}
function clubMrp2(){
  let totalMrp3 = 0;
cartItemObj2.forEach(cartItem2 => {
  totalMrp3 += cartItem2.original_price;
});
}
function clubMrp3(){
  let totalMrp4 = 0;
cartItemObj3.forEach(cartItem3 => {
  totalMrp4 += cartItem3.original_price;
});
}
function clubMrp4(){
  let totalMrp5 = 0;
cartItemObj4.forEach(cartItem4 => {
  totalMrp5 += cartItem4.original_price;
});
}

let cartItemPrice;
let cartItemStr = localStorage.getItem('cartItem')
cartItem = cartItemStr ? JSON.parse(cartItemStr) : [];
let cartItemStr1 = localStorage.getItem('cartItem1')
cartItem1 = cartItemStr1 ? JSON.parse(cartItemStr1) : [];
let cartItemStr2 = localStorage.getItem('cartItem2')
cartItem2 = cartItemStr2 ? JSON.parse(cartItemStr2) : [];
let cartItemStr3 = localStorage.getItem('cartItem3')
cartItem3 = cartItemStr3 ? JSON.parse(cartItemStr3) : [];
let cartItemStr4 = localStorage.getItem('cartItem4')
cartItem4 = cartItemStr4 ? JSON.parse(cartItemStr4) : [];


window.onload = function () {
  loadCartItemsObj();
  loadCartItemsObj1();
  loadCartItemsObj2()
  loadCartItemsObj3()
  loadCartItemsObj4()
  displayCart();
  displayCart1();
  displayCart2()
  displayCart3()
  displayCart4()
  displayPrice()
};

// Load clubData cart
function loadCartItemsObj() {
  let cartItemStr = localStorage.getItem('cartItem');
  let cartItem = cartItemStr ? JSON.parse(cartItemStr) : [];

  let matchedItems = [];

  cartItem.forEach(id => {
    for (let i = 0; i < clubData.length; i++) {
      if (id == clubData[i].id) {
        matchedItems.push(clubData[i]);
        return;
      }
    }
  });

  cartItemObj = matchedItems;
}

// Load retroData cart
function loadCartItemsObj1() {
  let cartItemStr1 = localStorage.getItem('cartItem1');
  let cartItem1 = cartItemStr1 ? JSON.parse(cartItemStr1) : [];

  let matchedItems = [];

  cartItem1.forEach(id => {
    for (let i = 0; i < retroData.length; i++) {
      if (id == retroData[i].id) {
        matchedItems.push(retroData[i]);
        return;
      }
    }
  });

  cartItemObj1 = matchedItems;
}

function loadCartItemsObj2() {
  let cartItemStr2 = localStorage.getItem('cartItem2');
  let cartItem2 = cartItemStr2 ? JSON.parse(cartItemStr2) : [];

  let matchedItems = [];

  cartItem2.forEach(id => {
    for (let i = 0; i < countryData.length; i++) {
      if (id == countryData[i].id) {
        matchedItems.push(countryData[i]);
        return;
      }
    }
  });

  cartItemObj2 = matchedItems;
}

function loadCartItemsObj3() {
  let cartItemStr3 = localStorage.getItem('cartItem3');
  let cartItem3 = cartItemStr3 ? JSON.parse(cartItemStr3) : [];

  let matchedItems = [];

  cartItem3.forEach(id => {
    for (let i = 0; i < bootsData.length; i++) {
      if (id == bootsData[i].id) {
        matchedItems.push(bootsData[i]);
        return;
      }
    }
  });

  cartItemObj3 = matchedItems;
}

function loadCartItemsObj4() {
  let cartItemStr4 = localStorage.getItem('cartItem4');
  let cartItem4 = cartItemStr4 ? JSON.parse(cartItemStr4) : [];

  let matchedItems = [];

  cartItem4.forEach(id => {
    for (let i = 0; i < footballData.length; i++) {
      if (id == footballData[i].id) {
        matchedItems.push(footballData[i]);
        return;
      }
    }
  });

  cartItemObj4 = matchedItems;
}

// Display club items
function displayCart() {
  let cartContainerElement = document.querySelector('.cart-club');
  let innerHTML = '';

  cartItemObj.forEach(cartItem => {
    innerHTML += generateCartHtml(cartItem);
  });

  cartContainerElement.innerHTML = innerHTML;
}

// Display retro items
function displayCart1() {
  let cartContainerElement1 = document.querySelector('.cart-retro');
  let innerHTML1 = '';

  cartItemObj1.forEach(cartItem1 => {
    innerHTML1 += generateCartHtml1(cartItem1);
  });

  cartContainerElement1.innerHTML = innerHTML1;
}

function displayCart2() {
  let cartContainerElement2 = document.querySelector('.cart-country');
  let innerHTML2 = '';

  cartItemObj2.forEach(cartItem2 => {
    innerHTML2 += generateCartHtml2(cartItem2);
  });

  cartContainerElement2.innerHTML = innerHTML2;
}

function displayCart3() {
  let cartContainerElement3 = document.querySelector('.cart-boots');
  let innerHTML3 = '';

  cartItemObj3.forEach(cartItem3 => {
    innerHTML3 += generateCartHtml3(cartItem3);
  });

  cartContainerElement3.innerHTML = innerHTML3;
}

function displayCart4() {
  let cartContainerElement4 = document.querySelector('.cart-football');
  let innerHTML4 = '';

  cartItemObj4.forEach(cartItem4 => {
    innerHTML4+= generateCartHtml4(cartItem4);
  });

  cartContainerElement4.innerHTML = innerHTML4;
}




// Club HTML
function generateCartHtml(club) {
  return `
    <div class="cart-item">
      <img src="${club.image}" alt="Jersey" class="cart-item-image">
      <div class="cart-item-details">
        <p class="item-name">${club.item_name}</p>
        <p class="item-price">${club.current_price}</p>
        <p class="item-ori">${club.original_price}</p>
      </div>
      <span class="remove-btn" data-key="cartItem"  data-id="${club.id}">✕</span>  <!-- NEW -->
    </div>
  `;
}
function generateCartHtml1(retro) {
  return `
    <div class="cart-item">
      <img src="${retro.image}" alt="Jersey" class="cart-item-image">
      <div class="cart-item-details">
        <p class="item-name">${retro.item_name}</p>
        <p class="item-price">${retro.current_price}</p>
        <p class="item-price">${retro.original_price}</p>
      </div>
      <span class="remove-btn" data-key="cartItem1" data-id="${retro.id}">✕</span> <!-- NEW -->
    </div>
  `;
}
function generateCartHtml2(country) {
  return `
    <div class="cart-item">
      <img src="${country.image}" alt="Jersey" class="cart-item-image">
      <div class="cart-item-details">
        <p class="item-name">${country.item_name}</p>
        <p class="item-price">${country.current_price}</p>
        <p class="item-price">${country.original_price}</p>
      </div>
      <span class="remove-btn" data-key="cartItem2" data-id="${country.id}">✕</span> <!-- NEW -->
    </div>
  `;
}
function generateCartHtml3(boots) {
  return `
    <div class="cart-item">
      <img src="${boots.image}" alt="Jersey" class="cart-item-image">
      <div class="cart-item-details">
        <p class="item-name">${boots.item_name}</p>
        <p class="item-price">${boots.current_price}</p>
        <p class="item-price">${boots.original_price}</p>
      </div>
      <span class="remove-btn" data-key="cartItem3" data-id="${boots.id}">✕</span> <!-- NEW -->
    </div>
  `;
}
function generateCartHtml4(football) {
  return `
    <div class="cart-item">
      <img src="${football.image}" alt="Jersey" class="cart-item-image">
      <div class="cart-item-details">
        <p class="item-name">${football.item_name}</p>
        <p class="item-price">${football.current_price}</p>
        <p class="item-price">${football.original_price}</p>
      </div>
      <span class="remove-btn" data-key="cartItem4" data-id="${football.id}">✕</span> <!-- NEW -->
    </div>
  `;
}

/* 2.  One universal click-handler (event delegation)                    */
document.addEventListener('click', e => {
  const btn = e.target.closest('.remove-btn');
  if (!btn) return;                         // clicked somewhere else

  const key = btn.dataset.key;              // cartItem / cartItem1 / …
  const id  = btn.dataset.id;               // product ID to remove

  /* Pull that LS array, filter out the id, save back */
  const updated = (JSON.parse(localStorage.getItem(key) || '[]'))
                    .filter(storedId => storedId != id);
  localStorage.setItem(key, JSON.stringify(updated));

  /* Re-load data objects */
  loadCartItemsObj();  loadCartItemsObj1();
  loadCartItemsObj2(); loadCartItemsObj3(); loadCartItemsObj4();

  /* Re-render UI */
  displayCart();  displayCart1();
  displayCart2(); displayCart3(); displayCart4();
  displayPrice();                         // badge & totals
});


function getNumericPrice(priceStr) {
  return parseInt(priceStr.replace("₹", "").replace(".00", "").trim());
}

function calculateTotalMrp() {
  let total = 0;

  // Combine all cart objects into one array
  let allCartItems = [
    ...cartItemObj,
    ...cartItemObj1,
    ...cartItemObj2,
    ...cartItemObj3,
    ...cartItemObj4
  ];

  allCartItems.forEach(item => {
    total += getNumericPrice(item.original_price);
  });

  return total;
}
function calculateTotalDiscount() {
  let totalDiscount = 0;

  // Combine all cart objects into one array
  let allCartItems = [
    ...cartItemObj,
    ...cartItemObj1,
    ...cartItemObj2,
    ...cartItemObj3,
    ...cartItemObj4
  ];

  allCartItems.forEach(item => {
    totalDiscount += getNumericPrice(item.original_price) - getNumericPrice(item.current_price);
  });

  return totalDiscount;
}
function displayPrice() {
  const totalMrp = calculateTotalMrp();
  const totalDis = calculateTotalDiscount()
  let badgee = document.querySelector('.badge-ico')
  const convFee = 49;
  const totalItems =
    (cartItem?.length || 0) +
    (cartItem1?.length || 0) +
    (cartItem2?.length || 0) +
    (cartItem3?.length || 0) +
    (cartItem4?.length || 0);

    badgee.innerHTML = `${totalItems}`

  const totalAmount = totalMrp - totalDis + convFee;

  const priceContainerElement = document.querySelector('.cartpayment');

  const innerHTML5 = `
  <div class="price-summary-section">
    <div class="price-details">
      <h3>PRICE DETAILS (${totalItems} Item${totalItems > 1 ? 's' : ''})</h3>

      <div class="price-row">
        <span>Total MRP</span>
        <span>₹${totalMrp}</span>
      </div>
      <div class="price-row">
        <span>Discount on MRP</span>
        <span class="discount">-₹${totalDis}</span>
      </div>
      <div class="price-row">
        <span>Convenience Fee</span>
        <span>₹${convFee}</span>
      </div>
      <hr />
      <div class="price-row total">
        <span>Total Amount</span>
        <span>₹${totalAmount}</span>
      </div>

      <button class="place-order-btn">PLACE ORDER</button>
    </div>
  </div>
  `;

  priceContainerElement.innerHTML = innerHTML5;
}
