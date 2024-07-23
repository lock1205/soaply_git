const sliderWrapper = document.querySelector('.swiper-wrapper');

const getData = async () => {
  await fetch(
    'https://www.dabipyeung.com/soaply_backend/model/get_products.php?qnt=4'
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      let dataElement;

      data.map((item) => {
        //기본적으로 data는 배열로 저장된다. 하지만 map을 사용하면 배열을 걷어내고 하나하나의 데이터로 사용할 수 있다. foreach도 비슷하나 다른 점이 있다.
        // console.log(item);
        dataElement = `
          <div class="swiper-slide">
            <div class="slider-image">
              <img src="images/${item.pro_img}" alt="slider 1">
            </div>
            <div class="slider-text">
              <h4>${item.pro_name}</h4>
              <p>${item.pro_desc}</p>
              <a href="detail.html?idx=${item.pro_idx}" class="common-btn">자세히 보기</a>
            </div>
          </div>
        `;
        sliderWrapper.insertAdjacentHTML('beforeend', dataElement); //insertAdjacentElement는 클래스 안의 내용을 바꾸기 위해 사용된다.
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

getData();

// const name = '김개똥';
// const age = 23;
// // const str = 'hello' + name + '님' + '나이는' + age + '세 입니다.';
// const str = `hello ${name}님 나이는 ${age}세 입니다.`; // template literal
// console.log(str);
//$변수를 사용할 경우 벡틱키를 사용해야 한다!!!!
