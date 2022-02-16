const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const Btn = document.getElementById('change-cat');
const img = document.getElementById('cat');

const API = async () => {
  const data = await
    fetch(BASE_URL)
    .then(response => response.json())
    .catch(e => console.log(e))
  return data.webpurl;
  //   try {
  //     const data = await
  //       fetch(BASE_URL);
  //     const json = await
  //       data.json();
  //     return json.webpurl;
  // 
  //   } catch (e) {
  //     console.log(e.meddage)
  //   }
};

const loading = async () => {
  img.src = await API();
}

Btn.addEventListener('click', loading);
loading();