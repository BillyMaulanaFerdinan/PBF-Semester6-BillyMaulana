import styles from './main.module.css';
import Link from 'next/link';

const Main = () => {
  const products = [
    { id: 1, name: 'Produk A' },
    { id: 2, name: 'Produk B' },
    { id: 3, name: 'Produk C' },
  ];

  return (
    <main className={styles.main}>
      <ul className={styles.productList}>
        {products.map((p) => (
          <li className={styles.productItem} key={p.id}>
            <Link href={`/produk/${p.id}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Main;
