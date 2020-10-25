let container = $(".container");
let inputSection = $('<div id ="input-section"></div>');
let input = $(
	'<input type="text" id = "input" placeholder="Please Type in a Task"></input>'
);
let inputButton = $('<button id = "button">Click to Enter Task</button>');
let para = $("<p></p>");
let list = $("<ol></ol>");

para.append(list);
inputSection.append(input);
inputSection.append(inputButton);

container.append(inputSection);
container.append(para);

function addListItemToList() {
	let inputValue = $("#input").val();
	if (inputValue === "" || undefined) {
		alert("You have not entered a task");
	} else {
		let li = $('<li class="list-item" ></li>');
		li.text(inputValue);
		list.append(li);
	}
}

// inputButton.on("click", addListItemToList);
inputButton.click(addListItemToList);

// let li = $(".list-item");
// li.dblclick(function () {
// 	console.log("clicked");
// 	// li.addClass("strike");
// });
