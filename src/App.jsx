import { useEffect, useState } from "react";
import Form from "./components/Form";
import Resultado from "./components/Resultado";
import Spinner from "./components/Spinner";
import ImgCripto from "/imagen-criptos.png";

const App = () => {
  const [monedas, setMonedas] = useState({});
  const [resultado, setResultado] = useState({});
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    if (Object.keys(monedas).length > 0) {
      setCargando(true);
      setResultado({});
      const cotizarCripto = async () => {
        const { moneda, cripto } = monedas;
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`;
        const respuesta = await fetch(url);
        const { DISPLAY } = await respuesta.json();
        setResultado(DISPLAY[cripto][moneda]);
        setCargando(false);
      };
      setTimeout(cotizarCripto, 1000);
    }
  }, [monedas]);

  return (
    <section className="max-w-6xl container mx-auto grid gap-10 md:grid-cols-2">
      <img
        className="block max-w-[25rem] w-[80%] mt-24 mx-auto"
        src={ImgCripto}
        alt="Imagen Cripto"
      />
      <div>
        <h1 className="mb-8 text-white text-4xl text-center font-bold md:mt-20">
          Cotiza Criptomonedas al Instante
        </h1>
        <Form setMonedas={setMonedas} />
        {cargando && <Spinner />}
        {resultado.PRICE && <Resultado resultado={resultado} />}
      </div>
    </section>
  );
};

export default App;
