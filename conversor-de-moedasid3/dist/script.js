function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorDolarNumerico = parseFloat(valor);
  var Converte = valorDolarNumerico / 5;
  console.log(`R$${valorDolarNumerico} é igual a $${Converte} `);
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertidoDolar = `R$${valorDolarNumerico} é igual a $${Converte} `;
  elementoValorConvertido.innerHTML = valorConvertidoDolar;
}
function ConverterReal() {
  var valorElementoR = document.getElementById("valor");
  var valorR = valorElementoR.value;
  var valorRealNumerico = parseFloat(valorR);
  var ConverteR = valorRealNumerico * 5;
  console.log(`$${valorRealNumerico} é igual a R$${ConverteR}`);
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertidoReal = `$${valorRealNumerico} é igual a R$${ConverteR}`;
  elementoValorConvertido.innerHTML = valorConvertidoReal;
}