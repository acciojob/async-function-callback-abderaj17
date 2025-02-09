const url = "https://jsonplaceholder.typicode.com/posts/1";
const btn = document.querySelector("#btn");
const outputF = document.querySelector("#output");

const asyncFun = async ()=>{
	const responce = await fetch(url);
	const data = await responce.json();
	
}

//your JS code here. If required.
