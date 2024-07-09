const ul = document.querySelector("ul");

const posts = [
  { title: 'Post one', body: 'This is post one',  link: 'href://www.facebook.com' },
  { title: 'Post two', body: 'This is post two',  link: 'href://www.facebook.com' }
];

function getPosts() {
    let output = '';
    posts.forEach((post, index) => {
      output += `<li id="list-${index + 1}"><a href="${post.link}">${post.title}</a></li>`;
    });

    ul.innerHTML = output;
}

function createPost(post, callback) {
    posts.push(post);
    callback();
}


createPost({ title: 'Post three', body: 'This is post three', link: 'href://www.facebook.com'}, getPosts);