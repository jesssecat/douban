$(document).ready(function(){
	$(".zhankai").bind("click",function(){
		$(".zhankai").css("backgroundPosition","0px -40px");
		$(".pingpu").css("backgroundPosition","-40px 0px")
		$(".apple").children().remove("zhankai-1").addClass("zhankai-2");
	})
	$(".pingpu").bind("click",function(){
		$(".zhankai").css("backgroundPosition","0px 0px");
		$(".pingpu").css("backgroundPosition","-40px -40px")
		$(".apple").children().removeClass("zhankai-2").addClass("zhankai-1");
	})
});

//ready(function(){准备好function函数,将id为展开的绑定（bind)到click点击事件中,一旦及就会触发,css的更换

//$(".apple").children().remove("zhankai-1").addClass("zhankai-2");
//children可以查找id为apple元素下面的函数,
//removeClass("zhanshi-1") 删除这个样式
//addClass("zhanshi-2")的元素
function cook(){
	console.log("打印文字lemtree");
	console.log("打印文字lemtree");
	console.log("打印文字lemtree");
}
