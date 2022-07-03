const BASE_URL = 'https://api.thecatapi.com/v1/images/search'; //Nova API atualizada

const catBtn = document.getElementById('change-cat');

const getCats = async () => {

   const data = await fetch(BASE_URL,{

    mode:'cors' //Ativar modo cors nessa configuração

  })

   .then(res => res.json())

   .then(json=> json[0].url) //[0] pega a primeira imagem // .url em vez de .weburl

   .catch(error=> console.log(error))

   return data;

};

const loadImg = async () => {

   const catImg = document.getElementById('cat');

   catImg.src = await getCats();

};

catBtn.addEventListener('click', loadImg);

loadImg();