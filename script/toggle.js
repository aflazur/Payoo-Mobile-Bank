// document.getElementById('cashout').style.display = 'none';
// document.getElementById('addmoney').style.display = "none";

// document.getElementById('add-money-box').addEventListener('click', function () {
//     document.getElementById('cashout').style.display = "none";
//     document.getElementById('addmoney').style.display = "block";
// })


// document.getElementById('cashout-box').addEventListener('click', function () {
//     document.getElementById('cashout').style.display = "block";
//     document.getElementById('addmoney').style.display = "none";
// })


//---------------------------------------------------------------------------------------------

document.getElementById('cashout').style.display = 'none';
document.getElementById('Transaction-history').style.display = 'none';

document.getElementById('add-money-box').addEventListener('click', function () {
    handleToggle('addmoney', 'block');
    handleToggle('cashout', 'none');
    handleToggle('Transaction-history', 'none');
})

document.getElementById('cashout-box').addEventListener('click', function () {
    handleToggle('addmoney', 'none');
    handleToggle('cashout', 'block');
    handleToggle('Transaction-history', 'none');
})




