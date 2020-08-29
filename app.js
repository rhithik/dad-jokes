function fetchJoke() {
  fetch('https://icanhazdadjoke.com/', {
    headers: { Accept: 'application/json' },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json.joke);
      document.getElementById('joke').textContent = json.joke;
    });
}
document.getElementById('joke').textContent = fetchJoke();
document.getElementById('get_joke').addEventListener('click', fetchJoke);
