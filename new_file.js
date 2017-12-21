JS闭包()  重要，笔试经常会用到
变量作用域  是程序中定义这个变量的区域
	全局变量拥有全局作用域
	局部变量(函数内的变量)，其作用域是局部性的
函数作用域
	变量在声明他的函数体以及这个函数体内嵌套的任何函数体内都是有定义的
	任何一段JavaScript代码都对应一个作用域链
		作用域链中科院存放一系列对象，代码中声明的变量将作为对象的属性存放
	当需要使用一个变量时，将从作用域链中逐个查找对象的属性
		比如要使用变量a，将先查找作用域中的第一个对象是否有属性a，如果有就使用，
		如果没有就查找作用域链中下一个对象的属性，以此类推
	作为JavaScript的顶层代码，其作用域链中只有一个对象即全局对象
	作用域链都是从下面网上面找
	对应浏览器客户端而言就是windows
作用域后续
	每当一个函数被调用时，会创建一个上下文对象(环境)，在该函数中声明局部变量将作为该上下文对象的属性存放
	对应于函数中的代码段，其作用域链中将存放两个对象
		第一个是调用该函数时创建的上下文对象
		第二个是全局对象
	在函数段代码中使用变量时将首先在该上下文对象的属性中查找，如果找不到则在全局对象windows中查找
	当函数调用完成后，如果没有其他引用指向为此调用所创建的上下文对象，该对象将被回收
调用方法创建3个对象
方法的运行环境对象，不保存任何东西
方法的活动对象，保存所有的局部变量
方法的作用域链对象，保存所有可用变量所在对象的地址
示例如下
	var n=0;
	function  getUnique(){
		return n++;
	}
	console.log(getUnique());
	console.log(getUnique());
	console.log(getUnique());
	console.log(getUnique());
输出:0 1 2 3
	如果编写时又写了一下n=0；效果如下
	n=0;
	console.log(getUnique());
	console.log(getUnique());
	console.log(getUnique());
继续输出0 1 2 3 0 1 2 3 他还从头开始
闭包 	该函数能使用函数外定义的变量
函数外使用了不属于自己的局部变量
闭包一
	var n;
	function fn(){
		var b="b";
		n=function(){
			return b;
		}
	}
闭包示例二
	function counter(){
		var n=0;
		function getUnique(){
			return n++;
		}
		return getUnique;
	}
	var c=counter();
	c=null;//释放闭包占用的资源	
	c不是赋值，而是方法，()是调用方法的案例
	console.log(c());
	console.log(c());
	n=0;//设置n=0也是无效的
	console.log(c());
	console.log(c());
	c=null;
释放闭包占用的资源
	输出0 1 2 3
什么情况下使用:保护局部变量
闭包应用的特征
	1.局部变量
		在函数中定义有共享意义如:缓存，计时器等，的局部变量，
		注意:定义成全局变量会对外造成污染
	2.内嵌函数
		在函数f中声明有内嵌函数，内嵌函数g对函数f中的局部变量进行访问
	3.外部使用
		函数f在向外返回此内嵌函数g，外部可以通过此内嵌函数持有并访问声明函数f中的局部变量
		而此变量在外部四通过其他途径无法访问的
闭包自己写
	function one(){
		var n=0;
		function two(){
			return n++;
		}return two;
	}
	var c=one();
	console.log(c());
	console.log(c());
	console.log(c());
	console.log(c());