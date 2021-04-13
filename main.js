/********
 * APIS *
 ********/
const hackerNewsNewStoriesAPI =
	"https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty";

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
functionBreak();
// hitAPI();
getStories();
function getStories() {
	fetch(hackerNewsNewStoriesAPI)
		.then((res) => res.json())
		.then((data) => {
			let storyID = data[0];
			console.log(storyID);
			let storyAPI = `https://hacker-news.firebaseio.com/v0/item/${storyID}.json?print=pretty`;
			console.log(storyAPI);
			hitAPI2(storyAPI);
		});
}
functionBreak();
/********************
 * HELPER FUNCTIONS *
 ********************/
function functionBreak() {
	console.log("******* Break *******");
}
function hitAPI() {
	fetch(hackerNewsNewStoriesAPI)
		.then((res) => res.json())
		.then((data) => {
			console.log("success!");
			console.log(data[0]);
			parent.innerText = `Attempting to place id:${data[0]} into an Element`;
			return data[0];
		});
}

function hitAPI2(API) {
	fetch(API)
		.then((res) => res.json())
		.then((data) => {
            const storyTitle = data.title
            const storyURL = data.url
            const storyScore = data.score
            const storyAuthor = data.by
            const storyComments = data.descendants

            const displayTitle = `${storyTitle}`
            const displayInfo = `Story by: ${storyAuthor}  |  Score: ${storyScore}  |  Comments: ${storyComments}`

            parent.innerHTML = ``
		});
}
