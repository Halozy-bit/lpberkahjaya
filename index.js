// Impor head.html dan tambahkan ke dalam elemen head di index.html
fetch('head.html')
  .then(response => response.text())
  .then(data => {
    document.head.insertAdjacentHTML('beforeend', data);
  });


// Impor header.html dan tambahkan ke dalam elemen header di index.html
fetch('header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;
  });

// Impor section1.html dan tambahkan ke dalam elemen section1 di index.html
fetch('section1.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('section1').innerHTML = data;
  });

// Impor footer.html dan tambahkan ke dalam elemen footer di index.html
fetch('footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;
  });
