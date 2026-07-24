const postsContainer = document.getElementById("postsContainer");


async function loadPosts() {
    const response = await fetch("https://dummyjson.com/posts");
    const data = await response.json();

    displayPosts(data.posts);
}

function displayPosts(posts) {
    for (const post of posts) {
        const postCard = `

    <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 max-w-2xl shadow-xl">
    
    <div>
        <h2 class="font-montserrat text-2xl md:text-3xl font-bold text-white tracking-tight leading-snug">
            ${post.title}
        </h2>
        <p class="font-montserrat text-slate-300 mt-4 text-base md:text-lg leading-relaxed font-normal">
            ${post.body}
        </p>

        <!-- Tags -->
        <div class="flex flex-wrap gap-2 mt-6">
            ${post.tags.map(tag => `
                <span class="bg-slate-800/80 text-sky-400 border border-slate-700/50 px-3 py-1 rounded-full text-xs md:text-sm font-medium tracking-wide">
                    #${tag}
                </span>
            `).join("")}
        </div>
    </div>

    
    <hr class="border-slate-800/80 my-6" />

    <!-- (Likes, Dislikes, Views) -->
    <div class="flex flex-wrap items-center justify-between gap-3 text-xs md:text-sm text-slate-400 font-medium">
        
        
        <div class="flex items-center gap-1.5 bg-slate-800/60 border border-slate-700/50 rounded-full px-3 py-1.5">
            
            <div class="flex items-center gap-1.5 text-green-500">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2" />
                </svg>
                <span class="text-slate-200">${post.reactions.likes}</span>
            </div>

            <div class="w-px h-3.5 bg-slate-700/80 mx-1"></div>

            
            <div class="flex items-center gap-1.5 text-red-500">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018c.163 0 .326.02.485.06L17 4m-7 10v5a2 2 0 002 2h.095c.5 0 .905-.405.905-.905 0-.714-.211-1.412.608-2.006L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2" />
                </svg>
                <span class="text-slate-200">${post.reactions.dislikes}</span>
            </div>
        </div>

        
        <div class="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800/60 border border-slate-700/50 rounded-full text-slate-400">
            <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <span class="text-slate-200">${post.views || 0}</span>
            <span class="text-slate-400">views</span>
        </div>

    </div>
</div>`;

        postsContainer.innerHTML += postCard;
    }
}

loadPosts();