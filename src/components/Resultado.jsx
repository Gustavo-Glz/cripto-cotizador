const Resultado = ({ resultado }) => {
  const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado;
  return (
    <div className="text-white flex items-center gap-12">
      <img className="block w-24" src={`https://cryptocompare.com/${IMAGEURL}`} alt="Imagen Cripto" />
      <div>
      <p className="text-2xl">El precio es de: <span className="font-bold">{PRICE}</span></p>
      <p className="text-lg">Precio mas alto del dia: <span className="font-bold">{HIGHDAY}</span></p>
      <p className="text-lg">Precio mas bajo del dia: <span className="font-bold">{LOWDAY}</span></p>
      <p className="text-lg">Variacion ultimas 24 horas: <span className="font-bold">{CHANGEPCT24HOUR}</span></p>
      <p className="text-lg">Ultima actualización: <span className="font-bold">{LASTUPDATE}</span></p>
      </div>
    </div>
  );
};

export default Resultado;
