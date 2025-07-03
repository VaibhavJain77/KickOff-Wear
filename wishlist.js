let wishlistItem;
let wishlistItem1;
let wishlistItem2;
let wishlistItem3;
let wishlistItem4;

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
load()
load1()
load2()
load3()
load4()
function load(){


wishIcon() 
}
function load1(){


wishIcon() 
}
function load2(){


wishIcon() 
}
function load3(){


wishIcon() 
}
function load4(){


wishIcon() 
}


function wishClub(clubId){
 wishlistItem.push(clubId)
 localStorage.setItem('wishlistItem', JSON.stringify(wishlistItem))
 wishIcon()
}
function wishRetro(retroId){
 wishlistItem1.push(retroId)
 localStorage.setItem('wishlistItem1', JSON.stringify(wishlistItem1))
 wishIcon()
}
function wishCountry(countryId){
 wishlistItem2.push(countryId)
 localStorage.setItem('wishlistItem2', JSON.stringify(wishlistItem2))
 wishIcon()
}
function wishBoots(bootsId){
 wishlistItem3.push(bootsId)
 localStorage.setItem('wishlistItem3', JSON.stringify(wishlistItem3))
 wishIcon()
}
function wishFootball(footballId){
 wishlistItem4.push(footballId)
 localStorage.setItem('wishlistItem4', JSON.stringify(wishlistItem4))
 wishIcon()
}
function wishIcon() {
  let total1 =
    (wishlistItem?.length || 0) +
    (wishlistItem1?.length || 0) +
    (wishlistItem2?.length || 0) +
    (wishlistItem3?.length || 0) +
    (wishlistItem4?.length || 0);

  let wishIconElement = document.querySelector('.wishlist0');

  if (total1 > 0) {
    wishIconElement.style.visibility = 'visible';
    wishIconElement.innerText = total1;
  } else {
    wishIconElement.style.visibility = 'hidden';
  }
}
