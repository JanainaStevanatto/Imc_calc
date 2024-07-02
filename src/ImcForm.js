import React, { useState } from 'react';

function IMCForm() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcularIMC = (e) => {
    e.preventDefault();
    const alturaMetros = altura / 100;
    const imc = peso / (alturaMetros * alturaMetros);
    setResultado(imc.toFixed(2));
  };

  const getClassificacao = (imc) => {
    if (imc < 18.5) return 'Abaixo do peso';
    if (imc < 24.9) return 'Peso normal';
    if (imc < 29.9) return 'Sobrepeso';
    if (imc < 34.9) return 'Obesidade Grau I';
    if (imc < 39.9) return 'Obesidade Grau II';
    return 'Obesidade Grau III';
  };

  return (
    <div>
      <form onSubmit={calcularIMC}>
        <div>
          <label>Altura (cm): </label>
          <input
            type="number"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
          />
        </div>
        <div>
          <label>Peso (kg): </label>
          <input
            type="number"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />
        </div>
        <button type="submit">Calcular IMC</button>
      </form>
      {resultado && (
        <div>
          <h2>Seu IMC é: {resultado}</h2>
          <h3>Classificação: {getClassificacao(resultado)}</h3>
        </div>
      )}
    </div>
  );
}

export default IMCForm;
