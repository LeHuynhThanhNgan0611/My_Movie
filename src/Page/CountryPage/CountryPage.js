import { useParams } from 'react-router-dom';

function CountryPage() {
    const { quocgia } = useParams();
    return <>Chúng ta đang xem phim của nước: {quocgia}</>;
}

export default CountryPage;
