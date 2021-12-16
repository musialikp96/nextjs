import type { NextPage } from 'next'

export async function getServerSideProps() {
  // this logic should be moved to other place in the future
  const url = `${process.env.NASA_API}?count=10&api_key=${process.env.NASA_API_KEY}`
  const res = await fetch(url);
  const data = await res.json();
  const images = data.filter(({media_type}) => media_type === 'image')
  //

  return {
    props: {
      data: images
    },
  }
}

const Images: NextPage = (props) => {
  const {data} = props;

  return (
    <div>
      Here will be data from NASA ({data.length}):
      <ul>
        {data.map(({hdurl,title}) => <li key={title}><img src={hdurl} alt={title}/></li>)}
      </ul>
    </div>
  )
}
export default Images;