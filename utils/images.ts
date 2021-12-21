import { format } from 'date-fns'

const fetchData = async (params) => {
  const url = `${process.env.NEXT_PUBLIC_NASA_API}?${params}&api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}`;
  const res = await fetch(url);
  // const data = await ;
  return res.json();
}

export const getImages = async (page: number = 0) => {
  const startDate = new Date(2020,0,1 + page * 14);
  const endDate = new Date(2020,0,14 + page * 14);

  const params = `start_date=${format(startDate,'yyyy-MM-dd')}&end_date=${format(endDate,'yyyy-MM-dd')}`;

  const data = await fetchData(params);
  return data.filter(({media_type}) => media_type === 'image');
}

export const getImageByDate = async (date: string) => {
  const params = `date=${date}`;

  return fetchData(params);
}