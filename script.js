let showOrder = document.querySelector('.cart-btn');
let cardClose = document.querySelector('.cart-close');
let value = 0; 
let countprice = 0; /* total price calculate*/
let itemCount = 0 /* for notification count .i use this variable*/
   
function careShow() {
  showOrder.addEventListener("click", (e) => {
    let showCard = document.querySelector('.cart-sidebar'),
      bodeyShadaw = document.querySelector('#cartOverlay');
    showCard.classList.add('open');
    bodeyShadaw.classList.add('open');

    cardClose.addEventListener('click', () => {
       showCard.classList.remove('open');
       bodeyShadaw.classList.remove('open');
    });
  })
}


function addToCard(){
  let addButton = document.querySelectorAll('.chicken-item .price-row button');

  addButton.forEach((item, index) => {

    item.addEventListener('click', () => {
      value++;
      let getItemDetels = item.closest('.chicken-item');
      /* image URL */
      let image = getItemDetels.querySelector('img');
      let imgUrl = image.getAttribute('src');
      let imgalt = image.getAttribute('alt');

      /*item titel or ptoduct Titel*/
      let itemTitel = getItemDetels.querySelector('h4');
      let itemText = itemTitel.textContent;


/*popup area */
            let allItem = document.querySelectorAll('#cartItems h4');
            let alradyExist = false;
            allItem.forEach(el => {
              if (el.textContent === itemText) {
              console.log(alradyExist = true)
              }
            });
            if (alradyExist) {
              singleItem(); // show popup
              return; // stop adding again
      }
      

      /*price */

      let priceTage = getItemDetels.querySelector(
        '.chicken-text .price-row .price span',
      );
      let priceText = priceTage.textContent;
      let cleanPrice = Number(priceText.replace(/[^\d]/g, ''));
      /* add to card or select product */
      let container = document.querySelector('#cartItems');
      container.insertAdjacentHTML(
        'beforeend',
        `<div class="cart-item">
        <img class="cart-item-img" src="${imgUrl}" alt="${imgalt}">
        <div class="cart-item-info">
          <h4>${itemText}</h4>
          <div class="ci-price" data-price="${cleanPrice}">${cleanPrice} SAR </div>
        </div>
         <div class="cart-qty">
          <button class="qty-btn substriction">−</button>
         <span class="qty-num">1</span>
           <button class="qty-btn " >+</button>
         </div>
         <button class="cart-remove"><i class="fa-solid fa-trash-can"></i></button>
      </div>`,
      );

      /*delete empty logo and text in add to card*/
        document.querySelector('.cart-empty').style.display = 'none';

      /*incress button dicriss button*/



      totalprice(priceTage);
      showAllItem();
    })

})
}

 function qntPriceCount() {
   let contain = document.querySelector('#cartItems');
   //  let countNumber = 1;
   //increase
   contain.addEventListener('click', elem => {
     let closItem = elem.target.closest('.cart-item');



     let number = closItem.querySelector('.qty-num');
     let Pricebox = closItem.querySelector('.ci-price');
  let totalPrice = document.querySelector('#cartTotal');
     let qty = Number(number.textContent);
     let basePrice = Number(Pricebox.dataset.price);
 let totalPriceCon = Number(totalPrice.textContent);

     if (
       elem.target.classList.contains('qty-btn') &&
       elem.target.textContent === '+'

     ) {
       qty++;
       number.textContent = qty;
       Pricebox.textContent = `${qty * basePrice} SAR`;
       let x = (totalPrice.textContent = totalPriceCon + basePrice); 
       console.log(x)
     }
     // decrease

     if (elem.target.classList.contains('substriction')) {
       let closItem = elem.target.closest('.cart-item');
       let number = closItem.querySelector('.qty-num');

       if (qty > 1) {
         qty--;
         number.textContent = qty;

         Pricebox.textContent = `${qty * basePrice} SAR`;
         totalPrice.textContent = totalPriceCon - basePrice;
       }
     }
   });
 }
function deletItem() {
  
  let contain = document.querySelector('#cartItems');

    const allItem = document.querySelectorAll('#cartItems');

  contain.addEventListener("click", (btn) => {

    if (btn.target.closest(".cart-remove")) {
      const removeItem = btn.target.closest('.cart-item');
      
/* notification discreses*/
        const show = document.querySelector('#cartCount');
        itemCount -= allItem.length;
      show.textContent = itemCount;
        if (itemCount < 1) {
          show.style.display = 'none'
        }

      /*product list Delete */
      const priceItem = removeItem.querySelector('.ci-price');
      const pricebox = Number(priceItem.dataset.price);
      countprice -= pricebox;
      document.querySelector('#cartTotal').textContent = countprice;
      removeItem.remove()

      /* show empy area text logo */
      if (contain.querySelectorAll(".cart-item").length===0) {
        document.querySelector('.cart-empty').style.display = 'block';
      }

    }

  })


}
function totalprice(price) {
  let displayTotal = document.querySelector('#cartTotal');
const numberPrice = Number(price.textContent.replace('SAR', ''));
 countprice += numberPrice; 

  displayTotal.textContent = countprice;
}


function showAllItem() {
  const allItem = document.querySelectorAll("#cartItems")

  const show = (document.querySelector('#cartCount'))
  itemCount += allItem.length;
  show.textContent = itemCount;
  
  if (itemCount > 0) {
    show.style.display="block"
  } console.log(itemCount);

  /*this notification another part in deletItem() funnction */
}


  function scrollToSection(id, el) {
    document
      .querySelectorAll('.item-list')
      .forEach(t => t.classList.remove('active'));
    el.classList.add('active');
    const sec = document.getElementById(id);
    const offset = 130;
    const top = sec.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
    
function singleItem(elem) {
  let showPop = document.querySelector('#toast'); 
  let PopUpText = document.querySelector('#toastMsg'); 
  PopUpText.textContent = 'item alrady added';
        showPop.classList.add('show');
  setTimeout(() => {
  showPop.classList.remove('show');
},2000)
};
function display() {
  careShow(); 
  addToCard();
  qntPriceCount(); 
  deletItem();
}
 display();
