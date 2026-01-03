

const hiragana = {
    あ: 'a',
    い: 'i',
    う: 'u',
    え: 'e',
    お: 'o',
    か: 'ka',
    き: 'ki',
    く: 'ku',
    け: 'ke',
    こ: 'ko',
    さ: 'sa',
    し: 'shi',
    す: 'su',
    せ: 'se',
    そ: 'so',
    た: 'ta',
    ち: 'chi',
    つ: 'tsu',
    て: 'te',
    と: 'to',
    な: 'na',
    に: 'ni',
    ぬ: 'nu',
    ね: 'ne',
    の: 'no',
    は: 'ha',
    ひ: 'hi',
    ふ: 'fu',
    へ: 'he',
    ほ: 'ho',
    ま: 'ma',
    み: 'mi',
    む: 'mu',
    め: 'me',
    も: 'mo',
    や: 'ya',
    ゆ: 'yu',
    よ: 'yo',
    ら: 'ra',
    り: 'ri',
    る: 'ru',
    れ: 're',
    ろ: 'ro',
    わ: 'wa',
    を: 'wo',
    ん: 'n',
};

array = Object.entries(hiragana);

arr = array.sort(() => Math.random() - 0.5).slice(0, 22)

// console.log(arr);

const $flip_card = document.querySelectorAll(".flip-card");
const $flip_front = document.querySelectorAll(".flip-front");
const $flip_back = document.querySelectorAll(".flip-back");


$flip_front.forEach( (el, index) => {
    el.innerHTML = arr[index][0]
});

$flip_back.forEach((el, index) => {
    el.innerHTML = arr[index][1]
});

// $flip_card.forEach((el) => {

//     el.addEventListener("click", () => {
//         el.style.transform = "rotateY(180deg)"
//     })

//     el.addEventListener("mouseleave", () => {
//         el.style.transform = "rotateY(0deg)"
//     })
// })


$flip_card.forEach((el) => {
    el.addEventListener("click", () => {
        el.classList.toggle("flip-180")
    })
} )