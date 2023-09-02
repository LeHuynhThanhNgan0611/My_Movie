import { useParams } from 'react-router-dom';

function CountryPage() {
    const { quocGia } = useParams();
    return <>Chúng ta đang xem phim của nước: {quocGia}</>;
}

export default CountryPage;
