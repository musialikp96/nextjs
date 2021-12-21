import type { NextPage } from 'next'
import Image from 'next/image';
import { ImagesList } from '../../components/imagesList/ImagesList';
import { getImages } from '../../utils/images';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export async function getStaticProps() {
  const images = await getImages(0);

  return {
    props: {
      data: images
    },
  }
}

const Images: NextPage = (props) => {
  const {data} = props;

  const [page,setPage] = useState(0);
  const [images,setImages] = useState(data);

  useEffect(() => {
    const fetchData = async () => {
      const images = await getImages(page);
      setImages(prev => [...prev, ...images]);
    };
    if(page > 0) {
      fetchData();
    }
  },[page]);

  return (
    <div>
      Here will be data from NASA ({images.length}):
      <ImagesList
        data={images}
        renderItem={({url,title, date}) => <Link href={`/images/${date}`}><Image src={url} alt={title} layout={'fill'}/></Link>}
        onLoadMore={() => setPage(page => page + 1)}
      />
    </div>
  )
}
export default Images;