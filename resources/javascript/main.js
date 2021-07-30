const zips = ['80216', '80211', '80212', '80214', '80215', '80226', '80204', '80219', '80207', '80205', '80202', '80203', '80218', '80206', '80220', '80223', '80209', '80246', '80210', '80222', '80224', '80110', '80113'];
const zip = document.getElementById('zipCode');
const sqft = document.getElementById('sqft');
const zipForm = document.getElementById('form1');
const zipResults = document.getElementById('zipResults');
const givensqft = document.getElementById('givensqft');
const sqftForm = document.getElementById('form2');
const lightBody = document.getElementById('lightBody');
const deepBody = document.getElementById('deepBody');
const lightResults = document.getElementById('lightResults');
const deepResults = document.getElementById('deepResults');
const lightTitle = document.getElementById('lightTitle');
const deepTitle = document.getElementById('deepTitle');
const sqftArea = document.getElementById('sqftArea');
const sqftContainer = document.getElementById('sqftContainer');
const sqftResults = document.getElementsByClassName('sqftResults')
const lightRate = 75.00;
const deepRate = 95.00;

function removeSpaces(string) {
    return string.split(' ').join('');
}

zipForm.addEventListener('submit', (e) => {    
    e.preventDefault();
    let zipv = removeSpaces(zip.value);
    zipResults.innerText = zipv;

    if (zips.indexOf(zipv) > -1) {
        zipResults.style.backgroundColor = '#54db51';

    } else {
        zipResults.style.backgroundColor = '#f3605e';
    }

    zipResults.style.boxShadow = "0 5px 5px rgb(221, 221, 221)";

    zipForm.reset();
})

sqftForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let sqftv = removeSpaces(sqft.value);
    givensqft.innerText = sqftv; 

    lightResults.style.visibility = "visible";
    deepResults.style.visibility = "visible";
    givensqft.style.visibility = "visible";

    lightTitle.innerText = "Light Cleaning";
    deepTitle.innerText = "Deep Cleaning";

    if (sqftv <= 500) {
        lightBody.innerText = "2 cleaners\n2 hours\n$" + 2 * lightRate;
        deepBody.innerText = "2 cleaners\n2 hours\n$" + 2 * deepRate;
    } else if (sqftv <= 650) {
        lightBody.innerText = "2 cleaners\n2 hours\n$" + 2 * lightRate;
        deepBody.innerText = "2 cleaners\n2 - 2.5 hours\n$" + 2 * deepRate + " - $" + 2.5 * deepRate;
    } else if (sqftv <= 1300) {
        lightBody.innerText = "2 cleaners\n2 hours\n$" + 2 * lightRate;
        deepBody.innerText = "2 cleaners\n2.5 - 3 hours\n$" + 2.5 * deepRate + " - $" + 3 * deepRate;
    } else if (sqftv <= 2200) {
        lightBody.innerText = "2 cleaners\n2 hours\n$" + 2 * lightRate;
        deepBody.innerText = "2 cleaners\n3 - 4 hours\n$" + 3 * deepRate + " - $" + 4 * deepRate;
    } else if (sqftv <= 2450) {
        lightBody.innerText = "2 cleaners\n2 - 2.5 hours\n$" + 2 * lightRate + " - $" + 2.5 * lightRate;
        deepBody.innerText = "2 cleaners\n3 - 4 hours\n$" + 3 * deepRate + " - $" + 4 * deepRate;
    } else if (sqftv < 2800) {
        lightBody.innerText = "2 cleaners\n2 - 2.5 hours\n$" + 2 * lightRate + " - $" + 2.5 * lightRate;
        deepBody.innerText = "2 cleaners\n3 - 5 hours\n$" + 3 * deepRate + " - $" + 5 * deepRate;
    } else if (sqftv < 3900) {
        lightBody.innerText = "2 cleaners\n2 - 3 hours\n$" + 2 * lightRate + " - $" + 3 * lightRate;
        deepBody.innerText = "2 cleaners\n3 - 5 hours\n$" + 3 * deepRate + " - $" + 5 * deepRate;
    } else if (sqftv < 5000) {
        lightBody.innerText = "2 cleaners\n3 - 4 hours\n$" + 3 * lightRate + " - $" + 4 * lightRate;
        deepBody.innerText = "2 cleaners\n4 - 6 hours\n$" + 4 * deepRate + " - $" + 6 * deepRate;
    } else if (sqftv < 7000) {
        lightBody.innerText = "2 cleaners\n4 - 5 hours\n$" + 4 * lightRate + " - $" + 5 * lightRate;
        deepBody.innerText = "2 cleaners\n5 - 7 hours\n$" + 5 * deepRate + " - $" + 7 * deepRate;
    } else if (sqftv < 12000) {
        lightBody.innerText = "2 cleaners\n5 - 6 hours\n$" + 5 * lightRate + " - $" + 6 * lightRate;
        deepBody.innerText = "4 cleaners\n4 - 6 hours\n$" + 4 * deepRate * 2 + " - $" + 6 * deepRate * 2;
    } else if (sqftv <= 20000) {
        lightBody.innerText = "2 cleaners\n6 - 7 hours\n$" + 6 * lightRate + " - $" + 7 * lightRate;
        deepBody.innerText = "4 cleaners\n6 - 9 hours\n$" + 6 * deepRate * 2 + " - $" + 9 * deepRate * 2;
    } else {
        lightBody.innerText = "Square footage not found";
        deepBody.innerText = "Square footage not found";
    }

    sqftForm.reset();
})

