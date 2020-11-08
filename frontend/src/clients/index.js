import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost:5000/api'
});

const getByTerm = async (term) => {
    return api.get(`/items?q=${encodeURIComponent(term)}`);
}

const getByProductId = async (productId) => {
    return api.get(`/items/${encodeURIComponent(productId)}`);
}

export {
    getByTerm,
    getByProductId
}