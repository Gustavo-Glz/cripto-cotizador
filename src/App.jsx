import Form from "./components/Form";
import ImgCripto from "/imagen-criptos.png";

const App = () => {
  return (
    <section className="max-w-5xl container mx-auto grid gap-10 md:grid-cols-2 md:items-center">
      <img
        className="block max-w-[25rem] w-[80%] mt-24 mx-auto"
        src={ImgCripto}
        alt="Imagen Cripto"
      />
      <div>
        <h1 className="mb-8 text-white text-4xl text-center font-bold md:mt-20">
          Cotiza Criptomonedas al Instante
        </h1>
        <Form />
      </div>
    </section>
  );
};

export default App;
