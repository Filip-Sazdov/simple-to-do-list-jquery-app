//create html structure
let container = $(".container");
let inputSection = $('<div id ="input-section"></div>');
let input = $(
	'<input type="text" id = "input" placeholder="Please Type in Task"></input>'
);
let inputButton = $('<button id = "button">Click to Enter Task</button>');
let para = $("<p></p>");
let list = $("<ol></ol>");

para.append(list);
inputSection.append(input);
inputSection.append(inputButton);

container.append(inputSection);
container.append(para);

//add list item and give it functionality
function addListItemToList() {
	let inputValue = $("#input").val();
	if (inputValue === "" || undefined) {
		alert("You have not entered a task");
	} else {
		let li = $('<li class="list-item" ></li>')
			.text(inputValue)
			.on("dblclick", function () {
				$(this).toggleClass("strike");
			});
		let span = $("<span>X<span>").on("click", function () {
			li.fadeOut();
			// .addClass("delete");
		});
		li.append(span);
		list.append(li);
	}
	//after inputting data, clear input box and give it back focus so user can continue typing
	$("#input").val("").focus();
}

inputButton.click(addListItemToList);
//Use Enter key to input data
$("#input").on("keyup", function (e) {
	//13  means enter button
	if (e.keyCode == 13) {
		addListItemToList();
	}
});

list.sortable();
