import React, { useState } from 'react';
import './IMCCalculator.css';

function IMCCalculator() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = () => {
    const alturaMetros = altura / 100;
    const imcCalculado = peso / (alturaMetros * alturaMetros);
    setImc(imcCalculado.toFixed(2));

    if (imcCalculado < 18.5) {
      setClassificacao('Abaixo do peso');
    } else if (imcCalculado >= 18.5 && imcCalculado < 24.9) {
      setClassificacao('Peso normal');
    } else if (imcCalculado >= 25 && imcCalculado < 29.9) {
      setClassificacao('Sobrepeso');
    } else if (imcCalculado >= 30 && imcCalculado < 34.9) {
      setClassificacao('Obesidade grau I');
    } else if (imcCalculado >= 35 && imcCalculado < 39.9) {
      setClassificacao('Obesidade grau II');
    } else {
      setClassificacao('Obesidade grau III');
    }
  };

  return (
    <div className="imc-calculator">
      <h1>Calculadora de IMC</h1>
      <div className="form-group">
        <label>Altura (cm):</label>
        <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} placeholder="Digite sua altura em cm"/>
      </div>
      <div className="form-group">
        <label>Peso (kg):</label>
        <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} placeholder="Digite seu peso em kg"/>
      </div>
      <button onClick={calcularIMC}>Calcular IMC</button>

      {imc && (
        <div className="resultado">
          <h2>Seu IMC: {imc}</h2>
          <p>Classificação: {classificacao}</p>
        </div>
      )}
    </div>
  );
}

export default IMCCalculator;
