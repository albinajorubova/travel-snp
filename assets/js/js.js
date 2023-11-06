const scrollHead = document.getElementById("scroll1");
const height = 450;
window.addEventListener("scroll", (ev) => {
  if (scrollY > height) {
    scrollHead.style.display = "block";
  } else {
    scrollHead.style.display = "none";
  }
});

const tabsBtn = document.querySelectorAll(".main__link");
const tabsItems = document.querySelectorAll(".navlink-item");
tabsBtn.forEach(onTabClick);

function onTabClick(item) {
  item.addEventListener("click", function () {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);

    if (!currentBtn.classList.contains("active")) {
      tabsBtn.forEach(function (item) {
        item.classList.remove("active");
      });

      tabsItems.forEach(function (item) {
        item.classList.remove("active");
      });

      currentBtn.classList.add("active");
      currentTab.classList.add("active");
    }
  });
}

const phoneInput = document.getElementById("phone-input");
const maskOptions = {
  mask: "+7 ( 9 9 9 ) 9 9 9 - 9 9 - 9 9 ",
};
const phoneMask = new Inputmask(maskOptions);
phoneMask.mask(phoneInput);
