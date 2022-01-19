/*
1. create 2 boxes
2. create a drop-down list
3. get exchange rate information
4. enter the amount to be converted
5. if you select an item from the drop-down list, it will be exchanged again according to the exchange rate
*/
let currencyRatio = {
    CAD: {
        KRW: 943.38,
        CAD: 1,
        USD: 0.78,
        unit: "Dollar",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Canada.svg/375px-Flag_of_Canada.svg.png"
    },
    USD: {
        KRW: 1203.91,
        CAD: 1.28,
        USD: 1,
        unit: "Dollar",
        img: "https://cdn-icons-png.flaticon.com/512/555/555526.png"
    },
    KRW: {
        KRW: 1,
        CAD: 0.0011,
        USD: 0.00083,
        unit: "Won",
        img: "https://cdn.countryflags.com/thumbs/south-korea/flag-400.png"
    },
}
let fromCurrency = 'CAD'
let toCurrency = 'CAD'
let toButton = document.getElementById("to-button");
let fromButton = document.getElementById("from-button");
var unitWords = ["", "thousand", "million", "billion", "trillion"];
var splitUnit = 1000;

document
    .querySelectorAll("#from-currency-list a")
    .forEach((menu) => menu.addEventListener("click", function () {
        document.getElementById("from-button").textContent = this.textContent;
        fromCurrency = this.textContent;
        fromButton.innerHTML = `<img class="flag-img"src="${currencyRatio[fromCurrency].img}"/>${fromCurrency}`;
        convert();
    }));

document
    .querySelectorAll("#to-currency-list a")
    .forEach((menu) => menu.addEventListener("click", function () {
        document.getElementById("to-button").textContent = this.textContent;
        toCurrency = this.textContent;
        toButton.innerHTML = `<img class="flag-img"src="${currencyRatio[toCurrency].img}"/>${toCurrency}`;
        convert();
    }));

function convert() {
    let amount = document.getElementById("from-input").value;
    let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency];
    document.getElementById("to-input").value = convertedAmount;
};

