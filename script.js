const currencies = [
  "USD", // US Dollar
  "EUR", // Euro
  "GBP", // British Pound
  "INR", // Indian Rupee
  "JPY", // Japanese Yen
  "AUD", // Australian Dollar
  "CAD", // Canadian Dollar
  "CHF", // Swiss Franc
  "CNY", // Chinese Yuan
  "SGD", // Singapore Dollar
  "NZD", // New Zealand Dollar
  "AED", // UAE Dirham
  "SAR", // Saudi Riyal
  "ZAR", // South African Rand
  "RUB", // Russian Ruble
  "KRW", // South Korean Won
  "HKD", // Hong Kong Dollar
  "SEK", // Swedish Krona
  "NOK", // Norwegian Krone
  "DKK", // Danish Krone
  "THB", // Thai Baht
  "MYR", // Malaysian Ringgit
  "IDR", // Indonesian Rupiah
  "PHP", // Philippine Peso
  "PKR", // Pakistani Rupee
  "BDT", // Bangladeshi Taka
  "LKR", // Sri Lankan Rupee
  "TRY", // Turkish Lira
  "BRL", // Brazilian Real
  "MXN"  // Mexican Peso
];
const selectoption=document.querySelector(".selectoption");
const tooption=document.querySelector(".otheroption");
currencies.forEach(country=>{
  const option = document.createElement("option");
  option.textContent=country;
  selectoption.appendChild(option);
}
)
currencies.forEach(country=>{
  const option = document.createElement("option");
  option.textContent=country;
  tooption.appendChild(option);
}
)
const lastresult=document.querySelector(".result");
const box=document.querySelector("#inputbox");
const button =document.querySelector(".convert-btn");
const fromcurr =document.querySelector("#from");
const tocurr =document.querySelector("#to");
button.addEventListener("click", () => {
const fromcurrency=fromcurr.value;
const tocurrency=tocurr.value;
const boxvalue=box.value;
console.log(fromcurr.value);
console.log(tocurr.value);

async function getcurrency() {
    const res=await fetch(`https://api.frankfurter.dev/v1/latest?amount=${boxvalue}&from=${fromcurrency}&to=${tocurrency}`);

    const result=await res.json();
    console.log(result);

lastresult.textContent=result.rates[tocurrency];
}
getcurrency();
});
