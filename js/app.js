function alterarStatus(valorStatus) {
    let jogo = document.getElementById(`game-${valorStatus}`);
    let imgContainer = jogo.querySelector('.dashboard__item__img');
    let button = jogo.querySelector('.dashboard__item__button');

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