import { useQuery } from 'react-query';
import axios from 'axios';

const fetchUniversities = async (name: string) => {
  const response = await axios.get(
    `http://universities.hipolabs.com/search?country=Czech+Republic&name=${name}`
  );
  return response.data;
};

export const useUniversities = (name: string) => {
  return useQuery(['universities', name], () => fetchUniversities(name));
};