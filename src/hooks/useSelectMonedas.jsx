import { useState } from "react";

const useSelectMonedas = (label, opciones) => {
  const [state, setState] = useState("");

  const SelectMonedas = () => (
    <>
      <label className="block text-white text-2xl font-bold my-4">
        {label}
      </label>
      <select
        className="w-full text-lg p-3 rounded-md"
        value={state}
        onChange={(e) => setState(e.target.value)}
      >
        <option value="">- Seleccione -</option>
        {opciones.map((opcion) => (
          <option key={opcion.id} value={opcion.id}>
            {opcion.nombre}
          </option>
        ))}
      </select>
    </>
  );

  return [state, SelectMonedas];
};

export default useSelectMonedas;
