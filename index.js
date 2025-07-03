let cartItem;
let cartItem1;
let cartItem2;
let cartItem3;
let cartItem4;

onLoad()
onLoad1()
onLoad2()
onLoad3()
onLoad4()
function onLoad(){
displayScreen()
let cartItemStr = localStorage.getItem('cartItem')
cartItem = cartItemStr ? JSON.parse(cartItemStr) : [];
badgeIcon() 
}
function onLoad1(){
displayScreen1()
let cartItemStr1 = localStorage.getItem('cartItem1')
cartItem1 = cartItemStr1 ? JSON.parse(cartItemStr1) : [];
badgeIcon() 
}
function onLoad2(){
displayScreen2()
let cartItemStr2 = localStorage.getItem('cartItem2')
cartItem2 = cartItemStr2 ? JSON.parse(cartItemStr2) : [];
badgeIcon() 
}
function onLoad3(){
displayScreen3()
let cartItemStr3 = localStorage.getItem('cartItem3')
cartItem3 = cartItemStr3 ? JSON.parse(cartItemStr3) : [];
badgeIcon() 
}
function onLoad4(){
displayScreen4()
let cartItemStr4 = localStorage.getItem('cartItem4')
cartItem4 = cartItemStr4 ? JSON.parse(cartItemStr4) : [];
badgeIcon() 
}


function addToCartClub(clubId){
 cartItem.push(clubId)
 localStorage.setItem('cartItem', JSON.stringify(cartItem))
 badgeIcon()
}
function addToCartRetro(retroId){
 cartItem1.push(retroId)
 localStorage.setItem('cartItem1', JSON.stringify(cartItem1))
 badgeIcon()
}
function addToCartCountry(countryId){
 cartItem2.push(countryId)
 localStorage.setItem('cartItem2', JSON.stringify(cartItem2))
 badgeIcon()
}
function addToCartBoots(bootsId){
 cartItem3.push(bootsId)
 localStorage.setItem('cartItem3', JSON.stringify(cartItem3))
 badgeIcon()
}
function addToCartFootball(footballId){
 cartItem4.push(footballId)
 localStorage.setItem('cartItem4', JSON.stringify(cartItem4))
 badgeIcon()
}
function badgeIcon() {
  let total =
    (cartItem?.length || 0) +
    (cartItem1?.length || 0) +
    (cartItem2?.length || 0) +
    (cartItem3?.length || 0) +
    (cartItem4?.length || 0);

  let badgeIconElement = document.querySelector('.badge-icon');

  if (total > 0) {
    badgeIconElement.style.visibility = 'visible';
    badgeIconElement.innerText = total;
  } else {
    badgeIconElement.style.visibility = 'hidden';
  }
}

