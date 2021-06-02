const moedas_convert = document.querySelector('#moedas_convert');
const moedas_result = document.querySelector('#moedas_result');
const montante_convert = document.querySelector('#montante_convert');
const montante_result = document.querySelector('#montante_result');
const trocar = document.querySelector('#trocar');
const valor = document.querySelector('#valor');

moedas_convert.addEventListener('change', compute);
moedas_result.addEventListener('change', compute);
montante_convert.addEventListener('input', compute);
montante_result.addEventListener('input', compute);

trocar.addEventListener('click', ()=>{
    const temp = moedas_convert.value;
    moedas_convert.value = moedas_result.value;
    moedas_result.value= temp;
    compute();
});

function compute(){
    const moedas_convert1 = moedas_convert.value;
    const moedas_result1 = moedas_result.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${moedas_convert1}`)
    .then(res => res.json())
    .then(res => {
        const new_rate = res.rates[moedas_convert1];
        valor.innerText = `1 ${moedas_convert1} = ${new_rate} ${moedas_result1}`
        montante_result.value = (montante_convert.value * new_rate).toFixed(2);
    })
}

compute();