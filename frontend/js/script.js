window.addEventListener('scroll', () => { // Listen for scroll

let scroll = window.pageYOffset; // get page-Y-offset value with every scroll

//If the scroll is greater than position, user has scrolled down, else they scrolled up
scroll == 0 ? document.getElementById("titleHeaderID").setAttribute('style', 'border-color: #131313') : document.getElementById("titleHeaderID").setAttribute('style', 'border-color: whitesmoke');

scroll > 700 && scroll < 1551 ? document.getElementById("textLink0ID").setAttribute('style', 'background-color: whitesmoke') : document.getElementById("textLink0ID").setAttribute('style', 'background-color: #444444')

scroll > 1550 && scroll < 3616 ? document.getElementById("textLink1ID").setAttribute('style', 'background-color: whitesmoke') : document.getElementById("textLink1ID").setAttribute('style', 'background-color: #444444')

scroll > 3615 ? document.getElementById("textLink2ID").setAttribute('style', 'background-color: whitesmoke') : document.getElementById("textLink2ID").setAttribute('style', 'background-color: #444444')

scroll > 420 ? document.getElementById("mainSection1H10ID").setAttribute('style', 'opacity: 1') : document.getElementById("mainSection1H10ID").setAttribute('style', 'opacity: 0');

scroll > 720 ? document.getElementById("mainSection1P0ID").setAttribute('style', 'opacity: 1') : document.getElementById("mainSection1P0ID").setAttribute('style', 'opacity: 0');

scroll > 1290 ? document.getElementById("mainSection2H10ID").setAttribute('style', 'opacity: 1') : document.getElementById("mainSection2H10ID").setAttribute('style', 'opacity: 0');

scroll > 1580 ? document.getElementById("img1ID").setAttribute('style', 'opacity: 1') : document.getElementById("img1ID").setAttribute('style', 'opacity: 0');

scroll > 1580 ? document.getElementById("mainSection2Main0H20ID").setAttribute('style', 'opacity: 1') : document.getElementById("mainSection2Main0H20ID").setAttribute('style', 'opacity: 0');

scroll > 1580 ? document.getElementById("mainSection2Main0P0ID").setAttribute('style', 'opacity: 1') : document.getElementById("mainSection2Main0P0ID").setAttribute('style', 'opacity: 0');

scroll > 2160 ? document.getElementById("img2ID").setAttribute('style', 'opacity: 1') : document.getElementById("img2ID").setAttribute('style', 'opacity: 0');

scroll > 2160 ? document.getElementById("mainSection2Main1H20ID").setAttribute('style', 'opacity: 1') : document.getElementById("mainSection2Main1H20ID").setAttribute('style', 'opacity: 0');

scroll > 2160 ? document.getElementById("mainSection2Main1P0ID").setAttribute('style', 'opacity: 1') : document.getElementById("mainSection2Main1P0ID").setAttribute('style', 'opacity: 0');

scroll > 2890 ? document.getElementById("img3ID").setAttribute('style', 'opacity: 1') : document.getElementById("img3ID").setAttribute('style', 'opacity: 0');

scroll > 2890 ? document.getElementById("mainSection2Main2H20ID").setAttribute('style', 'opacity: 1') : document.getElementById("mainSection2Main2H20ID").setAttribute('style', 'opacity: 0');

scroll > 2890 ? document.getElementById("mainSection2Main2P0ID").setAttribute('style', 'opacity: 1') : document.getElementById("mainSection2Main2P0ID").setAttribute('style', 'opacity: 0');

scroll > 3210 ? document.getElementById("mainSection3H10ID").setAttribute('style', 'opacity: 1') : document.getElementById("mainSection3H10ID").setAttribute('style', 'opacity: 0');

scroll > 3500 ? document.getElementById("mainSection3Form0ID").setAttribute('style', 'opacity: 1') : document.getElementById("mainSection3Form0ID").setAttribute('style', 'opacity: 0');

scroll > 3780 ? document.getElementById("social__icon--linkID0").setAttribute('style', 'opacity: 1') : document.getElementById("social__icon--linkID0").setAttribute('style', 'opacity: 0');

scroll > 3780 ? document.getElementById("social__icon--linkID1").setAttribute('style', 'opacity: 1') : document.getElementById("social__icon--linkID1").setAttribute('style', 'opacity: 0');

console.log(scroll);

});

const contact = () => {
    const data = {
        method: 'GET',
        url: 'localhost:5500/submit'
    }

    console.log(data.data)

}