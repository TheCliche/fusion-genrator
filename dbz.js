var button = document.querySelector("button");
var par = document.querySelector("p");
var ing = document.querySelector("img");
//var ings = ing.getAttribute("src");
var img = [];

imgs =["http://www.pngmart.com/files/2/Goku-PNG-Transparent-Image.png","http://www.pngnames.com/files/3/Goku-PNG-Pics.png","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiUDXuaiHTPJzW5BWzmsCH-RMnOpHZkX1h9ZMZRpgk8RKyNkSJ"];

// Setup click listner
click_count=0;

button.addEventListener("click", function(){
	
	
		if(click_count==0)
		{

			ing.setAttribute("src",imgs[click_count]);
		}
		else if(click_count==1)
		{
			ing.setAttribute("src",imgs[1]);
			//click_count = 0;
		}
		else if(click_count==2)
		{
			ing.setAttribute("src",imgs[2]);
		}

	
});

button.addEventListener("click",function(){
	if(click_count	<= 1)
	{
		click_count+=1;
		console.log(click_count);
	}
	else 
	{ 
		click_count	=0;
	}

		});	
