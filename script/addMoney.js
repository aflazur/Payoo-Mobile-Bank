/**
 * document.getElementById('add-money').addEventListener('click', function (event) {
    event.preventDefault();

    const acountNumber = document.getElementById('acount-number').value;
    const amount = document.getElementById('amount').value;
    const convertedAmount = parseFloat(amount);

    const pin = document.getElementById('pin').value;
    const convertedPin = parseInt(pin);

    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    if (acountNumber.length === 11) {
        if (amount && pin) {
            if (convertedPin === 1234) {
                const sum = convertedMainBalance + convertedAmount;
                document.getElementById('main-balance').innerText = sum;
            }
            else {
                alert('Please Enter Correct Pin Number.');
            }
        }
        else {
            alert('Enter Amount.');
        }

    }
    else {
        alert("Please correct your account number.");
    }
})
 */


//----------------------------------------------------------------------------------------------------------------

document.getElementById('add-money').addEventListener('click', function (event) {
    event.preventDefault();
    const amount = getInputValueById('amount');
    const pin = getInputValueById('pin');
    const acount = document.getElementById('acount-number').value;
    const mainBalance = getInnerTextById('main-balance');

    const selectedBank = document.getElementById('allbank').value;

    if (amount < 0) {
        alert('Enter Positive Number Of Amount');
        return;
    }
    if (acount.length === 11) {
        if (amount && pin) {
            if (pin === 1234) {
                const sum = mainBalance + amount;
                setInnerTextByIdAndValue('main-balance', sum);

                // Transaction part.
                const container = document.getElementById('Transaction-container');
                const div = document.createElement('div');
                div.classList.add('bg-gray-300');
                div.classList.add('border');
                div.classList.add('rounded-xl');
                div.classList.add('mb-3');
                div.classList.add('p-3');
                div.innerHTML = `
               <h1 class = "text-yellow-900 font-bold"> Added Money from ${selectedBank}</h1>
               <h3 class = "font-extrabold">${amount} Tk </h3>
               <p> Account number: ${acount} </p>

               `
                container.appendChild(div);

            }
            else {
                alert('Please Enter Correct Pin Number.');
            }
        }
        else {
            alert('Enter Amount.');
        }

    }
    else {
        alert("Please correct your account number.");
    }

})