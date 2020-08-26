window.addEventListener('DOMContentLoaded', () => {

    const switcher = document.getElementById('switch');

    const bodyBg = document.body;
    const switchBg = document.getElementsByTagName('label');
    const headingColor = document.querySelector('.header_title');
    const subHeadingColor = document.querySelector('.header_subtitle');
    const mainCardBg = document.querySelectorAll('.main_card');
    const mainCardTitle = document.querySelectorAll('.main_card_followers');
    const overviewTitle = document.querySelector('.overview_heading');
    const overviewCards = document.querySelectorAll('.overview_card');
    const overviewCardTitle = document.querySelectorAll('.overview_card_stat');
    console.log(mainCardBg);

    switcher.addEventListener('change',(event) => {
        console.log(event.target.checked);
        if (event.target.checked) {
            bodyBg.classList.add('body');
            switchBg[0].classList.add('label');
            headingColor.classList.add('header_title_dark');
            subHeadingColor.classList.add('header_subtitle_dark');
            mainCardBg.forEach((item) => {
                item.classList.add('main_card_dark');
            });
            mainCardTitle.forEach((item) => {
                item.classList.add('main_card_followers_dark');
            });
            overviewTitle.classList.add('header_title_dark');
            overviewCards.forEach((item) => {
                item.classList.add('main_card_dark');
            });
            overviewCardTitle.forEach((item) => {
                item.classList.add('header_title_dark');
            });
        } else {
            bodyBg.classList.remove('body');
            switchBg[0].classList.remove('label');
            headingColor.classList.remove('header_title_dark');
            subHeadingColor.classList.remove('header_subtitle_dark');
            mainCardBg.forEach((item) => {
                item.classList.remove('main_card_dark');
            });
            mainCardTitle.forEach((item) => {
                item.classList.remove('main_card_followers_dark');
            });
            overviewTitle.classList.remove('header_title_dark');
            overviewCards.forEach((item) => {
                item.classList.remove('main_card_dark');
            });
            overviewCardTitle.forEach((item) => {
                item.classList.remove('header_title_dark');
            });
        }
    });
});