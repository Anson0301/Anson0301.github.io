function checkAnswer(questionId) {
	var answer = document.querySelector('input[name="'+questionId+'"]:checked').value;
	if (answer === "A") {
		window.location.href="A.html"
	 // alert("说明你喜欢喝汽水、碳酸饮料");
	} else if(answer==="B"){
		window.location.href="B.html"
 } else if(answer==="C"){
		window.location.href="C.html"
 } else if(answer==="D"){
		window.location.href="D.html"
	}
}
