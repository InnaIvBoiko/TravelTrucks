import axios from 'axios';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

export const getCampers = async () => {
    const response = await axios.get('/campers');
    return response.data.items;
};

export const getCamperById = async (id) => {
    const response = await axios.get(`/campers/${id}`);
    return response.data;
};


// export const getMovieSearch = async (search) => {
//     const response = await axios.get(`/search/campers?query=${search}`);
//     console.log(response.data);
//     return response.data.results;
// };