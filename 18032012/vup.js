let btn = document.querySelector('.btn'),
    money = document.querySelector('#money'),
    drink = 1;

btn.addEventListener('click', function(){
    shoot({},
        function(mark) {
            console.log('Вы попали в цель');
            win(mark, buyBeer, giveYouMoney);
        },
        function(miss) {
            console.error(miss);
            loose();
        });
});

function shoot(arrow) {
    console.log('Выстрел произведен...');
    let promise = new Promise(function(resolve, reject) {
        setTimeout(function(){
            Math.random() > 0.5 ? resolve({}) : reject('Вы промахнулись');
        }, 3000);
    });
    
    return promise;
}

function win() {
    console.log('Вы победили!');
    money.innerHTML = +money.innerHTML + 1;
    (drink == 1) ? buyBeer() : giveYouMoney()
}
function loose() {
    console.log("Вы проиграли");
    money.innerHTML = +money.innerHTML - 1;
}

function buyBeer() {
    console.log('Вам купили пива');
}
function giveYouMoney() {
    console.log('Вам дали денег');
}

shoot({})
    .then(mark => console.log('Вы попали в цель'))
    .then(win)
    .catch(loose)