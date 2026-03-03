import { useRouter } from "next/router";
import { useEffect } from "react";

const HalamanProduk = () => {
  const router = useRouter();

  useEffect(() => {
    const isLogin = localStorage.getItem("isLogin");

    if (!isLogin) {
      router.push("/auth/login");
    }
  }, [router]);

  return (
    <div>
      <h1>Halaman Produk</h1>
      <p>Ini hanya bisa diakses jika sudah login</p>
    </div>
  );
};

export default HalamanProduk;