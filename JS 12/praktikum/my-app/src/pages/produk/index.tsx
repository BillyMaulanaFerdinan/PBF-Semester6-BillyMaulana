import TampilanProduk from "../../views/product";
import useSWR from "swr";
import fetcher from "../../utils/swr/fetcher";

const kategori = () => {
  const { data, error, isLoading } = useSWR("/api/produk", fetcher);

  return (
    <div>
      <TampilanProduk
        products={data?.data ?? []}
        isLoading={isLoading}
      />
    </div>
  );
};

export default kategori;