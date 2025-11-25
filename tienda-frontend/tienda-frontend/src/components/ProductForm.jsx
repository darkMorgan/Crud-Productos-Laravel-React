import { useEffect, useState } from "react";
import api from "../api";

export default function ProductForm({ productToEdit, onSaved }) {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
  });

  useEffect(() => {
    if (productToEdit) setProduct(productToEdit);
  }, [productToEdit]);

  const handleChange = (e) =>
    setProduct({ ...product, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (productToEdit) {
      await api.put(`/products/${product.id}`, product);
    } else {
      await api.post("/products", product);
    }

    setProduct({ name: "", description: "", price: "", stock: "" });
    onSaved();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      <input
        name="name"
        placeholder="Nombre del producto"
        value={product.name}
        onChange={handleChange}
        className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400"
      />

      <textarea
        name="description"
        placeholder="Descripción"
        rows="4"
        value={product.description}
        onChange={handleChange}
        className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400"
      />

      <input
        type="number"
        name="price"
        placeholder="Precio"
        value={product.price}
        onChange={handleChange}
        className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400"
      />

      <input
        type="number"
        name="stock"
        placeholder="Stock"
        value={product.stock}
        onChange={handleChange}
        className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400"
      />

      <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold shadow">
        {productToEdit ? "Actualizar Producto" : "Crear Producto"}
      </button>
    </form>
  );
}
