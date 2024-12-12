

/*------Кнопка О компании в Хедере-------------------------------------------------------------------------header--*/

//  Показ dropdown по клику


// Кнопка О компании
const btn = document.querySelector(".header__navlinkabout");

// Выпадающее меню
const dropdown = document.querySelector(".menu");


const activeClassdropdowns = "dropdown__active";
const activeClassbtns = "btn__active";


btn?.addEventListener('click', (e)=>{
 
  dropdown.classList.toggle('menu__active');
 
});

document.addEventListener( 'click', (e) => {
	const withinBoundaries = e.composedPath().includes(dropdown);
  const withinBtn = e.composedPath().includes(btn);


 
	if ( ! withinBoundaries === ! withinBtn) {
    dropdown?.classList.remove('menu__active');
  
	}



  // закрыть меню в Фильтре товары по клику вне меню
  let target = e.target;
  
  let menu = document.querySelectorAll(".dropdownproduct");

  menu.forEach(elem => {
    if (!target.closest(".product__filteritem")) {
      elem.classList.remove(activeClassdropdownsProduct);
      document.querySelectorAll(".navbottom__link").forEach(el => {
        el.classList.remove(activeClassbtns);
      })
    }
  });
});



/*------Вакансии--подробнее модальное окно-------------------------------------------------------------------------header--*/
// модальное окно Вакансия

let btnmore = document.querySelectorAll('.vacanciescard__more');
let vacancyModal = document.querySelector('.modalvacancy');


btnmore.forEach((e)=>{
    e.addEventListener('click', function () {

    
        vacancyModal.classList.add('modal--active');
      
        document.body.classList.add('stop-scroll');
      
      });
});

  


// Закрыть все модальные окна на кнопку КРЕСТИК

let btnCloseAll = document.querySelectorAll('.btnclose');

let modalPageAll = document.querySelectorAll('.modalwindow');

// Прикрепим событие клик на каждую кнопку крестик, чтобы закрыть модальное окно.

btnCloseAll.forEach((e)=>{
  e.addEventListener('click', ()=>{
    modalPageAll.forEach((e)=>{
      e.classList.remove('modal--active');
      document.body.classList.remove('stop-scroll');

    });
  })
});

// Закрыть все модальные окна по клику вне центрального окна

// Прикрепим событие клик на каждое модальное окно, чтобы его закрыть.

modalPageAll.forEach((el)=>{
  el.addEventListener('click', (e)=>{
    let modalActive = document.querySelector('.modal--active');

    

    if(e.target===modalActive) {
      e.target.classList.remove('modal--active');
      document.body.classList.remove('stop-scroll');

    }
  })
});



/*------Заказать звонок модальное окно-------------------------------------------------------------------------header--*/
// модальное окно Заказать звонок

let btnRequestCall= document.querySelector('.header__call');
let requestCallModal = document.querySelector('.modalcall');


btnRequestCall.addEventListener('click', function () {

    // burger.classList.toggle('burger--active');
  
    requestCallModal.classList.add('modal--active');
  
    document.body.classList.add('stop-scroll');
  
  });


/*------Оставить заявку модальное окно-------------------------------------------------------------------------header--*/
// модальное окно Оставить заявку

let btnLeaveRequest= document.querySelector('.footer__btn');
let leaveRequestModal = document.querySelector('.modalrequest');


btnLeaveRequest.addEventListener('click', function () {
  
  leaveRequestModal.classList.add('modal--active');

  document.body.classList.add('stop-scroll');
  
});

/*------Карточка товара Оставить заявку модальное окно-------------------------------------------------------------------------header--*/
// модальное окно Оставить заявку

let btnOrder= document.querySelector('.productitem__costbtnorder');
let orderModal = document.querySelector('.modalrequest');


btnOrder?.addEventListener('click', function () {
  
  orderModal.classList.add('modal--active');

  document.body.classList.add('stop-scroll');
  
});

/*------Карточка товара Заказать звонок модальное окно-------------------------------------------------------------------------header--*/
// модальное окно Заказать звонок

let btnRequestCallCard = document.querySelector('.productitem__call');
let requestCallModalCard = document.querySelector('.modalcall');


btnRequestCallCard?.addEventListener('click', function () {

    // burger.classList.toggle('burger--active');
  
    requestCallModalCard.classList.add('modal--active');
  
    document.body.classList.add('stop-scroll');
  
  });

/*------Скачать прайс-лист модальное окно-------------------------------------------------------------------------header--*/
// модальное окно Скачать прайс-лист

let btnDownloadPrice= document.querySelectorAll('.banner__price');
let downloadPriceModal = document.querySelector('.modalprice');


