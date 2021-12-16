import { format, compareAsc } from 'date-fns'

export const getImages = async (page: number = 0) => {
  const startDate = new Date(2020,0,1 + page * 7);
  const endDate = new Date(2020,0,7 + page * 7);


  const params = `start_date=${format(startDate,'yyyy-MM-dd')}&end_date=${format(endDate,'yyyy-MM-dd')}`;

  const url = `${process.env.NEXT_PUBLIC_NASA_API}?${params}&api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}`;
  const res = await fetch(url);
  const data = await res.json();
  return data.filter(({media_type}) => media_type === 'image');
}