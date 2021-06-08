const zips = ['80216', '80211', '80212', '80214', '80215', '80226', '80204', '80219', '80207', '80205', '80202', '80203', '80218', '80206', '80220', '80223', '80209', '80246', '80210', '80222', '80224', '80110', '80113'];
const zip = document.getElementById('zipCode');
const form = document.getElementById('form');
const results = document.getElementById('results');

function removeSpaces(string) {
    return string.split(' ').join('');
}

form.addEventListener('submit', (e) => {    
    e.preventDefault();
    let zipv = removeSpaces(zip.value);

    if (zips.indexOf(zipv) > -1) {
        results.innerText = zipv;
        results.style.backgroundColor = 'green';

    } else {
        results.innerText = zipv;
        results.style.backgroundColor = 'red';
    }

    form.reset();
})
