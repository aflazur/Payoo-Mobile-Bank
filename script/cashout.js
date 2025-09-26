/**
 * document.getElementById('cashout-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const pin = document.getElementById('cashout-pin').value;
    const convertedPin = parseInt(pin);

    const amount = document.getElementById('cashout-amount').value;
    const convertedAmount = parseFloat(amount);

    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    if (amount && pin) {
        if (convertedPin === 1234) {
            const sum = convertedMainBalance - convertedAmount;
            document.getElementById('main-balance').innerText = sum;
        }
        else {
            alert('Enter a valid Pin Number.');
        }
    }
    else {
        alert('Enter Amount.');
    }

})
 */

//---------------------------------------------------------------------------------------

document.getElementById('cashout-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const agentNumber = document.getElementById('agent-number').value;

    const amount = getInputValueById('cashout-amount');
    const pinNumber = getInputValueById('cashout-pin');
    const mainBalance = getInnerTextById('main-balance');

    if (amount > mainBalance) {
        alert('Insufficient Balance');
        return;
    }
    if (agentNumber.length === 11) {
        if (amount && pinNumber) {
            if (pinNumber === 1234) {
                const sub = mainBalance - amount;
                setInnerTextByIdAndValue('main-balance', sub);

                // Transaction part.
                const container = document.getElementById('Transaction-container');
                const div = document.createElement('div');
                div.classList.add('bg-gray-300');
                div.classList.add('border');
                div.classList.add('rounded-xl');
                div.classList.add('mb-3');
                div.classList.add('p-3');
                div.innerHTML = `
               <h1 class = "text-yellow-900 font-bold"> Cash Out Money</h1>
               <h3 class = "font-extrabold">${amount} Tk </h3>
               <p> Agent number: ${agentNumber} </p>

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
        alert("Please correct your agent number.");
    }

})