// Async/Await Example 1

movePlayer(100, 'Left')
  .then(() => movePlayer(400, 'Left'))
  .then(() => movePlayer(10, 'Right'))
  .then(() => movePlayer(330, 'Left'));

async function playerStart() {
  const firstMove = await movePlayer(100, 'Left'); // pause
  const secondMove = await movePlayer(400, 'Left'); // pause
  const thirdMove = await movePlayer(10, 'Right'); // pause
  const fourthMove = await movePlayer(330, 'Left'); // pause

  return { firstMove, secondMove, thirdMove, fourthMove };
}

// Async/Await Example 2

/* fetch('https://jsonplaceholder.typicode.com/users')
  .then((resp) => resp.json())
  .then(console.log); */

async function fetchUsers() {
  const resp = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await resp.json();
  console.log(data);
  return data;
}

// Async/Await Example 3

const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums',
];

/* Promise.all(urls.map((url) => fetch(url).then((resp) => resp.json())))
  .then((results) => {
    console.log('users', results[0][0]);
    console.log('posts', results[1][0]);
    console.log('albums', results[2][0]);
  })
  .catch(() => console.log('oops')); */

const getData = async function () {
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map((url) => fetch(url).then((resp) => resp.json()))
    );
    console.log('users', users);
    console.log('posts', posts);
    console.log('albums', albums);
  } catch (err) {
    console.log('oops', err);
  }
};
