import { useRouter } from "next/router";
import { useEffect } from "react";
import TampilanProduk from "../views/produk/index";

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
      <TampilanProduk />
    </div>
  );
};

export default HalamanProduk;