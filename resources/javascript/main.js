const zips = ['80216', '80211', '80212', '80214', '80204', '80219', '80207', '80205', '80202', '80203', '80218', '80206', '80220', '80223', '80209', '80246', '80210', '80222', '80224', '80110', '80113', '80237', '80231', '80238', '80247'];
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
const lightSqftRange = document.getElementById('lightSqftRange');
const deepSqftRange = document.getElementById('deepSqftRange');
const sqftArea = document.getElementById('sqftArea');
const sqftContainer = document.getElementById('sqftContainer');
const sqftResults = document.getElementsByClassName('sqftResults')
const LIGHT_RATE_SMALL = 80.00;
const LIGHT_RATE_LARGE = 85.00;
const DEEP_RATE = 98.00;

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
        lightSqftRange.innerText = "(0 - 2,200sqft)";
        deepSqftRange.innerText = "(0 - 500sqft)";
        lightBody.innerText = "2 cleaners\n2 hours\n$" + 2 * LIGHT_RATE_SMALL;
        deepBody.innerText = "2 cleaners\n2 hours\n$" + 2 * DEEP_RATE;
    } else if (sqftv <= 650) {
        lightSqftRange.innerText = "(0 - 2,200sqft)";
        deepSqftRange.innerText = "(500 - 650sqft)";
        lightBody.innerText = "2 cleaners\n2 hours\n$" + 2 * LIGHT_RATE_SMALL;
        deepBody.innerText = "2 cleaners\n2 - 2.5 hours\n$" + 2 * DEEP_RATE + " - $" + 2.5 * DEEP_RATE;
    } else if (sqftv <= 1300) {
        lightSqftRange.innerText = "(0 - 2,200sqft)";
        deepSqftRange.innerText = "(650 - 1,300sqft)";
        lightBody.innerText = "2 cleaners\n2 hours\n$" + 2 * LIGHT_RATE_SMALL;
        deepBody.innerText = "2 cleaners\n2.5 - 3 hours\n$" + 2.5 * DEEP_RATE + " - $" + 3 * DEEP_RATE;
    } else if (sqftv <= 2200) {
        lightSqftRange.innerText = "(0 - 2,200sqft)";
        deepSqftRange.innerText = "(1,300 - 2,450sqft)";
        lightBody.innerText = "2 cleaners\n2 hours\n$" + 2 * LIGHT_RATE_LARGE;
        deepBody.innerText = "2 cleaners\n3 - 4 hours\n$" + 3 * DEEP_RATE + " - $" + 4 * DEEP_RATE;
    } else if (sqftv <= 2450) {
        lightSqftRange.innerText = "(2,200 - 2,800sqft)";
        deepSqftRange.innerText = "(1,300 - 2,450sqft)";
        lightBody.innerText = "2 cleaners\n2 - 2.5 hours\n$" + 2 * LIGHT_RATE_LARGE + " - $" + 2.5 * LIGHT_RATE_LARGE;
        deepBody.innerText = "2 cleaners\n3 - 4 hours\n$" + 3 * DEEP_RATE + " - $" + 4 * DEEP_RATE;
    } else if (sqftv < 2800) {
        lightSqftRange.innerText = "(2,200 - 2,800sqft)";
        deepSqftRange.innerText = "(2,450 - 3,900sqft)";
        lightBody.innerText = "2 cleaners\n2 - 2.5 hours\n$" + 2 * LIGHT_RATE_LARGE + " - $" + 2.5 * LIGHT_RATE_LARGE;
        deepBody.innerText = "2 cleaners\n3 - 5 hours\n$" + 3 * DEEP_RATE + " - $" + 5 * DEEP_RATE;
    } else if (sqftv < 3900) {
        lightSqftRange.innerText = "(2,800 - 3,900sqft)";
        deepSqftRange.innerText = "(2,450 - 3,900sqft)";
        lightBody.innerText = "2 cleaners\n2 - 3 hours\n$" + 2 * LIGHT_RATE_LARGE + " - $" + 3 * LIGHT_RATE_LARGE;
        deepBody.innerText = "2 cleaners\n3 - 5 hours\n$" + 3 * DEEP_RATE + " - $" + 5 * DEEP_RATE;
    } else if (sqftv < 5000) {
        lightSqftRange.innerText = "(3,900 - 5,000sqft)";
        deepSqftRange.innerText = "(3,900 - 5,000sqft)";
        lightBody.innerText = "2 cleaners\n3 - 4 hours\n$" + 3 * LIGHT_RATE_LARGE + " - $" + 4 * LIGHT_RATE_LARGE;
        deepBody.innerText = "2 cleaners\n4 - 6 hours\n$" + 4 * DEEP_RATE + " - $" + 6 * DEEP_RATE;
    } else if (sqftv < 7000) {
        lightSqftRange.innerText = "(5,000 - 7,000sqft)";
        deepSqftRange.innerText = "(5,000 - 7,000sqft)";
        lightBody.innerText = "2 cleaners\n4 - 5 hours\n$" + 4 * LIGHT_RATE_LARGE + " - $" + 5 * LIGHT_RATE_LARGE;
        deepBody.innerText = "2 cleaners\n5 - 7 hours\n$" + 5 * DEEP_RATE + " - $" + 7 * DEEP_RATE;
    } else if (sqftv < 12000) {
        lightSqftRange.innerText = "(7,000 - 12,000sqft)";
        deepSqftRange.innerText = "(7,000 - 12,000sqft)";
        lightBody.innerText = "2 cleaners\n5 - 6 hours\n$" + 5 * LIGHT_RATE_LARGE + " - $" + 6 * LIGHT_RATE_LARGE;
        deepBody.innerText = "4 cleaners\n4 - 6 hours\n$" + 4 * DEEP_RATE * 2 + " - $" + 6 * DEEP_RATE * 2;
    } else if (sqftv <= 20000) {
        lightSqftRange.innerText = "(12,000 - 20,000sqft)";
        deepSqftRange.innerText = "(12,000 - 20,000sqft)";
        lightBody.innerText = "2 cleaners\n6 - 7 hours\n$" + 6 * LIGHT_RATE_LARGE + " - $" + 7 * LIGHT_RATE_LARGE;
        deepBody.innerText = "4 cleaners\n6 - 9 hours\n$" + 6 * DEEP_RATE * 2 + " - $" + 9 * DEEP_RATE * 2;
    } else {
        lightSqftRange.innerText = "";
        deepSqftRange.innerText = "";
        lightBody.innerText = "Square footage not found";
        deepBody.innerText = "Square footage not found";
    }

    sqftForm.reset();
})

