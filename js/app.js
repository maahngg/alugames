function alterarStatus(valorStatus) {
    let gameSelected = document.getElementById(`game-${valorStatus}`);
    let imgContainer = gameSelected.querySelector('.dashboard__item__img');
    let button = gameSelected.querySelector('.dashboard__item__button');

    if (button.classList.contains('dashboard__item__button--return') && imgContainer.classList.contains('dashboard__item__img--rented')) {
        button.classList.remove('dashboard__item__button--return');
        imgContainer.classList.remove('dashboard__item__img--rented');
        button.textContent = 'Alugar';
    } else {
        button.classList.add('dashboard__item__button--return');
        imgContainer.classList.add('dashboard__item__img--rented');
        button.textContent = 'Devolver';
    }
}