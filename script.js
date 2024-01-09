document.addEventListener("DOMContentLoaded", function(){
  //добавление фона nav при скролле
  let nav = document.getElementById("navbar");
  window.addEventListener('scroll', function() {
    if(window.scrollY != 0 && nav.style.backgroundColor != "white"){
      nav.style.backgroundColor = "white";
    }else if(window.scrollY == 0 ) {
      nav.style.backgroundColor = ""
    };
  });
  //бургег меню
  let navBtn = document.querySelector('.nav-btn');
  navBtn.addEventListener('click', function(){
    navBtn.classList.toggle('active');
    nav.classList.toggle('active');

  });
  //Фильтр в каталоге
  try {
    let filter = document.getElementById("filter");
    let filterButtons = filter.children;
    let cataloge = document.getElementById("cataloge");
    let elements;
    let span;
    let activeButton = filterButtons[0]
    let pageNumber
    let pageSelect = document.getElementById("pageSelect")
    let pageArrow = document.getElementById("pageArrow")
    let pageElements = []
    let visibleElements = cataloge.children
    let hidePageElements = []
    function addPages(){
      if(!(pageNumber)){
        pageNumber = Math.ceil(cataloge.children.length / 9)  
      }
      for(let i = 0; i < pageNumber; i++){   //добавление страниц
        let pageButton = document.createElement('button');
        pageButton.className = "miniBtn";
        pageButton.textContent = i + 1;
        pageSelect.append(pageButton);
      }
    }
    //Нажатие на кнопки страниц
    function makeOnclickPageEvent(){
      for (let i = 0; i < pageSelect.children.length; i++) {
        pageSelect.children[i].addEventListener('click', function (){
          //Показ активной кнопки
          activePage.classList.remove("active")
          activePage = pageSelect.children[i]
          activePage.classList.add("active")
          pageElements = [] //Удаление старых элементов выбранной страницы из объекта
          //Обнулять скрывание элементов вне страницы
          for(let j = 0; j < hidePageElements.length; j++){
            hidePageElements[j].style.display = "block";
            }
          //Создание объекта с элементами выбранной страницы
          for(let j = 0; j < 9; j++){
            let oneOfVisibleGoods = visibleElements[j + 9*(activePage.textContent - 1)]
            if(oneOfVisibleGoods){
              pageElements.push(oneOfVisibleGoods)
            } else{
              break
            }
          }
          hidePageElements = Array.from(cataloge.children).filter(elem => pageElements.indexOf(elem) === -1)
          for(let j = 0; j < hidePageElements.length; j++){
            hidePageElements[j].style.display = "none";
            }
        });}
    }
    addPages();
    makeOnclickPageEvent();
    let activePage = pageSelect.children[0]
    activePage.classList.add("active")
    for (let i = 0; i <filterButtons.length; i++) {
      filterButtons[i].addEventListener('click', function () {
        //показ нажатой кнопки
        activeButton.classList.remove("active")
        activeButton = filterButtons[i]
        activeButton.classList.add("active")
        //Отмена старых изменений при нажатие новой кнопки
        if(elements){
          document.getElementById("notHaveGoods").style.display = "none"  //Убрать "Товары отсутствуют"
          for(let j = 0; j < elements.length; j++){     //вернуть убранные товары
            elements[j].style.display = "block";
          }
        }
        while(pageSelect.children.length != 0){   //убрать прошлые страницы
          pageSelect.children[0].remove()
        }
        elements = cataloge.querySelectorAll(".cataloge > div:not(." + filterButtons[i].textContent + ")")
        if(filterButtons[i].textContent != 'Все'){
          visibleElements = cataloge.querySelectorAll(".cataloge > div." + filterButtons[i].textContent)
        }else{
          visibleElements = cataloge.children
        }
          //фильтрация товаров
        if(filterButtons[i].textContent != "Все"){
          if(elements.length == cataloge.children.length){
            document.getElementById("notHaveGoods").style.display = "block"
          }
          for(let j = 0; j < elements.length; j++){
          elements[j].style.display = "none";
          }
          //Подсчет видимых товаров
          numberOfGoods[0].querySelectorAll("span")[0].textContent = cataloge.children.length - elements.length;
          numberOfGoods[1].querySelectorAll("span")[0].textContent = cataloge.children.length - elements.length; 
          pageNumber = 1
        } else {
          numberOfGoods[0].querySelectorAll("span")[0].textContent = 12;
          numberOfGoods[1].querySelectorAll("span")[0].textContent = 12;
          pageNumber = Math.ceil(elements.length / 9)  //подсчет страниц
        }
        addPages();
        makeOnclickPageEvent();
      });}
    //Нажатие на стрелку в выборе страниц
    pageArrow.addEventListener('click', function(){
      //Показ следующей активной кнопки при нажатие на стрелку
      activePage.classList.remove("active")
      activePage = pageSelect.children[activePage.textContent]
      if(!(activePage)){
        activePage = pageSelect.children[0]
      }
      activePage.classList.add("active")
    });
    //Подсчет товаров для счетчика на сайте
    let numberOfGoods = document.getElementsByClassName("numberOfGoods")
    for (let i = 0; i < numberOfGoods.length; i++){
      span = numberOfGoods[i].querySelectorAll("span")
      span[1].textContent = cataloge.children.length;
    }
    
  }catch(error) {
    console.log(error); 
    }
  //слайдер на главной странице
  $('.slider-for').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    asNavFor: '.slider-nav',
    fade: true,
  });
  $('.slider-nav').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    dots:true,
    asNavFor: '.slider-for',
    fade: true,
  });
  $('.single-item').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    fade: true,
    dots:true,
  });
});


