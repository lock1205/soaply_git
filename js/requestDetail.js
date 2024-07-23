const url = new URL(window.location.href);
console.log(url.searchParams.get('idx'));
const idx = url.searchParams.get('idx');

const datailWrapper = document.querySelector('.detail-wrapper');

const getDetailData = async () => {
  await fetch(
    `https://dabipyeung.com/soaply_backend/model/get_details.php?idx=${idx}`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      let dataElement;

      /*
      if (Array.isArray(data)) {
        t_data = data;
      } else {
        t_data = [data];
      }
        */
      // let dataArr = Array.isArray(data) ? data : [data]; //배열인지 확인 하는 구문

      //console.log(dataArr);

      //   data.map((item) => {
      //기본적으로 data는 배열로 저장된다. 하지만 map을 사용하면 배열을 걷어내고 하나하나의 데이터로 사용할 수 있다. foreach도 비슷하나 다른 점이 있다.

      //   console.log(item);

      //데이터를 핸들링 할때 array를 걷어내고 화면에 뿌려준다!!!!! (map을 사용할 수 없다)

      dataElement = `<p>${data.pro_idx}</p>
        <p>${data.pro_desc}</p>
        <h2>${data.pro_price}</h2>
        <h3>${data.pro_name}</h3>
        <p>${data.pro_reg}</p>
        <img src="images/${data.pro_img}" alt="">`;
      datailWrapper.insertAdjacentHTML('beforeend', dataElement); //insertAdjacentElement는 클래스 안의 내용을 바꾸기 위해 사용된다.
      //   });
    })
    .catch((error) => {
      console.log(error);
    });
};

getDetailData();
