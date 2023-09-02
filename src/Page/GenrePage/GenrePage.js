import { useParams } from 'react-router-dom';

function GenrePage() {
    const { theloai } = useParams();
    return <>Chúng ta đang xem thể loại: {theloai}</>;
}

export default GenrePage;
