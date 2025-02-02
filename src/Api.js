import axios from 'axios';

const UNSPLASH_URL = 'https://api.unsplash.com/search/photos';

const fetchImages = async (query, page = 1) => {
  const API_KEY = '6cEmr65VdWJ-sbdZ5iJocmF1k0DshDnhPiT7Ue7Bjvo';
  try {
    const response = await axios.get(UNSPLASH_URL, {
      params: {
        query,
        page,
        per_page: 10,  
        client_id: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default fetchImages;