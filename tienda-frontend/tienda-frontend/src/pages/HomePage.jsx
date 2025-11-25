import { useState } from "react";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

export default function HomePage() {
  const [productToEdit, setProductToEdit] = useState(null);
  const [reload, setReload] = useState(false);

  const handleSaved = () => {
    setProductToEdit(null);
    setReload(!reload);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-10 flex justify-center items-start">

      <div className="w-full max-w-7xl"> {/* ← MÁS GRANDE */}

        <h1 className="text-5xl font-bold text-gray-900 mb-12 text-center">
           Gestión de Productos
        </h1>

        <div className="bg-white shadow-2xl rounded-2xl p-12 border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* FORMULARIO */}
            <div>
              <h2 className="text-3xl font-semibold mb-4 text-gray-700">
                {productToEdit ? "Editar Producto" : "Agregar Producto"}
              </h2>

              <ProductForm
                productToEdit={productToEdit}
                onSaved={handleSaved}
              />
            </div>

            {/* LISTA */}
            <div>
              <h2 className="text-3xl font-semibold mb-4 text-gray-700">
                Lista de Productos
              </h2>

              <ProductList
                onEdit={(p) => setProductToEdit(p)}
                reload={reload}
              />
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
