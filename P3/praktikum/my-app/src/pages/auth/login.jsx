import Link from "next/link";
import { useRouter } from "next/router";

const HalamanLogin = () => {
  const { push } = useRouter();

  const handlerLogin = () => {
    // simulasi login berhasil
    push("/produk"); // navigasi imperatif
  };

  return (
    <div>
      <h1>Halaman Login</h1>

      {/* Imperatif navigation */}
      <button onClick={handlerLogin}>Login</button>
      <br />

      {/* Declarative navigation */}
      <Link href="/auth/register">Ke Halaman Register</Link>
    </div>
  );
};

export default HalamanLogin;