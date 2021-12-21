import { NextPage } from 'next';
import Image  from 'next/image';
import { getImageByDate } from '../../utils/images';

export async function getServerSideProps({query}) {
  const image = await getImageByDate(query.id);

  return {
    props: {
      data: image
    },
  }
}

const ImagePage: NextPage = ({data}) => {
  const {date, explanation, title, url, hdurl} = data;

  return (
    <div>
      <h1>{title}</h1>
      <p>{explanation}</p>
      <Image src={url} width={1000} height={400}/>
    </div>
  )
}
export default ImagePage;