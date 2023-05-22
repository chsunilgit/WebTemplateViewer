import mockData from '../data/mockData.json';

const apiService = {
  fetchData: async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    //   const response = await axios.get('/api/data');
      return mockData;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};

export default apiService;
