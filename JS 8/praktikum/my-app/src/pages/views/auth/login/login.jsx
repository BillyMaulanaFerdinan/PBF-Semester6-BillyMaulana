import Link from "next/link";
import { useRouter } from "next/router";

const TampilanLogin = () => {
  const { push } = useRouter();

  const handlerLogin = () => {
    // simulasi login berhasil
    localStorage.setItem("isLogin", "true");
    push("/produk");
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Halaman Login</h1>

      <button
        onClick={handlerLogin}
        className="px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Login
      </button>
      <br />
      <h1 className="text-red-500 border border-red-500 rounded px-2 py-1">
        Belum Punya Akun
      </h1>
      <Link href="/auth/register" className="mt-4 text-blue-700 underline">
        Ke Halaman Register
      </Link>
    </div>
  );
};

export default TampilanLogin;