btnDownloadPrice?.forEach((e)=>{
  e.addEventListener('click', function () {
  
    downloadPriceModal.classList.add('modal--active');
  
    document.body.classList.add('stop-scroll');
    
  });
});


/*------Отправить резюме модальное окно-------------------------------------------------------------------------header--*/
// модальное окно Отправить резюме

let btnSendResume = document.querySelector('.modalvacancy__button');
let btnSendResumePage = document.querySelector('.vacancies__btn');

let sendResumeModal = document.querySelector('.modalsendresume');


btnSendResume?.addEventListener('click', function () {
  
  sendResumeModal.classList.add('modal--active');

  document.body.classList.add('stop-scroll');

  

  vacancyModal.classList.remove('modal--active');

  
});

btnSendResumePage?.addEventListener('click', function () {
  
  sendResumeModal.classList.add('modal--active');

  document.body.classList.add('stop-scroll');

  

  vacancyModal.classList.remove('modal--active');

  
});

/*------Оставить отзыв модальное окно-------------------------------------------------------------------------header--*/
// модальное окно Оставить отзыв

let btnModalReview= document.querySelector('.reviewspage__btn');
let modalreviewModal = document.querySelector('.modalreview ');

btnModalReview?.addEventListener('click', function () {
  
  modalreviewModal.classList.add('modal--active');

  document.body.classList.add('stop-scroll');
  
});



/*------Бургер-header-------------------------------------------------------------------------header--*/
// Бургер-header
let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.header__navlink');

burger.addEventListener('click', function () {

  

  burger.classList.toggle('burger--active');

  menu.classList.toggle('hader__nav--active');

  document.body.classList.toggle('stop-scroll');

});

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    burger.classList.remove('burger--active');

    menu.classList.remove('hader__nav--active');

    document.body.classList.remove('stop-scroll');

  });
});


//---------------Слайдер Баннер Главная страница--------------

try {
  const swiper = new Swiper('.swiper', {
    loop: true,
    spaceBetween: 44,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    autoplay: {
      delay: 3000,
      },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    speed: 2300,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-nextbanner',
      prevEl: '.swiper-button-prevbanner',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
} catch (error) {
  console.log(error);
  
}

//---------------Слайдер Сертификаты Главная страница--------------

// document.addEventListener("DOMContentLoaded", () => {

// });

try {
  const swiper2 = new Swiper('.swiper2', {
    loop: true,
    spaceBetween: 44,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    slidesPerView: 4,
      
    // Navigation arrows
    navigation: {
      
      nextEl: '.swiper-button-certnext',
      prevEl: '.swiper-button-certprev',
    },
  
    breakpoints: {

      300: {
        slidesPerView: 2,
        spaceBetween: 30,
      },


      570: {
        slidesPerView: 2,
        spaceBetween: 38,
      },

      910: {
        slidesPerView: 3,
        spaceBetween: 50
      },

      1230: {
        slidesPerView: 4,
        spaceBetween: 44
      }
    },
  });
} catch (error) {
  console.log(error);
  
}


//---------------Слайдер Баннер Каталог--------------



//-----Карта Доставка ---------------delivery

/*------MAP-------------------------------------------------------------------------MAP--*/

try {
  
  ymaps?.ready(init);
function init() {
  var myMap = new ymaps.Map("delivery__mapinner", {
   
    center: [56.838367, 60.603358],
   
    controls: ['geolocationControl', 'zoomControl'],

    zoom: 14
  },
    {
      suppressMapOpenBlock: true,
      geolocationControlSize: "large",
      geolocationControlPosition: { top: "350px", right: "20px" },
      geolocationControlFloat: 'none',
      zoomControlSize: "small",
      zoomControlFloat: "none",
      zoomControlPosition: { top: "270px", right: "20px" }
    }
  );

  myMap.behaviors.disable('scrollZoom');
  
}
} catch (error) {
  console.log('Карта Ошибка');
  
}


/*------Табы в меню карточки товара-------------------------------------------------------------------------Табы--*/



let tabsBtn = document.querySelectorAll('.productitem__menulink'); 
let tabsItem = document.querySelectorAll('.productitem__tabwrapper');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) { btn.classList.remove('productitem__menulink--active') });
    e.currentTarget.classList.add('productitem__menulink--active');

    tabsItem.forEach(function (element) { element.classList.remove('productitem__tabwrapper--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('productitem__tabwrapper--active');
  });
});


/*------Слайдер в меню карточки товара-------------------------------------------------------------------------Слайдер--*/

