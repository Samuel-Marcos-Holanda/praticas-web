import React, { useEffect, useState } from "react";
  
import "./App.css";

const App = () => {
  let intervalId;
  const [counter, setCounter] = useState(0)
  const [iniciado, setIniciado] = useState(false);

  useEffect(() => {
    if (iniciado) {
      intervalId = setInterval(() => {
        setCounter(prevCount => prevCount + 1);
      }, 1000)
    }
    return () => clearInterval(intervalId);
  }, [iniciado])

  const iniciarCronometro = () => {
    if (!iniciado) {
        setIniciado(true);
    }
  };

  const pausarCronometro = () => {
      if (iniciado) {
          setIniciado(false);
      }
  };

  const zerarCronometro = () => {
      clearInterval(intervalId);
      setCounter(0);
      setIniciado(false);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '300%',
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: '-15%',
    }}>
      Counter App
      <div style={{
        fontSize: '120%',
        position: 'relative',
        top: '10vh',
      }}>
        {counter}
      </div>
      <div className="buttons">
        <button style={{
          fontSize: '60%',
          position: 'relative',
          top: '20vh',
          marginRight: '5px',
          backgroundColor: 'green',
          borderRadius: '8%',
          color: 'white',
        }}
          onClick={iniciarCronometro}>Começar</button>
        <button style={{
          fontSize: '60%',
          position: 'relative',
          top: '20vh',
          marginLeft: '5px',
          backgroundColor: 'red',
          borderRadius: '8%',
          color: 'white',
        }}
          onClick={pausarCronometro}>Parar</button>
                  <button style={{
          fontSize: '60%',
          position: 'relative',
          top: '20vh',
          marginLeft: '5px',
          backgroundColor: 'pink',
          borderRadius: '8%',
          color: 'white',
        }}
          onClick={zerarCronometro}>Limpar Contador</button>
      </div>
    </div>
  )
}
  
export default App