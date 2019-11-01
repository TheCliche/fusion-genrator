var firstImage=document.getElementById("firstImg");
var button1 = document.getElementById("button");
var firstName=document.getElementById("firstName");
var j=0;
var secondImage=document.getElementById("secondImg");
var button2 = document.getElementById("button2");
var secondName=document.getElementById("secondName");
var fuseImage=document.getElementById("fusedImg");
var fuseName=document.getElementById("fusedName");
var fuse=document.getElementById("fuse");
var characters1=[
	 	{
		nam: "GOHAN",
		imgs: 'https://techanimate.com/wp-content/uploads/2017/11/Why-does-Gohan-Have-so-much-Hidden-Power-1024x576.jpg'
		},

		{
		nam:"TRUNKS",
		imgs:'https://bandai.com.mx/wordpress/wp-content/uploads/2019/02/trunks-1.jpg'
		},

		{
			nam:"GOKU ss4",
			imgs: 'https://cdn.wccftech.com/wp-content/uploads/2019/04/Dragon-Ball-FighterZ-GT-Goku-SSJ4-2060x1159.jpg'
		}

];

var characters2=[
	 	{
		nam: "GOHAN",
		imgs: 'https://techanimate.com/wp-content/uploads/2017/11/Why-does-Gohan-Have-so-much-Hidden-Power-1024x576.jpg'
		},

		{
		nam:"TRUNKS",
		imgs:'https://bandai.com.mx/wordpress/wp-content/uploads/2019/02/trunks-1.jpg'
		},

		{
			nam:"GOKU ss4",
			imgs: 'https://cdn.wccftech.com/wp-content/uploads/2019/04/Dragon-Ball-FighterZ-GT-Goku-SSJ4-2060x1159.jpg'
		}

];



button.addEventListener("click",function(){
	i=randomNumber();
	j=randomNumber();
	if(i!=j)
	{
		firstImage.setAttribute("src",characters1[i].imgs);
		firstName.textContent=characters1[i].nam;
	} 
});


button2.addEventListener("click",function(){
	var k=randomNumber();
	var l=randomNumber();
	if(k!=l)
	{
		secondImage.setAttribute("src",characters2[k].imgs);
		secondName.textContent=characters2[k].nam;
	} 
});


fuse.addEventListener("click",function(){
	if(firstName.textContent === "GOHAN" && secondName.textContent === "TRUNKS")
	{
		fuseImage.setAttribute("src",'https://img.depor.com/files/article_content_ec_fotos/uploads/2018/08/02/5b638d3f08b5a.jpeg');
		fuseName.textContent="Gohunks"
	}
});


function randomNumber()
{
	var r=Math.floor(Math.random()*3);
	
	return r;
}
