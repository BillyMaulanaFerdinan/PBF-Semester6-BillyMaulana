import fetcher from "@/utils/swr/fetcher";
import { useRouter } from "next/router";
import useSWR from "swr";
import DetailProduk from "@/views/DetailProduct";
import { ProductType } from "@/types/Product.type";


const HalamanProduk = ({product}:{product: ProductType}) => {
// const Router = useRouter();
// console.log(Router);
//     const { query } = useRouter();
//     const { data, error, isLoading } = useSWR(
//         query.id ? `/api/produk/${query.id}` : null,
//         fetcher
//     );
// return (
//     <div>
//         <DetailProduk products={isLoading ? []  : data.data} />
//     </div>
//     );
// };

return (
    <div>
        <DetailProduk products={product} />
    </div>
    );
}

export default HalamanProduk;

export async function getServerSideProps({ params }: { params: { id: string } }) {
    const res = await fetch(`http://localhost:3000/api/produk/${params?.id}`);
    const response = await res.json();
    return {
        props: {
            product: response.data,
        },
    };
}