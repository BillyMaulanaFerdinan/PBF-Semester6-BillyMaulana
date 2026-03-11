import styles from './main.module.css';
import Link from 'next/link';

const Main = () => {
  const products = [
    { id: 1, name: 'Produk A' },
    { id: 2, name: 'Produk B' },
    { id: 3, name: 'Produk C' },
  ];

  return (
    <main className="p-4">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((p) => (
          <li
            className="border rounded p-4 bg-white hover:shadow"
            key={p.id}
          >
            <Link href={`/produk/${p.id}`} className="text-blue-600">
              {p.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Main;
