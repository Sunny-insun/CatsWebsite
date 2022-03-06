const API_ENDPOINT =
  "https://oivhcpn8r9.execute-api.ap-northeast-2.amazonaws.com/dev";

const request = async (url) => {
  try {       
    const result = await fetch(url);
    return result.json();
  } catch (e) {
      alert("에러가 발생하여 다시 검색합니다.")
      request(e)//에러 발생 시 다시 검색
    }
  }


const api = {
  fetchCats: async (keyword) => {
    return request(`${API_ENDPOINT}/api/cats/search?q=${keyword}`)
  },
  fetchCatDetail: id => {
    return request(`${API_ENDPOINT}/api/cats/${id}`);
  },
  fetchRandomCats: () => {
    return request(`${API_ENDPOINT}/api/cats/random50`);
  } 
};


