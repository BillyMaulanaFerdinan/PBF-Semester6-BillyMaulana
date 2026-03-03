import Link from "next/link";

const HalamanRegister = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Halaman Register</h1>
      <Link href="/auth/login" className="text-blue-700 underline">
        Ke Halaman Login
      </Link>
    </div>
  );
};

export default HalamanRegister;