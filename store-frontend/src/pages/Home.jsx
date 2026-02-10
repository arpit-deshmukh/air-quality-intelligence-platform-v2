import { FiShoppingBag } from "react-icons/fi";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-3 bg-white">
      
      <FiShoppingBag className="text-gray-800" size={40} />

      <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
        AQI Store
      </h1>

      <p className="text-sm text-gray-500">
        Clean air intelligence, delivered.
      </p>

      <span className="text-sm text-red-600">
        Tailwind working 
      </span>

    </main>
  );
}
