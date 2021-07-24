let pizzaOptions = {
  breadTypes: [
    {
      name: "Yupqa",
      price: 10000
    },
    {
      name: "Qalin",
      price: 10000
    },
    {
      name: "Buxanka",
      price: 7000
    }
  ],
  sizes: [
    {
      name: "Kichik",
      size: 25,
      price: 25000
    },
    {
      name: "O'rtacha",
      size: 30,
      price: 30000
    },
    {
      name: "Katta",
      size: 35,
      price: 45000
    },
    {
      name: "Oilaviy",
      size: 40,
      price: 50000
    }
  ],
  toppings: [
    {
      name: "Pomidor",
      price: 4000
    },
    {
      name: "Tuzlangan bodring",
      price: 5000
    },
    {
      name: "Qazi",
      price: 15000
    },
    {
      name: "Kurka go'shti",
      price: 12000
    },
    {
      name: "Zaytun",
      price: 5000
    },
    {
      name: "Qo'ziqorin",
      price: 7000
    }
  ],
  addl: [
    {
      name: "Sosiska",
      price: 7000
    }
  ]
};

var elPizzaToppingCheckboxTemplate = document.querySelector('.pizza-topping-checkbox-template').content;

var elPizzaForm = document.querySelector('.pizza-form');
var elPizzaToppings = elPizzaForm.querySelector('.pizza-form__toppings');

function createToppingCheckbox (topping) {
  var elToppingCheckbox = elPizzaToppingCheckboxTemplate.cloneNode(true);
  elToppingCheckbox.querySelector('.checkbox__input').name = topping.name;
  elToppingCheckbox.querySelector('.checkbox__control').textContent = topping.name;

  return elToppingCheckbox;
}


// Options ichidagi topping qiymatlari checkboxlarini sahifaga joylash
var elToppingsFragment = document.createDocumentFragment();
pizzaOptions.toppings.forEach(function (topping) {
  elToppingsFragment.appendChild(createToppingCheckbox(topping));
});
elPizzaToppings.appendChild(elToppingsFragment);





// createToppingCheckbox({})


// #document-fragment = binnarsa
  // li.birnima
    // span

// binnarsa.classList - X
// binnarsa.querySelector('li').classList - V
