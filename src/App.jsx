import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Card from "./components/card";

function App() {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);
  const [tekshir, setTekshir] = useState(false);

  async function FetchApi() {
    try {
      let api = await axios.get("http://localhost:3000/products");
      setProduct(api.data);
    } catch (error) {
      setError(error);
      setTekshir(true);
    }
  }

  async function handleDelete(productId) {
    try {
      await axios.delete(`http://localhost:3000/products/${productId}`);
      setProduct(product.filter((item) => item.id !== productId));
    } catch (error) {
      console.error("O'chirishda xatolik yuz berdi:", error);
    }
  }

  useEffect(() => {
    FetchApi();
  }, []);

  return tekshir ? (
    <>
      <h1 className="text-[52px] text-center bg-red-700 border mt-[20%]">
        {error.message}
      </h1>
    </>
  ) : (
    <div className="container mx-auto p-5">
      <div className="flex items-center flex-wrap gap-5">
        {product.map((item) => (
          <Card
            key={item.id}
            name={item.name}
            img={item.image}
            onDelete={() => handleDelete(item.id)} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;
