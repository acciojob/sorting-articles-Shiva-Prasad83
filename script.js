//your JS code here. If required.
let parent=document.getElementById("bands");
const tempDom=document.createDocumentFragment();
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
const articles=["A","An","The"]
const sortedBands=bands.sort((a,b)=>{

	function checkFirstWord(sentence){
	 let firstWord=sentence.split(" ")[0];
	 if(articles.includes(firstWord)){
		 return sentence.slice(firstWord.length).trim();
	 }
		return sentence;
	}
	let firstWord=checkFirstWord(a);
	let secondWord=checkFirstWord(b);
	return firstWord.localeCompare(secondWord);
	
});
sortedBands.forEach((element)=>{
	let li=document.createElement("li");
	li.className="li-items";
	li.innerText=element;
	tempDom.appendChild(li);
})
parent.appendChild(tempDom);
