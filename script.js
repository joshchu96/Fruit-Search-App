const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul'); 

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {//run alg to find words similar based on total char i input. will be called in searchhandler()
	let results = []; //based on str from seachHandler() add char to array. 
//NOTICE! : prov brief description of method i want to use to gen results. 
	// TODO: add algo to find words similar to input based on the total char. 
	for (const fruitName of fruit) {
		if(fruitName.toLowerCase().includes(str.toLowerCase())) {
			results.push(fruitName); //if the fruit list has the input, then add it to the results array.
		}
	}
	return results;
}

function searchHandler(e) {//triggered by 'keyup event' funct: will call search() on (ln6) ti geerate result based on inputs.  
	// TODO
	const userInput = e.target.value; //takes the value that was placed in target:input
	const searchResults = search(userInput); //callback to search funct
	showSuggestions(searchResults, userInput); //parameters(searching function, user Input)
}

function showSuggestions(results, inputVal) {//takes two parameters:what i look for and list of suggestions.
//NOTICE: explain what it will do and how it will update the list. 
	// TODO: update suggestions list based on search results and current input value. 

	suggestions.innerHTML= ''; //clears the ul

	if(results.length === 0) {
		const noResultsMessage = document.createElement('li');
		noResultsMessage.textContent = `Sorry, No results found for "${inputVal}"`
		suggestions.appendChild(noResultsMessage);

		suggestions.classList.add('has-suggestions');
	} 
	else {
		results.forEach(result => {//if fruit found display it.
			const suggestionFruit = document.createElement('li'); //create list space for item 
			suggestionFruit.textContent = result; //add text of item 
			suggestions.appendChild(suggestionFruit); //add the fruit to the list.
			});

		suggestions.classList.add('has-suggestions');	
	}
}

function useSuggestion(e) { //event will handle the user selection from the sugg list and autofill the input with selected sugg. 
	// TODO
	 
		input.value = e.target.textContent; //autofill the search input with content from clicked li.
		input.focus();	
		suggestions.innerHTML= "";
		suggestions.classList.remove('has-suggestions');	
}

input.addEventListener('keyup', searchHandler);
//input:html element that will listen to 'keyup' when key is released it will run function 'searchhandler' (ln14)
suggestions.addEventListener('click', useSuggestion);
//input:suggestions will listen to a click and run f: useSuggestions (ln18)