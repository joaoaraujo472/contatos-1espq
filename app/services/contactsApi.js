import axios from "axios";

// Configuração base do axios
const contactsApi = axios.create({
  baseURL: 'https://6abc5a195121d616d90b838d.mockapi.io', // MockAPI
  timeout: 10000, // 10 segundos (API online pode ser mais lenta)
  headers: {
    'Content-Type': 'application/json',
  },
});

export default contactsApi