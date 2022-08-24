const zips = ['80216', '80211', '80212', '80214', '80204', '80219', '80207', '80205', '80202', '80203', '80218', '80206', '80220', '80223', '80209', '80246', '80210', '80222', '80224', '80110', '80113', '80237', '80231', '80238', '80247'];
const maybeZips = ['80230', '80045', '80012', '80014', '80111'];
const zip = document.getElementById('zipCode');
const sqft = document.getElementById('sqft');
const zipForm = document.getElementById('form1');
const zipResults = document.getElementById('zipResults');
const zipResultsContainer = document.getElementById('zipResultsContainer');
const zipCopyButton = document.getElementById('zipCopyButton');
const givensqft = document.getElementById('givensqft');
const sqftForm = document.getElementById('form2');
const lightBody = document.getElementById('lightBody');
const deepBody = document.getElementById('deepBody');
const lightResults = document.getElementById('lightResults');
const deepResults = document.getElementById('deepResults');
const moveResults = document.getElementById('moveResults');
const lightTitle = document.getElementById('lightTitle');
const deepTitle = document.getElementById('deepTitle');
const moveTitle = document.getElementById('moveTitle');
const moveBody = document.getElementById('moveBody');
const lightSqftRange = document.getElementById('lightSqftRange');
const deepSqftRange = document.getElementById('deepSqftRange');
const moveSqftRange = document.getElementById('moveSqftRange');
const sqftArea = document.getElementById('sqftArea');
const sqftContainer = document.getElementById('sqftContainer');
const sqftResults = document.getElementsByClassName('sqftResults');
const addOnResults = document.getElementById('addOnResults');
const addOnTitle = document.getElementById('addOnTitle');
const addOnWalls = document.getElementById('addOnWalls');
const addOnGarage = document.getElementById('addOnGarage');
const addOnPatio = document.getElementById('addOnPatio');
const recurringResults = document.getElementById('recurringResults')
const recurringTitle = document.getElementById('recurringTitle');
const weeklyBody = document.getElementById('weeklyBody');
const biweeklyBody = document.getElementById('biweeklyBody');
const threeWeekBody = document.getElementById('threeWeekBody');
const fourWeekBody = document.getElementById('fourWeekBody');
const LIGHT_RATE_SMALL = 90.00;
const LIGHT_RATE_LARGE = 90.00;
const DEEP_RATE = 110.00;
const MOVE_RATE = 125.00;

function removeSpaces(string) {
    return string.split(' ').join('');
}

function copyZipTemplate() {
    var template = "Hello,\n\nThank you for your interest in Denver Cleaning Service Company! Unfortunately, you are outside of our service area. I apologize for the inconvenience. Best of luck and have a great day!";

    navigator.clipboard.writeText(template);

    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied";
}

function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
}

zipForm.addEventListener('submit', (e) => {    
    e.preventDefault();
    let zipv = removeSpaces(zip.value);
    zipResults.innerHTML = zipv;
    zipCopyButton.innerHTML = "";

    if (zips.indexOf(zipv) > -1) {
        zipResultsContainer.style.backgroundColor = '#54db51';
    } else if (maybeZips.indexOf(zipv) > -1) {
        zipResultsContainer.style.backgroundColor = '#FFC300';
    } else {
        zipResultsContainer.style.backgroundColor = '#f3605e';
        var button = document.createElement('button');
        button.type = 'button';
        button.innerHTML = '<span class="tooltiptext" id="myTooltip">Copy to clipboard</span>Email';
        button.onclick = copyZipTemplate;
        button.onmouseout = outFunc;
        
        zipCopyButton.appendChild(button);
    }

    zipResultsContainer.style.boxShadow = "0 5px 5px rgb(221, 221, 221)";

    zipForm.reset();
})

sqftForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let sqftv = removeSpaces(sqft.value);
    givensqft.innerText = sqftv; 

    lightResults.style.visibility = "visible";
    deepResults.style.visibility = "visible";
    moveResults.style.visibility = "visible";
    givensqft.style.visibility = "visible";
    addOnResults.style.visibility = "visible";
    recurringResults.style.visibility = "visible";


    lightTitle.innerText = "Light Cleaning";
    deepTitle.innerText = "Deep Cleaning";
    moveTitle.innerText = "Move Out Cleaning"
    recurringTitle.innerText = "Recurring";

    if (sqftv <= 500) {
        lightSqftRange.innerText = "(0 - 2,200sqft)";
        deepSqftRange.innerText = "(0 - 500sqft)";
        moveSqftRange.innerText = "(0 - 500sqft)";
        lightBody.innerText = "2 cleaners\n2 hours\n$" + 2 * LIGHT_RATE_SMALL;
        deepBody.innerText = "2 cleaners\n2 hours\n$" + 2 * DEEP_RATE;
        moveBody.innerText = "2 cleaners\n2 hours\n$" + 2 * MOVE_RATE;
        weeklyBody.innerText = "2 cleaners\n2 hours\n$" + 125;
        biweeklyBody.innerText = "2 cleaners\n2 hours\n$" + 129;
        threeWeekBody.innerText = "2 cleaners\n2 hours\n$" + 139;
        fourWeekBody.innerText = "2 cleaners\n2 hours\n$" + 145;
    } else if (sqftv <= 650) {
        lightSqftRange.innerText = "(0 - 2,200sqft)";
        deepSqftRange.innerText = "(500 - 650sqft)";
        moveSqftRange.innerText = "(500 - 650sqft)";
        lightBody.innerText = "2 cleaners\n2 hours\n$" + 2 * LIGHT_RATE_SMALL;
        deepBody.innerText = "2 cleaners\n2 - 2.5 hours\n$" + 2 * DEEP_RATE + " - $" + 2.5 * DEEP_RATE;
        moveBody.innerText = "2 cleaners\n2 - 2.5 hours\n$" + 2 * MOVE_RATE + " - $" + 2.5 * MOVE_RATE;
        weeklyBody.innerText = "2 cleaners\n2 hours\n$" + 125;
        biweeklyBody.innerText = "2 cleaners\n2 hours\n$" + 129;
        threeWeekBody.innerText = "2 cleaners\n2 hours\n$" + 139;
        fourWeekBody.innerText = "2 cleaners\n2 hours\n$" + 145;
    } else if (sqftv <= 1300) {
        lightSqftRange.innerText = "(0 - 2,200sqft)";
        deepSqftRange.innerText = "(650 - 1,300sqft)";
        moveSqftRange.innerText = "(650 - 1,300sqft)";
        lightBody.innerText = "2 cleaners\n2 hours\n$" + 2 * LIGHT_RATE_SMALL;
        deepBody.innerText = "2 cleaners\n2.5 - 3 hours\n$" + 2.5 * DEEP_RATE + " - $" + 3 * DEEP_RATE;
        moveBody.innerText = "2 cleaners\n2.5 - 3 hours\n$" + 2.5 * MOVE_RATE + " - $" + 3 * MOVE_RATE;
        weeklyBody.innerText = "2 cleaners\n2 hours\n$" + 135;
        biweeklyBody.innerText = "2 cleaners\n2 hours\n$" + 140;
        threeWeekBody.innerText = "2 cleaners\n2 hours\n$" + 145;
        fourWeekBody.innerText = "2 cleaners\n2 hours\n$" + 150;
    } else if (sqftv <= 2200) {
        lightSqftRange.innerText = "(0 - 2,200sqft)";
        deepSqftRange.innerText = "(1,300 - 2,450sqft)";
        moveSqftRange.innerText = "(1,300 - 2,450sqft)";
        lightBody.innerText = "2 cleaners\n2 hours\n$" + 2 * LIGHT_RATE_LARGE;
        deepBody.innerText = "2 cleaners\n3 - 4 hours\n$" + 3 * DEEP_RATE + " - $" + 4 * DEEP_RATE;
        moveBody.innerText = "2 cleaners\n3 - 4 hours\n$" + 3 * MOVE_RATE + " - $" + 4 * MOVE_RATE;
        weeklyBody.innerText = "2 cleaners\n2 hours\n$" + 140;
        biweeklyBody.innerText = "2 cleaners\n2 hours\n$" + 145;
        threeWeekBody.innerText = "2 cleaners\n2 hours\n$" + 150;
        fourWeekBody.innerText = "2 cleaners\n2 hours\n$" + 155;
    } else if (sqftv <= 2450) {
        lightSqftRange.innerText = "(2,200 - 2,800sqft)";
        deepSqftRange.innerText = "(1,300 - 2,450sqft)";
        moveSqftRange.innerText = "(1,300 - 2,450sqft)";
        lightBody.innerText = "2 cleaners\n2 - 2.5 hours\n$" + 2 * LIGHT_RATE_LARGE + " - $" + 2.5 * LIGHT_RATE_LARGE;
        deepBody.innerText = "2 cleaners\n3 - 4 hours\n$" + 3 * DEEP_RATE + " - $" + 4 * DEEP_RATE;
        moveBody.innerText = "2 cleaners\n3 - 4 hours\n$" + 3 * MOVE_RATE + " - $" + 4 * MOVE_RATE;
        weeklyBody.innerText = "2 cleaners\n2 hours\n$" + 140;
        biweeklyBody.innerText = "2 cleaners\n2 hours\n$" + 145;
        threeWeekBody.innerText = "2 cleaners\n2 hours\n$" + 150;
        fourWeekBody.innerText = "2 cleaners\n2 hours\n$" + 155;
    } else if (sqftv <= 3000) {
        lightSqftRange.innerText = "(2,200 - 2,800sqft)";
        deepSqftRange.innerText = "(2,450 - 3,900sqft)";
        moveSqftRange.innerText = "(2,450 - 3,900sqft)";
        lightBody.innerText = "2 cleaners\n2 - 2.5 hours\n$" + 2 * LIGHT_RATE_LARGE + " - $" + 2.5 * LIGHT_RATE_LARGE;
        deepBody.innerText = "2 cleaners\n3 - 5 hours\n$" + 3 * DEEP_RATE + " - $" + 5 * DEEP_RATE;
        moveBody.innerText = "2 cleaners\n3 - 5 hours\n$" + 3 * MOVE_RATE + " - $" + 5 * MOVE_RATE;
        weeklyBody.innerText = "2 cleaners\n2 hours\n$" + 145;
        biweeklyBody.innerText = "2 cleaners\n2 hours\n$" + 150;
        threeWeekBody.innerText = "2.5 cleaners\n2 hours\n$" + 195;
        fourWeekBody.innerText = "2.5 cleaners\n2 hours\n$" + 205;
    } else if (sqftv < 3900) {
        lightSqftRange.innerText = "(2,800 - 3,900sqft)";
        deepSqftRange.innerText = "(2,450 - 3,900sqft)";
        moveSqftRange.innerText = "(2,450 - 3,900sqft)";
        lightBody.innerText = "2 cleaners\n2 - 3 hours\n$" + 2 * LIGHT_RATE_LARGE + " - $" + 3 * LIGHT_RATE_LARGE;
        deepBody.innerText = "2 cleaners\n3 - 5 hours\n$" + 3 * DEEP_RATE + " - $" + 5 * DEEP_RATE;
        moveBody.innerText = "2 cleaners\n3 - 5 hours\n$" + 3 * MOVE_RATE + " - $" + 5 * MOVE_RATE;
        weeklyBody.innerText = "2 cleaners\n2 hours\n$" + 150;
        biweeklyBody.innerText = "2 cleaners\n2 hours\n$" + 155;
        threeWeekBody.innerText = "2.5 cleaners\n2.5 hours\n$" + 215;
        fourWeekBody.innerText = "2.5 cleaners\n3 hours\n$" + 235;
    } else if (sqftv <= 5000) {
        lightSqftRange.innerText = "(3,900 - 5,000sqft)";
        deepSqftRange.innerText = "(3,900 - 5,000sqft)";
        moveSqftRange.innerText = "(3,900 - 5,000sqft)";
        lightBody.innerText = "2 cleaners\n3 - 4 hours\n$" + 3 * LIGHT_RATE_LARGE + " - $" + 4 * LIGHT_RATE_LARGE;
        deepBody.innerText = "2 cleaners\n4 - 6 hours\n$" + 4 * DEEP_RATE + " - $" + 6 * DEEP_RATE;
        moveBody.innerText = "2 cleaners\n4 - 6 hours\n$" + 4 * MOVE_RATE + " - $" + 6 * MOVE_RATE;
        recurringResults.style.visibility = "hidden";
    } else if (sqftv < 7000) {
        lightSqftRange.innerText = "(5,000 - 7,000sqft)";
        deepSqftRange.innerText = "(5,000 - 7,000sqft)";
        moveSqftRange.innerText = "(5,000 - 7,000sqft)";
        lightBody.innerText = "2 cleaners\n4 - 5 hours\n$" + 4 * LIGHT_RATE_LARGE + " - $" + 5 * LIGHT_RATE_LARGE;
        deepBody.innerText = "2 cleaners\n5 - 7 hours\n$" + 5 * DEEP_RATE + " - $" + 7 * DEEP_RATE;
        moveBody.innerText = "2 cleaners\n5 - 7 hours\n$" + 5 * MOVE_RATE + " - $" + 7 * MOVE_RATE;
        recurringResults.style.visibility = "hidden";
    } else if (sqftv < 12000) {
        lightSqftRange.innerText = "(7,000 - 12,000sqft)";
        deepSqftRange.innerText = "(7,000 - 12,000sqft)";
        moveSqftRange.innerText = "(7,000 - 12,000sqft)";
        lightBody.innerText = "2 cleaners\n5 - 6 hours\n$" + 5 * LIGHT_RATE_LARGE + " - $" + 6 * LIGHT_RATE_LARGE;
        deepBody.innerText = "4 cleaners\n4 - 6 hours\n$" + 4 * DEEP_RATE * 2 + " - $" + 6 * DEEP_RATE * 2;
        moveBody.innerText = "4 cleaners\n4 - 6 hours\n$" + 4 * MOVE_RATE * 2 + " - $" + 6 * MOVE_RATE * 2;
        recurringResults.style.visibility = "hidden";
    } else if (sqftv <= 20000) {
        lightSqftRange.innerText = "(12,000 - 20,000sqft)";
        deepSqftRange.innerText = "(12,000 - 20,000sqft)";
        moveSqftRange.innerText = "(12,000 - 20,000sqft)";
        lightBody.innerText = "2 cleaners\n6 - 7 hours\n$" + 6 * LIGHT_RATE_LARGE + " - $" + 7 * LIGHT_RATE_LARGE;
        deepBody.innerText = "4 cleaners\n6 - 9 hours\n$" + 6 * DEEP_RATE * 2 + " - $" + 9 * DEEP_RATE * 2;
        moveBody.innerText = "4 cleaners\n6 - 9 hours\n$" + 6 * MOVE_RATE * 2 + " - $" + 9 * MOVE_RATE * 2;
        recurringResults.style.visibility = "hidden";
    } else {
        lightSqftRange.innerText = "";
        deepSqftRange.innerText = "";
        moveSqftRange.innerText = "";
        lightBody.innerText = "Square footage not found";
        deepBody.innerText = "Square footage not found";
        moveBody.innerText = "Square footage not found";
        recurringResults.style.visibility = "hidden";
    }

    addOnWalls.innerText = "Walls: $60";
    addOnGarage.innerText = "Garage: $35";
    addOnPatio.innerText = "Patio: $25";
    addOnTitle.innerText = "Add Ons";


    sqftForm.reset();
})

