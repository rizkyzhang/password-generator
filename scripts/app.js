const lengthSetting = document.querySelector(".js-length");
const lengthValueElem = document.querySelector(".js-length-value");
const lowercaseSetting = document.querySelector(".js-lowercase");
const uppercaseSetting = document.querySelector(".js-uppercase");
const numbersSetting = document.querySelector(".js-numbers");
const symbolsSetting = document.querySelector(".js-symbols");
const generatorButton = document.querySelector(".js-generator-button");
const copyButton = document.querySelector(".js-copy-button");
const output = document.querySelector(".js-output");

function generatePassword(
  lengthValue,
  hasLowercase,
  hasUppercase,
  hasNumbers,
  hasSymbols
) {
  const UNICODE_TABLE = {
    lowercase: [97, 122],
    uppercase: [65, 90],
    numbers: [48, 57],
    symbols: [33, 47]
  }
  const unicodeIndexes = [];
  const generatedPassword = [];

  if (hasLowercase) {
    for (let i = UNICODE_TABLE.lowercase[0]; i <= UNICODE_TABLE.lowercase[1]; i++) {
      unicodeIndexes.push(i);
    }
  }

  if (hasUppercase) {
    for (let i = UNICODE_TABLE.uppercase[0]; i <= UNICODE_TABLE.uppercase[1]; i++) {
      unicodeIndexes.push(i);
    }
  }

  if (hasNumbers) {
    for (let i = UNICODE_TABLE.numbers[0]; i <= UNICODE_TABLE.numbers[1]; i++) {
      unicodeIndexes.push(i);
    }
  }

  if (hasSymbols) {
    for (let i = UNICODE_TABLE.symbols[0]; i <= UNICODE_TABLE.symbols[1]; i++) {
      unicodeIndexes.push(i);
    }
  }

  for (let i = 1; i <= lengthValue; i++) {
    const randomIndex = Math.floor(Math.random() * unicodeIndexes.length);
    const randomCharacter = String.fromCharCode(unicodeIndexes[randomIndex]);

    generatedPassword.push(randomCharacter);
  }

  output.textContent = generatedPassword.join("");
}

lengthSetting.addEventListener("input", () => {
  const lengthValue = lengthSetting.value;

  lengthValueElem.textContent = lengthValue;
});

generatorButton.addEventListener("click", () => {
  const lengthValue = +lengthSetting.value;
  const hasLowercase = lowercaseSetting.checked;
  const hasUppercase = uppercaseSetting.checked;
  const hasNumbers = numbersSetting.checked;
  const hasSymbols = symbolsSetting.checked;

  generatePassword(
    lengthValue,
    hasLowercase,
    hasUppercase,
    hasNumbers,
    hasSymbols
  );
});

