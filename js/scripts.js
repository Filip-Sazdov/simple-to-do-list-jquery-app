let container = $(".container");
let inputSection = $('<div id ="input-section"></div>');
let input = $('<input type="text" id = "input"></input>');
let inputButton = $('<input type="submit" id = "button"></input>');

let para = $("<p></p>");
let list = $("<ol></ol>");

para.append(list);
inputSection.append(input);
inputSection.append(inputButton);

container.append(inputSection);
container.append(para);

function addListItemToList() {
	let inputValue = $("#input").val();
	let li = $('<li class="list-item" ></li>');
	li.text(inputValue);
	list.append(li);
}
inputButton.on("click", addListItemToList);

let li = $(".list-item");
li.on("click", function () {
	li.addClass("strike");
});