try {
  const swiper7 = new Swiper('.productitem__swiper', {
    loop: true,
    // spaceBetween: 44,
    slidesPerView: 4,
    // observer: true,
    // observeParents: true,
    // observeSlideChildren: true,
    // autoplay: {
    //   delay: 3000,
    //   },
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    // },
    // speed: 2300,
    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-nextbanner',
    //   prevEl: '.swiper-button-prevbanner',
    // },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });
} catch (error) {
  console.log(error);
  
}

/*------Табы в меню карточки товара-------------------------------------------------------------------------Табы--*/



let tabsBtn1 = document.querySelectorAll('.productitem__cardtopleftitem'); 
let tabsItem1 = document.querySelectorAll('.productitem__tabwrapper12');
let block = document.querySelector('.productitem__cardtopleftimg');

tabsBtn1.forEach(function (element) {
  element.addEventListener('click', function (e) {
    // получить все стили элемента

    const styles = window.getComputedStyle(e.target);
    
    
    block.style.backgroundImage = styles.backgroundImage;

    const path = e.currentTarget.dataset.path;

    tabsBtn1.forEach(function (btn) { btn.classList.remove('productitem__cardtopleftitem--active') });
    e.currentTarget.classList.add('productitem__cardtopleftitem--active');

  });
});



/*------dropdown__-------------------------------------------------------------------------dropdown__--*/
//  Показ dropdown по клику

const btns = document.querySelectorAll(".product__filteritem");


const dropdowns = document.querySelectorAll(".dropdownproduct");
const activeClassdropdownsProduct = "dropdownproduct__active";
const activeClassbtnsProduct = "btn__active";

btns.forEach(item => {
  

   // выбор фильтра
       

   let checkAll = item.querySelectorAll('.check-label');

   let filterTextFirst = item.querySelector('.product__filterlink').textContent;
  
  item.addEventListener("click", function (element) {

   

   

   Array.from(checkAll).forEach((el)=>{
    el.addEventListener('click', function(e){
     e.stopPropagation();

        
    item.querySelector('.product__filterlink').textContent = this.querySelector('.check-text').textContent;
    item.querySelector('.product__filterlink').style.color = '#4caf50';
    

    let filterLinkCross = item.querySelector('.product__filterlinkcross');
    
    
    filterLinkCross.classList.add('filterlinkcross--active');

    filterLinkCross.addEventListener('click', function(e){
      e.stopPropagation();
      filterLinkCross.classList.remove('filterlinkcross--active');
      item.querySelector('.product__filterlink').textContent = filterTextFirst;
      item.querySelector('.product__filterlink').style.color = '#565656';
    });



    });
   }); 


    let DropThis = this.querySelector(".dropdownproduct");
    
    
    // работает. закрывает по клику на другие кнопки
    dropdowns.forEach(el => {
      if (el != DropThis) {
        el.classList.remove(activeClassdropdownsProduct)
      }
    });

    btns.forEach(el => {
      if (el != this) {
        el.classList.remove(activeClassbtnsProduct)
      }
    });
    

    DropThis.classList.toggle(activeClassdropdownsProduct);


    document.querySelectorAll(".header__navlink").forEach(i => {

      i.addEventListener("click", function () {

        i.classList.add(activeClassbtnsProduct);

      })
    })

  })
});

// Выбор фильтра 


let productSortBtn = document.querySelector('.product__sort');

//Элементы в списке сортировка

let itemSortArr = document.querySelectorAll('.product__sortdropdownproductitem');

let filterTextFirst = productSortBtn?.querySelector('.product__filterlink').textContent;

productSortBtn?.addEventListener("click", function (element) {

    

  Array.from(itemSortArr).forEach((el)=>{
   el.addEventListener('click', function(e){
    e.stopPropagation();

    
  productSortBtn.querySelector('.product__sortlink').textContent = this.textContent;

   productSortBtn.querySelector('.product__sortlink').style.color = '#4caf50';
  
   
   
    let filterLinkCross = productSortBtn.querySelector('.product__filterlinkcross');
      
      
    filterLinkCross.classList.add('filterlinkcross--active');

    filterLinkCross.addEventListener('click', function(e){
      e.stopPropagation();
      filterLinkCross.classList.remove('filterlinkcross--active');
      productSortBtn.querySelector('.product__filterlink').textContent = filterTextFirst;
      productSortBtn.querySelector('.product__filterlink').style.color = '#565656';
    });



   });
  }); 

 })
 

/*------Табы-Категории-------------------------------------------------------------------------Табы--*/
// Табы 

let tabsBtnCatalog = document.querySelectorAll('.catalog__categoryitem');
let tabsItemCatalog = document.querySelectorAll('.catalog__infowrapper');

tabsBtnCatalog.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtnCatalog.forEach(function (btn) { btn.classList.remove('categoryitem--active') });
    e.currentTarget.classList.add('categoryitem--active');

    tabsItemCatalog.forEach(function (element) { element.classList.remove('catalog__infowrapper--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('catalog__infowrapper--active');
  });
});



