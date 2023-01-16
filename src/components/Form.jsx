import { useEffect, useState } from "react";
import { monedas } from "../data/monedas";
import useSelectMonedas from "../hooks/useSelectMonedas";
import Error from "./Error";

const Form = ({ setMonedas }) => {
  const [criptos, setCriptos] = useState([]);
  const [error, setError] = useState(false);

  const [moneda, SelectMonedas] = useSelectMonedas("Elije tu Moneda", monedas);
  const [cripto, SelectCriptos] = useSelectMonedas("Elije tu Criptomoneda", criptos);

  useEffect(() => {
    const getApi = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";
      const respuesta = await fetch(url);
      const { Data } = await respuesta.json();
      const arrCriptos = Data.map((cripto) => {
        const { Name, FullName } = cripto.CoinInfo;
        const objetoCripto = {
          id: Name,
          nombre: FullName,
        };
        return objetoCripto;
      });
      setCriptos(arrCriptos);
    };
    getApi();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([moneda, cripto].includes('')) {
      setError(true);
      return;
    }
    setError(false);
    setMonedas({
      moneda,
      cripto,
    });
  };

  return (
    <>
      {error && <Error>Todos los campos son obligatorios</Error>}
      <form onSubmit={handleSubmit}>
        <SelectMonedas />
        <SelectCriptos />
        <input
          className="bg-[#9497ff] border-none w-full p-2.5 my-10 text-white text-xl font-bold uppercase rounded-md transition-all ease-in-out duration-500 hover:bg-[#7a7dfe] hover:cursor-pointer"
          type="submit"
          value="Cotizar"
        />
      </form>
    </>
  );
};

export default Form;
