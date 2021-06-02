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
