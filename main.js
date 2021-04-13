/********
 * APIS *
 ********/
const topStoriesAPI =
	"https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty";

/********************
 * SELECTOR QUERIES *
 ********************/
const body = document.querySelector("#body");

const parent = document.createElement("div");
parent.className = "parent";

const child = document.createElement("div");
child.className = "child";

parent.appendChild(child);
body.appendChild(parent);

/******************
 * MAIN FUNCTIONS *
 ******************/
function getListStories() {
	fetch(topStoriesAPI)
		.then((res) => res.json())
		.then((data) => {
			let storyID = data[0];
			let singleStoryAPI = `https://hacker-news.firebaseio.com/v0/item/${storyID}.json?print=pretty`;
			hitAPI(singleStoryAPI);
		});
        //want to loop through the first 100 items in 'data' arr.
        //for each loop, I want to hit the single story API for that index
        //create an Element 
        //edit the Element with the items 
}

function hitAPI(API) {
	fetch(API)
		.then((res) => res.json())
		.then((data) => {
			const storyTitle = data.title;
			const storyURL = data.url;
			const storyScore = data.score;
			const storyAuthor = data.by;
			const storyComments = data.descendants;
			const displayInfo = `Story by: ${storyAuthor}  |  Score: ${storyScore}  |  Comments: ${storyComments}`;
			parent.innerHTML = `<a href=\"${storyURL}\" target=\"_blank\">${storyTitle}</a>`;
			parent.innerHTML += `<p> ${displayInfo} </p>`;
		});
}

/****************
 * ON PAGE LOAD *
 ****************/
getListStories();
