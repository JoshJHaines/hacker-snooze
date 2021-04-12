/********
 * APIS *
 ********/
const hackerNewsAPI = "https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty";

/********************
 * SELECTOR QUERIES *
 ********************/
const body = document.querySelector("body");

const parent = document.createElement("div");
parent.className = "parent";

const child = document.createElement("div");
child.className = "child";

parent.appendChild(child);
body.appendChild(parent);

/******************
 * MAIN FUNCTIONS *
 ******************/
functionBreak()
hitAPI()


/********************
 * HELPER FUNCTIONS *
 ********************/
function functionBreak(){
    console.log ("******* Break *******")
}
function hitAPI(){
    fetch(hackerNewsAPI)
		.then((res) => res.json())
		.then((data) => {
			console.log("success!");
            console.log(data)
		});
}