function displayScreen(){
                 // Club Container

let clubContainerElement = document.querySelector('.club');
let innerHtml = '';

clubData.forEach(club => {
  innerHtml += `
   <div class="items-containers">
        <div class="item-container">
          <div class="img-container">
            <img
              src="${club.image}"
              alt="Club Jersey"
              class="item-image"
            />
            <div class="button-wrap">
              <button class="wishlist" onclick="wishClub('${club.id}')">♡</button>

              <div class="plus-wrap">
              <button class="plus-button" onclick = "addToCartClub(${club.id})"><i class="fa fa-plus"></i></button>
              <button class="add-button" onclick = "addToCartClub(${club.id})">Add to cart</button>
              </div>
            </div>
          </div>
          <div class="rating">${club.rating.stars} || ${club.rating.reviews}</div>
          <div class="name">
             ${club.item_name}
          </div>
          <div class="price">
            <span class="original"> ${club.original_price}</span>
            <span class="current"> ${club.current_price}</span>
          </div>
        </div>
      </div>
  `
})
clubContainerElement.innerHTML = innerHtml;
}
function displayScreen1(){
let retroContainerElement = document.querySelector('.retro');
let innerHtml1 = '';

retroData.forEach(retro => {
  innerHtml1 += `
   <div class="items-containers">
        <div class="item-container">
          <div class="img-container">
            <img
              src="${retro.image}"
              alt="Club Jersey"
              class="item-image"
            />
            <div class="button-wrap">
              <button class="wishlist" onclick = "wishClub('${retro.id}')">♡</button>
              <div class="plus-wrap">
              <button class="plus-button" onclick = "addToCartRetro(${retro.id})"><i class="fa fa-plus"></i></button>
              <button class="add-button" onclick = "addToCartRetro(${retro.id})">Add to cart</button>
              </div>
            </div>
          </div>
          <div class="rating">${retro.rating.stars} || ${retro.rating.reviews}</div>
          <div class="name">
             ${retro.item_name}
          </div>
          <div class="price">
            <span class="original"> ${retro.original_price}</span>
            <span class="current"> ${retro.current_price}</span>
          </div>
        </div>
      </div>
  `
})
retroContainerElement.innerHTML = innerHtml1;

}
function displayScreen2(){
  let countryContainerElement = document.querySelector('.country');
let innerHtml2 = '';

countryData.forEach(country => {
  innerHtml2 += `
   <div class="items-containers">
        <div class="item-container">
          <div class="img-container">
            <img
              src="${country.image}"
              alt="Club Jersey"
              class="item-image"
            />
            <div class="button-wrap">
              <button class="wishlist" onclick = "wishClub('${country.id}')">♡</button>
              <div class="plus-wrap">
              <button class="plus-button" onclick = "addToCartCountry(${country.id})"><i class="fa fa-plus"></i></button>
              <button class="add-button" onclick = "addToCartCountry(${country.id})">Add to cart</button>
              </div>
            </div>
          </div>
          <div class="rating">${country.rating.stars} || ${country.rating.reviews}</div>
          <div class="name">
             ${country.item_name}
          </div>
          <div class="price">
            <span class="original"> ${country.original_price}</span>
            <span class="current"> ${country.current_price}</span>
          </div>
        </div>
      </div>
  `
})
countryContainerElement.innerHTML = innerHtml2;
}
function displayScreen3(){
  let bootsContainerElement = document.querySelector('.boots');
let innerHtml3 = '';bootsData.forEach(boots => {
  innerHtml3 += `
   <div class="items-containers">
        <div class="item-container">
          <div class="img-container">
            <img
              src="${boots.image}"
              alt="Club Jersey"
              class="item-image"
            />
            <div class="button-wrap">
              <button class="wishlist" onclick = "wishClub('${boots.id}')">♡</button>
              <div class="plus-wrap">
              <button class="plus-button" onclick = "addToCartBoots(${boots.id})"><i class="fa fa-plus"></i></button>
              <button class="add-button" onclick = "addToCartBoots(${boots.id})">Add to cart</button>
              </div>
            </div>
          </div>
          <div class="rating">${boots.rating.stars} || ${boots.rating.reviews}</div>
          <div class="name">
             ${boots.item_name}
          </div>
          <div class="price">
            <span class="original"> ${boots.original_price}</span>
            <span class="current"> ${boots.current_price}</span>
          </div>
        </div>
      </div>
  `
})
bootsContainerElement.innerHTML = innerHtml3;
}
function displayScreen4(){
  let footballContainerElement = document.querySelector('.ball');
let innerHtml4 = '';
footballData.forEach(football => {
  innerHtml4 += `
   <div class="items-containers">
        <div class="item-container">
          <div class="img-container">
            <img
              src="${football.image}"
              alt="Club Jersey"
              class="item-image"
            />
            <div class="button-wrap">
              <button class="wishlist" onclick = "wishClub('${football.id}')">♡</button>
              <div class="plus-wrap">
              <button class="plus-button" onclick = "addToCartFootball(${football.id})"><i class="fa fa-plus"></i></button>
              <button class="add-button" onclick = "addToCartFootball(${football.id})">Add to cart</button>
              </div>
            </div>
          </div>
          <div class="rating">${football.rating.stars} || ${football.rating.reviews}</div>
          <div class="name">
             ${football.item_name}
          </div>
          <div class="price">
            <span class="original"> ${football.original_price}</span>
            <span class="current"> ${football.current_price}</span>
          </div>
        </div>
      </div>
  `
})
footballContainerElement.innerHTML = innerHtml4;
}

