window.addEventListener('scroll', () => { // Listen for scroll

let scroll = window.pageYOffset; // get page-Y-offset value with every scroll

if (scroll == 0) {
    document.getElementById("titleHeaderID").setAttribute('style', 'border-color: #131313')
    document.getElementById("mainSection1H10ID").setAttribute('style', 'opacity: 0')
    document.getElementById("mainSection1P0ID").setAttribute('style', 'opacity: 0')
    document.getElementById("mainSection2H10ID").setAttribute('style', 'opacity: 0')
    document.getElementById("img1ID").setAttribute('style', 'opacity: 0')
    document.getElementById("mainSection2Main0H20ID").setAttribute('style', 'opacity: 0')
    document.getElementById("mainSection2Main0P0ID").setAttribute('style', 'opacity: 0')
    document.getElementById("img2ID").setAttribute('style', 'opacity: 0')
    document.getElementById("mainSection2Main1H20ID").setAttribute('style', 'opacity: 0')
    document.getElementById("mainSection2Main1P0ID").setAttribute('style', 'opacity: 0')
    document.getElementById("img3ID").setAttribute('style', 'opacity: 0')
    document.getElementById("mainSection2Main2H20ID").setAttribute('style', 'opacity: 0')
    document.getElementById("mainSection2Main2P0ID").setAttribute('style', 'opacity: 0')
    document.getElementById("mainSection3H10ID").setAttribute('style', 'opacity: 0')
    document.getElementById("mainSection3Form0ID").setAttribute('style', 'opacity: 0')
    document.getElementById("social__icon--linkID0").setAttribute('style', 'opacity: 0')
    document.getElementById("social__icon--linkID1").setAttribute('style', 'opacity: 0')
    document.getElementById("social__icon--linkID2").setAttribute('style', 'opacity: 0')
}
else {
    document.getElementById("titleHeaderID").setAttribute('style', 'border-color: whitesmoke')
}

if (isScrolledIntoView(document.getElementById("mainSection1H10ID"))) {
    document.getElementById("textLink0ID").setAttribute('style', 'background-color: whitesmoke')
    document.getElementById("textLink1ID").setAttribute('style', 'background-color: #444444')
    document.getElementById("textLink2ID").setAttribute('style', 'background-color: #444444')
}
else if (isScrolledIntoView(document.getElementById("mainSection2H10ID"))) {
    document.getElementById("textLink0ID").setAttribute('style', 'background-color: #444444')
    document.getElementById("textLink1ID").setAttribute('style', 'background-color: whitesmoke')
    document.getElementById("textLink2ID").setAttribute('style', 'background-color: #444444')
}
else if (isScrolledIntoView(document.getElementById("mainSection3H10ID"))) {
    document.getElementById("textLink0ID").setAttribute('style', 'background-color: #444444')
    document.getElementById("textLink1ID").setAttribute('style', 'background-color: #444444')
    document.getElementById("textLink2ID").setAttribute('style', 'background-color: whitesmoke')
}
else if (isScrolledIntoView(document.getElementById("mainSection0H10ID"))) {
    document.getElementById("textLink0ID").setAttribute('style', 'background-color: #444444')
    document.getElementById("textLink1ID").setAttribute('style', 'background-color: #444444')
    document.getElementById("textLink2ID").setAttribute('style', 'background-color: #444444')
}

if (isScrolledIntoView(document.getElementById("mainSection1H10ID"))) {
    document.getElementById("mainSection1H10ID").setAttribute('style', 'opacity: 1')
}

if (isScrolledIntoView(document.getElementById("mainSection1P0ID"))) {
    document.getElementById("mainSection1P0ID").setAttribute('style', 'opacity: 1')
}

if (isScrolledIntoView(document.getElementById("mainSection2H10ID"))) {
    document.getElementById("mainSection2H10ID").setAttribute('style', 'opacity: 1')
}

if (isScrolledIntoView(document.getElementById("img1ID"))) {
    document.getElementById("img1ID").setAttribute('style', 'opacity: 1')
    document.getElementById("mainSection2Main0H20ID").setAttribute('style', 'opacity: 1')
    document.getElementById("mainSection2Main0P0ID").setAttribute('style', 'opacity: 1')
}

if (isScrolledIntoView(document.getElementById("img2ID"))) {
    document.getElementById("img2ID").setAttribute('style', 'opacity: 1')
    document.getElementById("mainSection2Main1H20ID").setAttribute('style', 'opacity: 1')
    document.getElementById("mainSection2Main1P0ID").setAttribute('style', 'opacity: 1')
}

if (isScrolledIntoView(document.getElementById("img3ID"))) {
    document.getElementById("img3ID").setAttribute('style', 'opacity: 1')
    document.getElementById("mainSection2Main2H20ID").setAttribute('style', 'opacity: 1')
    document.getElementById("mainSection2Main2P0ID").setAttribute('style', 'opacity: 1')
}

if (isScrolledIntoView(document.getElementById("mainSection3H10ID"))) {
    document.getElementById("mainSection3H10ID").setAttribute('style', 'opacity: 1')
}

if (isScrolledIntoView(document.getElementById("mainSection3Form0ID"))) {
    document.getElementById("mainSection3Form0ID").setAttribute('style', 'opacity: 1')
}

if (isScrolledIntoView(document.getElementById("social__icon--linkID1"))) {
    document.getElementById("social__icon--linkID0").setAttribute('style', 'opacity: 1')
    document.getElementById("social__icon--linkID1").setAttribute('style', 'opacity: 1')
    document.getElementById("social__icon--linkID2").setAttribute('style', 'opacity: 1')
}

});

function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect()
    var elemTop = rect.top
    var elemBottom = rect.bottom

    // Only completely visible elements return true:
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight)
    // Partially visible elements return true:
    //isVisible = elemTop < window.innerHeight && elemBottom >= 0
    return isVisible
}

function contact() {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (document.getElementById('mainSection3Form0Textarea0ID').value.match(mailformat)) {
        document.getElementById('mainSection3H11ID').innerHTML = 'Email Sent, Congratulations!'
        document.getElementById("mainSection3Form0Textarea0ID").setAttribute('style', 'border-color: #888')
        document.getElementById("mainSection3H11ID").setAttribute('style', 'opacity: 1')
        document.getElementById("mainSection3Form0Input0ID").disabled = true

        const form = {
            method: 'POST',
            url: 'http://localhost:8000/submit',
            params: {'email': document.getElementById('mainSection3Form0Textarea0ID').value, 'message': document.getElementById('mainSection3Form0Textarea1ID').value}
        }
        axios.request(form).then((response) => {
            if (response.data !== 'true') {
                alert('A problem has occurred try refreshing the page and trying again')
            }
        }).catch((error) => {
            alert('A problem has occurred try refreshing the page and trying again')
        })

    }
    else {
        document.getElementById('mainSection3H11ID').innerHTML = 'Please input a valid email.';
        document.getElementById("mainSection3Form0Textarea0ID").setAttribute('style', 'border-color: #FF0000')
        document.getElementById("mainSection3H11ID").setAttribute('style', 'opacity: 1')
    }
}