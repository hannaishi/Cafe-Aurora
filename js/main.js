const hamburger = () => {
    const ham = document.querySelector('.js-hamburger');
    const nav = document.querySelector('.js-nav');

//     // menuとbuttonがページ内にない場合returnする
//     if (!menu || !button) return;

    // ボタンクリックでopen
    ham.addEventListener('click', () => {
        ham.classList.toggle('active');
        nav.classList.toggle('active');
    });

//     // クローズボタンクリックでclose
//     closeButton.addEventListener("click", () => {
//         menu.close();
//     });
};

hamburger();

// const ham = document.querySelector('#js-hamburger'); //js-hamburgerの要素を取得し、変数hamに格納
// const nav = document.querySelector('#js-nav'); //js-navの要素を取得し、変数navに格納

// ham.addEventListener('click', function () { //ハンバーガーメニューをクリックしたら
//   console.log('ok!'); // コンソール画面でokというメッセージが出る

// });