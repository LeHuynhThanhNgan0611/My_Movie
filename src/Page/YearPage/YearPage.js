import { useParams } from 'react-router-dom';

function YearPage() {
    const { namPhatHanh } = useParams();
    return <>Chúng ta đang xem phim năm: {namPhatHanh}</>;
}

export default YearPage;
