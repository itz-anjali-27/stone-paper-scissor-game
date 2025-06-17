let boxes=document.querySelectorAll(".choice");
boxes.forEach((val)=>{
	val.addEventListener("click",()=>{
	let user_choice=val.getAttribute("id");
	console.log("userchoice = ",user_choice);
	playgame(user_choice);
});
});

let com_choice=()=>{
	const option=["stone","paper","scissor"];
	const idx=Math.floor(Math.random()*3);
	return option[idx];
}

let playgame=(user_choice)=>{
	let computer_choice=com_choice();
	console.log("computer choice",computer_choice);
	if(user_choice===computer_choice){
		console.log("tie ");
		let msg=document.querySelector("#msg");
		msg.innerText="Tie play again";
		msg.style.backgroundColor="black";
	}
		else{
			let userWin=true;
			if(user_choice==="stone")
			{
				userWin=computer_choice==="paper"?false:true;

			}
			else if(user_choice==="paper")
			{
				userWin=computer_choice==="scissor"?false:true;

			}
			else
			{
				userWin=computer_choice==="stone"?false:true;
			}		 
				 show(userWin,user_choice,computer_choice);
		
           
	}
};
let c=0;
let s=0;
let show=(userWin,user_choice,computer_choice)=>{
if(userWin){
	console.log("you win");
    let massage=document.querySelector("#msg");
	massage.innerText=`you Win ! ${user_choice} beats ${computer_choice}`;
	massage.style.backgroundColor="green";

    let userscore=document.querySelector("#user-score");
    c++;
    userscore.innerText=c;
}
else{
	console.log("you lose");

    let massage=document.querySelector("#msg");
	massage.innerText=`you loose ! ${computer_choice} beats ${user_choice}` ;
    massage.style.backgroundColor="red";

    let computerscore=document.querySelector("#computer-score");
    s++;
	computerscore.innerText=s;
 
}	
};	
	
	