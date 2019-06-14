// Form validation

const buttonForm = document.querySelector(".buttonForm");
const allElementForm = [...document.querySelectorAll(".form input")];
const spanPermision = document.querySelector(".permission span.rules ");
const statement = document.querySelector(".statement");
const statementButton = document.querySelector(".statementButton");
const statementText = document.querySelector(".statement p");
const form = {
  name: "",
  email: "",
  checkbox: ""
};

//function checked Form

const checkedValue = e => {
  const { type, value, className } = e.target;
  if (className === "name") {
    if (e.target.value !== "") {
      e.target.style.borderColor = "#939393";
      form.name = true;
    } else {
      e.target.style.borderColor = "#ff0000";
      form.name = false;
    }
  } else if (type === "email") {
    if (value !== "" && value.includes("@") === true) {
      form.email = true;
      e.target.style.borderColor = "#939393";
    } else {
      form.email = false;
      e.target.style.borderColor = "#ff0000";
    }
  } else if (className === "rules") {
    if (e.target.checked === true) {
      form.checkbox = true;
      spanPermision.style.color = "#141e46";
    } else {
      form.checkbox = false;
      spanPermision.style.color = "#ff0000";
    }
  }
};
allElementForm.map(item => {
  item.addEventListener("blur", checkedValue);
});

const SendForm = e => {
  e.preventDefault();
  statement.style.left = "0%";
  statementButton.addEventListener("click", () => {
    statement.style.left = "200%";
  });
  if (form.checkbox === true && form.email === true && form.name === true) {
    statementText.textContent = "Gratulujemy twój formularz został wysłany";
    allElementForm.forEach(item => {
      if (
        item.type === "email" ||
        item.type === "text" ||
        item.type === "tel"
      ) {
        item.value = "";
      } else if (item.type === "checkbox") {
        item.checked = false;
      }
    });
  } else {
    statementText.textContent =
      "Niestety formularz nie został wysłany, należy poprawić błędy zaznaczone na czerwono";
    allElementForm.forEach(item => {
      if (
        (item.className === "email" && form.email === "") ||
        (item.className === "name" && form.name === "")
      ) {
        item.style.borderColor = "#ff0000";
      } else if (item.className === "rules" && form.checkbox === "") {
        spanPermision.style.color = "#ff0000";
      }
    });
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
