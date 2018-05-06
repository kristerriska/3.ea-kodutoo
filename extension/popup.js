document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("reddit").addEventListener("click", reddit);
    document.getElementById("vikipeedia").addEventListener("click", vikipeedia);
});
function reddit(){
		var d = document.getElementById("navbar-query").value;
		var webpage = "https://www.reddit.com/search?q="+ d;
		window.open(webpage);
	}
	function vikipeedia(){
		var d = document.getElementById("navbar-query").value;
		var webpage = "https://et.wikipedia.org/w/index.php?search="+ d +"&title=Eri:Otsimine&go=Mine&searchToken=pfw3cl6c55bzlll5jq28b6ny";
		window.open(webpage);
	}