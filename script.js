// start in quokka.js extension(if you don't have it yet, install it from Extensions Tab in VS code):
// press ctrl+shift+p, then in the search box, type "Quokka.js: Start On Current File" and hit enter

// or alternatively, use node.js:
// press ctrl+shift+` to start a new terminal, then navigate into this folder(using cd) and type "node script.js"

let formatter = new Intl.PluralRules("en"); // feel free to change locale

function toPlural(number, value) {
  let formattedNumber = formatter.select(number); // returns "one" if value is 1, and "other" for everything else(in English)
  if (!value) {
    throw new Error("Must put in a value");
  }
  if (formattedNumber == "one") {
    return `${number} ${value}`;
  } else {
    return `${number} ${value}s`;
  }
}

console.log(
  /* put in the quantity(2) and word for singular value here('car' not 'cars'), and js will compute
   the plural form */
  toPlural(2, "car") // Output: '2 cars'
);
