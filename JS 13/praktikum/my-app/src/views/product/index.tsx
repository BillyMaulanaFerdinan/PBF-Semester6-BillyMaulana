import styles from "../../pages/produk/product.module.scss";
import Link from "next/link";

type ProductType = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
};

interface TampilanProdukProps {
  products: ProductType[];
  isLoading: boolean;
}

const TampilanProduk = ({ products, isLoading }: TampilanProdukProps) => {
  const loadingSkeletons = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <div className={styles.produk}>
      <h1 className={styles.produk__title}>Daftar Produk</h1>
      <div className={styles.produk__content}>
        {isLoading
          ? loadingSkeletons.map((n) => (
              <div
                key={n}
                className={styles.produk__content__skeleton}
              >
                <div
                  className={styles.produk__content__skeleton__image}
                ></div>
                <div
                  className={styles.produk__content__skeleton__name}
                ></div>
                <div
                  className={styles.produk__content__skeleton__category}
                ></div>
                <div
                  className={styles.produk__content__skeleton__price}
                ></div>
              </div>
            ))
          : products.map((product: ProductType) => (
            <Link href={`/produk/${product.id}`} key={product.id} className={styles.produk__content__item__link}>

              <div
                key={product.id}
                className={styles.produk__content__item}
              >
                <div
                  className={styles.produk__content__item__image}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    width={200}
                  />
                </div>
                <h4
                  className={
                    styles.produk__content__item__name
                  }
                >
                  {product.name}
                </h4>
                <p
                  className={
                    styles.produk__content__item__category
                  }
                >
                  {product.category}
                </p>
                <p
                  className={
                    styles.produk__content__item__price
                  }
                >
                  Rp {product.price.toLocaleString()}
                </p>
              </div>
            </Link>
            ))}
      </div>
    </div>
  );
};

export default TampilanProduk;