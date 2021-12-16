import type { NextPage } from 'next'
import Image from 'next/image';
import { ImagesList } from '../../components/imagesList/ImagesList';

export async function getServerSideProps({query}) {
  // this logic should be moved to other place in the future
  const url = `${process.env.NASA_API}?start_date=2020-07-01&end_date=2020-07-10&api_key=${process.env.NASA_API_KEY}`
  const res = await fetch(url);
  const data = await res.json();
  const images = data.filter(({media_type}) => media_type === 'image')
  //

  return {
    props: {
      data: images,
      query
    },
  }
}

const Images: NextPage = (props) => {
  const {data, optimized} = props;

  return (
    <div>
      Here will be data from NASA ({data.length}):
      <ImagesList
        data={data}
        renderItem={({url,title}) => <Image src={url} alt={title} layout={'fill'}/>}
      />
    </div>
  )
}
export default Images;