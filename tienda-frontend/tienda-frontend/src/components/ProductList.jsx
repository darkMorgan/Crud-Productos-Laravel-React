import { useEffect, useState } from "react";
import api from "../api";

export default function ProductList({ onEdit, reload }) {
  const [products, setProducts] = useState([]);

  const load = async () => {
    const res = await api.get("/products");
    setProducts(res.data);
  };

  useEffect(() => {
    load();
  }, [reload]);

  const deleteProduct = async (id) => {
    await api.delete(`/products/${id}`);
    load();
  };

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 shadow">
      <table className="w-full text-left border-collapse table-auto">

        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="p-3 border w-1/6">Nombre</th>
            <th className="p-3 border w-2/6">Descripción</th>
            <th className="p-3 border w-2/6">Precio</th>
            <th className="p-3 border w-1/6 text-center">Stock</th>
            <th className="p-3 border w-auto">Acciones</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p) => (
            <tr key={p.id} className="hover:bg-gray-50 transition">
              <td className="p-3 border truncate">{p.name}</td>

              <td className="p-3 border whitespace-pre-wrap break-words">
                {p.description}
              </td>

              <td className="p-3 border">S/ {p.price}</td>
              <td className="p-3 border">{p.stock}</td>

              <td className="p-3 border">
                <div className="flex flex-wrap gap-2">
                  <button
                    className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
                    onClick={() => onEdit(p)}
                  >
                    Editar
                  </button>

                  <button
                    className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"
                    onClick={() => deleteProduct(p.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </td>
            </tr>
          ))}

          {products.length === 0 && (
            <tr>
              <td colSpan="5" className="p-4 text-center text-gray-500">
                No hay productos aún
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
