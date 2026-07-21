const postsContainer = document.getElementById("postsContainer");

async function loadPosts() {
    const response = await fetch("https://dummyjson.com/posts");
    const data = await response.json();

    displayPosts(data.posts);
}

function displayPosts(posts) {
    for (const post of posts) {
        const postCard = `

        <div class="bg-white rounded-3xl border-2 border-bluesome">
            <div class="p-8">
                <h2 class="font-baloo text-3xl font-bold text-bluesome">${post.title}</h2>
                <p class="font-montserrat text-gray-700 mt-5 leading-7">${post.body}</p>

                <div class="flex flex-wrap gap-2 mt-8">
                    ${post.tags.map(tag => `
                        <span class="bg-blue-100 text-bluesome px-3 py-1 rounded-full text-sm font-semibold">
                                #${tag}
                        </span>`).join("")}
                </div>
            </div>
        </div>`;

        postsContainer.innerHTML += postCard;
    }
}

loadPosts();