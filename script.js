// Form validation

const buttonForm = document.querySelector(".buttonForm");
const allElementForm = [...document.querySelectorAll(".form input")];

const form = {
  name: "",
  email: "",
  checkbox: ""
};

const checkedValue = e => {
  const { type, value } = e.target;
  if (type === "text") {
    if (e.target.value !== "") {
      form.name = true;
    } else {
      form.name = false;
    }
  } else if (type === "email") {
    if (value !== "" && value.includes("@") === true) {
      form.email = true;
    } else {
      form.email = false;
    }
  } else if (e.target.className === "rules") {
    if (e.target.checked === true) {
      form.checkbox = true;
    } else {
      form.checkbox = false;
    }
  }
};
allElementForm.map(item => {
  item.addEventListener("blur", checkedValue);
});

const SendForm = e => {
  if (form.checkbox === true && form.email === true && form.name === true) {
    alert("formularz został wysłany");
  } else {
    e.preventDefault();
    alert("nie wysłano formularza proszę poprawić błędy");
  }
};
buttonForm.addEventListener("click", SendForm);

// Button Test
const buttonTest = document.querySelector(".joinSection button");

const activateTest = () => {
  alert("właśnie zdecydowałeś sie na próbe");
};
buttonTest.addEventListener("click", activateTest);

// Slider change text

const sliderText = document.querySelector(".slider p");
const sliderPersonName = document.querySelector(".slider span");
const arrows = [...document.querySelectorAll(".arrow")];
let index = 0;

// date to slider
const slider = [
  {
    text:
      "Po dwóch miesiącach nauki widzimy już lekką zmianę w porozumiewaniu się z synem po polsku. Dziękujemy twórcom tego programu i życzymy    jeszcze więcej pomysłów i wytrwałości w tworzeniu tej strony. Oczywiście polecamy wszystkim rodzicom mieszkającym za granica ze          swoimi pociechami.",
    name: "Tata Radek"
  },
  {
    text: "Text 2",
    name: "Mama Basia"
  },
  {
    text: "Text 3",
    name: "Wujek Wiesiek"
  }
];

const ChangeSlider = e => {
  if (e.target.className === "arrowRight arrow") {
    if (index >= slider.length - 1) {
      index = 0;
    } else {
      index++;
    }
  } else if (e.target.className === "arrowLeft arrow") {
    if (index <= 0) {
      index = slider.length - 1;
    } else {
      index--;
    }
  }
  sliderText.textContent = slider[index].text;
  sliderPersonName.textContent = slider[index].name;
};

arrows.map(arrow => {
  arrow.addEventListener("click", ChangeSlider);
});

// Button End "przetestuj polonijke"

const buttonTestEnd = document.querySelector(".buttonTest");
buttonTestEnd.addEventListener("click", () =>
  alert("właśnie wybrałeś testowanie polonijki")
);
