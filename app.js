function Bmi(weight, height) {
    height = height / 100;
    const bmi = weight / (height * height)
    return bmi.toFixed(2);
}
function clearResult() {
    document.getElementById('result').innerHTML = '';
}
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    clearResult()

    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    //validation
    if (isNaN(weight) || isNaN(height)) {
        window.alert('ورودی ها باید عدد باشند و هردو پر شوند ! 😊')
        return false;
    }
    if (height <= 0 || weight <= 0) {
        window.alert('ورودی ها نباید کمتر ز صفر باشد ! 😁')
        return false
    }
    const Result = document.getElementById('result');
    Result.innerHTML = Bmi(weight, height);
})

document.querySelector("input#weight").addEventListener('keydown', clearResult);
document.querySelector("input#height").addEventListener('keydown', clearResult);
