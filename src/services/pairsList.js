import api from '../api';

export function getPairsList(query,limit) {
   return api.get(`api/v1/pairs?second_ticker=${query}${limit ? `&limit=${limit}` : ''}`).then((res) => res.data.pairs);
}
