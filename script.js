const nameInformation = document.querySelector("#name-information input");
const numberInformation = document.getElementById("number-information");
const cvv2 = document.querySelector(".cvv2");
const cardCvv2 = document.querySelector('#card-cvv2');
const cardName = document.querySelector("#card-name");
const cardNumber = document.getElementById('card-number');
const cardInfo = document.getElementById("card-info");

const inputs = Array.from(numberInformation.querySelectorAll('input'));
const inputCard = Array.from(cardNumber.querySelectorAll('input'));

cardName.value = "نام و نام خانودادگی :";

// ذخیره نام دارنده کارت
nameInformation.addEventListener('input', () => {
    cardName.value = nameInformation.value;
    localStorage.setItem("cardHolder", nameInformation.value);
    saveCardToLocalStorage(
        inputs.map(input => input.value).join(''),
        nameInformation.value,
        cvv2.value
    );
});

// ذخیره cvv2
cvv2.addEventListener('input', () => {
    cardCvv2.value = cvv2.value;
    localStorage.setItem("cvv2", cvv2.value);
    saveCardToLocalStorage(
        inputs.map(input => input.value).join(''),
        nameInformation.value,
        cvv2.value
    );
});

// هدایت اتومات بین inputهای شماره کارت
function next(inputs, inputCard) {
    inputs.forEach((input, index) => {
        input.addEventListener('input', () => {
            inputCard[index].value = input.value;
            if (input.value.length === 4) {
                const nextInput = inputs[index + 1];
                if (nextInput) {
                    nextInput.focus();
                }
            }

            // ذخیره شماره کارت در localStorage
            const allNumbers = inputs.map(inp => inp.value).join('');
            localStorage.setItem("cardNumber", allNumbers);
            saveCardToLocalStorage(allNumbers, nameInformation.value, cvv2.value);
        });
    });
}

// امکان بازگشت با Backspace
function prevInput(inputs) {
    inputs.forEach((input, index) => {
        input.addEventListener('keydown', (e) => {
            if (input.value.length === 0 && e.key === 'Backspace') {
                const prevInput = inputs[index - 1];
                if (prevInput) {
                    prevInput.focus();
                }
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const storedData = loadCardFromLocalStorage();
    const storedCardNumber = storedData.cardNumber;
    const storedCardHolder = storedData.cardHolder;
    const storedCvv2 = storedData.cvv2;

    if (storedCardNumber.length === 16) {
        for (let i = 0; i < 4; i++) {
            const part = storedCardNumber.slice(i * 4, i * 4 + 4);
            inputs[i].value = part;
            inputCard[i].value = part;
        }
    }

    nameInformation.value = storedCardHolder;
    cardName.value = storedCardHolder;

    cvv2.value = storedCvv2;
    cardCvv2.value = storedCvv2;

    next(inputs, inputCard);
    prevInput(inputs);
});

// فراخوانی به‌روزرسانی تصویر کارت در هنگام تغییر شماره کارت
inputs.forEach(input => {
    input.addEventListener('input', () => {
        const card = document.querySelector("#purple-card");
        const logo = document.getElementById("logo");
        const allNumbers = inputs.map(input => input.value).join('');
        if (allNumbers.length >= 6) {
            const bankNumber = allNumbers.slice(0, 6);
            const cardNumberInputs = document.querySelectorAll('#card-number input');
            const boxCvv2 = document.getElementById("cvv2-box");
            switch (bankNumber) {
                case "603799":
                    card.style.backgroundImage = "url('./img/meli-new.png')";
                    card.style.backgroundSize = "cover";
                    card.style.backgroundPosition = "center center";
                    logo.style.display = "none";
                    cardName.style.color = "#66502B";
                    boxCvv2.style.color = "#66502B";
                    cardNumberInputs.forEach(input => {
                        input.style.color = "#66502B";
                    });
                    cardNumber.style.marginTop = '130px';              
                    break;

                case "603770":
                    card.style.backgroundImage = "url('./img/keshavarzy.jpg')";
                    card.style.backgroundSize = "cover";
                    card.style.backgroundPosition = "center center";
                    logo.style.display = "none";
                    cardName.style.color = "#C52A22";
                    boxCvv2.style.color = "#C52A22";
                    cardNumberInputs.forEach(input => {
                        input.style.color = "#C52A22";
                    });
                    cardNumber.style.marginTop = '130px';              
                    break;

                case "502229":
                    card.style.backgroundImage = "url('./img/pasargad.jpg')";
                    card.style.backgroundSize = "cover";
                    card.style.backgroundPosition = "center center";
                    logo.style.display = "none";
                    cardName.style.color = "#FF9E01";
                    boxCvv2.style.color = "#FF9E01";
                    cardNumberInputs.forEach(input => {
                        input.style.color = "#FF9E01";
                    });
                    cardNumber.style.marginTop = '130px';              
                    break;

                case "621986":
                    card.style.backgroundImage = "url('./img/saman_magic.png')";
                    card.style.backgroundSize = "cover";
                    card.style.backgroundPosition = "center center";
                    logo.style.display = "none";
                    cardName.style.color = "#0C5174";
                    boxCvv2.style.color = "#0C5174";
                    cardNumberInputs.forEach(input => {
                        input.style.color = "#0C5174";
                    });
                    cardNumber.style.marginTop = '130px';              
                    break;

                case "610433":
                    card.style.backgroundImage = "url('./img/melat.jpg')";
                    card.style.backgroundSize = "cover";
                    card.style.backgroundPosition = "center center";
                    logo.style.display = "none";
                    cardName.style.color = "#DBAD59";
                    boxCvv2.style.color = "#DBAD59";
                    cardNumberInputs.forEach(input => {
                        input.style.color = "#DBAD59";
                    });
                    cardNumber.style.marginTop = '130px';              
                    break;

                case "589463":
                    card.style.backgroundImage = "url('./img/refah.png')";
                    card.style.backgroundSize = "cover";
                    card.style.backgroundPosition = "center center";
                    logo.style.display = "none";
                    cardName.style.color = "#0C5174";
                    boxCvv2.style.color = "#0C5174";
                    cardNumberInputs.forEach(input => {
                        input.style.color = "#0C5174";
                    });
                    cardNumber.style.marginTop = '130px';              
                    break;

                case "504172":
                    card.style.backgroundImage = "url('./img/bank-resalat_magic.jpeg')";
                    card.style.backgroundSize = "cover";
                    card.style.backgroundPosition = "center center";
                    logo.style.display = "none";
                    cardName.style.color = "#1B9ADA";
                    boxCvv2.style.color = "#1B9ADA";
                    cardNumberInputs.forEach(input => {
                        input.style.color = "#1B9ADA";
                    });
                    cardNumber.style.marginTop = '130px';              
                    break;

                default:
                    card.style.backgroundImage = "none";
            }
        }
    });
});

// ذخیره اطلاعات در localStorage
function saveCardToLocalStorage(cardNumber, holderName, cvv2) {
    localStorage.setItem("cardNumber", cardNumber);
    localStorage.setItem("cardHolder", holderName);
    localStorage.setItem("cvv2", cvv2);
}

// خواندن اطلاعات از localStorage
function loadCardFromLocalStorage() {
    const cardNumber = localStorage.getItem("cardNumber") || "";
    const cardHolder = localStorage.getItem("cardHolder") || "";
    const cvv2 = localStorage.getItem("cvv2") || "";
    return { cardNumber, cardHolder, cvv2 };
}
