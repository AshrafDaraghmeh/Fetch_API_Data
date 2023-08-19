const Data = document.getElementById('Data');

fetch('https://jsonplaceholder.typicode.com/posts').then(Response =>Response.json()).then(post=>post.forEach(post=> { const li = document.createElement('li');
li.textContent =`${post.id}: ${post.title}`;
Data.appendChild(li);
}));