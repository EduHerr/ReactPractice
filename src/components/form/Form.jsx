// Formulario.jsx
import React, { useState } from "react";

const Form = ({ agregarDatos }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    dob: "",
    rfc: "",
    cp: "",
    direccion: "",
    prodFav: "",
    beneficio: "",
    mail: "",
    celular: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};
    for (const key in formData) {
      if (!formData[key]) {
        newErrors[key] = "Este campo es requerido";
      }
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    agregarDatos(formData);
    setFormData({
      nombre: "",
      dob: "",
      rfc: "",
      cp: "",
      direccion: "",
      prodFav: "",
      beneficio: "",
      mail: "",
      celular: "",
    });
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block mb-2">Nombre</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className={`border rounded w-full p-2 ${errors.nombre ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.nombre && <span className="text-red-500 text-sm">{errors.nombre}</span>}
        </div>
        <div>
          <label className="block mb-2">DOB</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className={`border rounded w-full p-2 ${errors.dob ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.dob && <span className="text-red-500 text-sm">{errors.dob}</span>}
        </div>
        <div>
          <label className="block mb-2">RFC</label>
          <input
            type="text"
            name="rfc"
            value={formData.rfc}
            onChange={handleChange}
            className={`border rounded w-full p-2 ${errors.rfc ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.rfc && <span className="text-red-500 text-sm">{errors.rfc}</span>}
        </div>
        <div>
          <label className="block mb-2">C.P.</label>
          <input
            type="text"
            name="cp"
            value={formData.cp}
            onChange={handleChange}
            className={`border rounded w-full p-2 ${errors.cp ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.cp && <span className="text-red-500 text-sm">{errors.cp}</span>}
        </div>
        <div>
          <label className="block mb-2">Dirección</label>
          <input
            type="text"
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
            className={`border rounded w-full p-2 ${errors.direccion ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.direccion && <span className="text-red-500 text-sm">{errors.direccion}</span>}
        </div>
        <div>
          <label className="block mb-2">Prod. Fav.</label>
          <select
            name="prodFav"
            value={formData.prodFav}
            onChange={handleChange}
            className={`border rounded w-full p-2 ${errors.prodFav ? 'border-red-500' : 'border-gray-300'}`}
          >
            <option value="">Seleccione un producto</option>
            <option value="Producto A">Producto A</option>
            <option value="Producto B">Producto B</option>
          </select>
          {errors.prodFav && <span className="text-red-500 text-sm">{errors.prodFav}</span>}
        </div>
        <div>
          <label className="block mb-2">Beneficio</label>
          <select
            name="beneficio"
            value={formData.beneficio}
            onChange={handleChange}
            className={`border rounded w-full p-2 ${errors.beneficio ? 'border-red-500' : 'border-gray-300'}`}
          >
            <option value="">Seleccione un producto</option>
            <option value="descuento">10% descuento</option>
            <option value="gratis">Producto gratis</option>
          </select>
          {errors.beneficio && <span className="text-red-500 text-sm">{errors.beneficio}</span>}
        </div>
        <div>
          <label className="block mb-2">Mail</label>
          <input
            type="email"
            name="mail"
            value={formData.mail}
            onChange={handleChange}
            className={`border rounded w-full p-2 ${errors.mail ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.mail && <span className="text-red-500 text-sm">{errors.mail}</span>}
        </div>
        <div>
          <label className="block mb-2">Celular</label>
          <input
            type="text"
            name="celular"
            value={formData.celular}
            onChange={handleChange}
            className={`border rounded w-full p-2 ${errors.celular ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.celular && <span className="text-red-500 text-sm">{errors.celular}</span>}
        </div>
      </div>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
        Enviar
      </button>
    </form>
  );
};

export default Form;
