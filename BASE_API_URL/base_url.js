import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';



const URL = 'https://recruitment-api-production.up.railway.app/'

const instance = axios.create({
  baseURL: URL, timeout: 1000
});

instance.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('tokens')
  const tokenAccess = JSON.parse(token)
  config.headers.Authorization = tokenAccess ? `Bearer ${tokenAccess.access}` : null;
  
  return config;
});

export default instance;