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
hitAPI();
parent.innerText = hitAPI();

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
