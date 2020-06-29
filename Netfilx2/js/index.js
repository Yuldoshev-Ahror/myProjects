
function mySubmit(index) {
    let list = document.getElementsByClassName('tab-container');
    let submitElement = document.getElementsByClassName('tabs-icon');
    let element = document.getElementById(`tab-content-${index}`);
    for (let element of list)
        element.style.display = 'none';
    for (let element of submitElement)
        element.style.borderBottom = 'none';

    element.style.display = 'block';
    submitElement[index-1].style.borderBottom = '2px solid red';
}