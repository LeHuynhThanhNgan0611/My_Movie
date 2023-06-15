import { useParams } from 'react-router-dom';

function GenrePage() {
    const { theLoai } = useParams();
    return <>Chúng ta đang xem thể loại: {theLoai}</>;
}

export default GenrePage;
