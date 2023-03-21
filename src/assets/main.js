const criterio = "miviejita+ellobo"; //En esta parte se ingresa el criterio de busqueda

const API = `https://youtube-v31.p.rapidapi.com/search?q=${criterio}&part=snippet%2Cid&regionCode=US&maxResults=25&order=date`;

// const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '05cc56a688msh4c8712876313a0ep1005f2jsn768fef59a04c',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	},
};

async function fetchData(urlApi){
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async()=>{
    try{
        const videos = await fetchData(API);
        console.log(videos.items.map((item)=>item.id.videoId));
    }catch(err){
        return new Error(err);;
    }
})();


async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
  }
  
//   (async () => {
//     try {
//       const videos = await fetchData(API);
//       let view = `
//       ${videos.items.map(video => `
//         <div class="group relative">
//           <div
//             class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
//             <img src="${video.snippet.thumbnail.high.url}" alt="${video.snippet.description}" class="w-full">
//           </div>
//           <div class="mt-4 flex justify-between">
//             <h3 class="text-sm text-gray-700">
//               <span aria-hidden="true" class="absolute inset-0"></span>
//               ${video.snippet.title}
//             </h3>
//           </div>
//         </div>
//       `).slice(0,4).join('')}
  
//       `;
//     } catch {
  
//     }
//   })();