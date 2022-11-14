// JavaScript Document



function setFooterYear() {
  let todayDate = new Date();
  let todayYear = todayDate.getFullYear();
  document.getElementById("setdate").innerHTML = todayYear;
};


var good_p1 = 0;
var good_p2 = 0;

function update_count_parent2(id,pts) {
	//thisCanChange.innerHTML = "okay";
	//document.getElementById("my words").innerHTML = "updated or changed!"; 
    // activated update results
	// update display
	if (document.getElementById(id).classList.contains("btn-success")){
        good_p2 = good_p2 - pts;
		document.getElementById(id).classList.remove("btn-success");
		document.getElementById(id).classList.add("btn-default");
		document.getElementById("parent_2").innerHTML = String("Parent 2 Score = " + good_p2);
	} else {
        good_p2 = good_p2 + pts;
		document.getElementById(id).classList.remove("btn-default");
		document.getElementById(id).classList.add("btn-success");
		document.getElementById("parent_2").innerHTML = String("Parent 2 Score = " + good_p2);
	}
	//alert("p1 is : " + good_p1 + "  p2 is : " + good_p2);
	} 

function update_count_parent1(id, pts) {
	//thisCanChange.innerHTML = "okay";
	//document.getElementById("my words").innerHTML = "updated or changed!"; 
    // activated update results
	// update display
	if (document.getElementById(id).classList.contains("btn-success")){
        good_p1 = good_p1 - pts;
		document.getElementById(id).classList.remove("btn-success");
		document.getElementById(id).classList.add("btn-default");
		document.getElementById("parent_1").innerHTML = String("Parent 1 Score = " + good_p1);
	} else {
        good_p1 = good_p1 + pts;
		document.getElementById(id).classList.add("btn-success");
		document.getElementById("parent_1").innerHTML = String("Parent 1 Score = " + good_p1);
	}
}