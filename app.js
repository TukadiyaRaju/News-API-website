const root = document.getElementById('root');
let title = 'Title',
  image,
  content = 'Lorem Ipsum....',
  data;

// Progression 1: create a function and fetch the api using axios
axios
  .get(
    'https://gnews.io/api/v4/top-headlines?token=0ac44cb176a691c1f4e172f78f71c595&lang=en'
  )
  .then((resp) => {
    data = resp.data.articles;
    for (let i = 0; i < 9; i++) {
      title = data[i].title;
      image = data[i].image;
      content = data[i].content;

      const card = ` 
      <div class="col-md-3 m-5">
      <div class="card" style="width: 18rem">
      <img class="card-img-top" src="${image}" alt="Card image cap" />
      <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">${content}</p>
      </div>
      </div>
      </div>`;

      root.innerHTML += card;
    }
  })
  .catch((error) => {
    root.innerHTML = 'OOPS! An error occured... \n' + error;
  });
