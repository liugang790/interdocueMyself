import React from "react";
import ReactDOM from "react-dom";
import StyleEditor from "./StyleEditor.js";
import ResumeEditor from "./ResumeEditor.js";
import "./style/reset.css";
import Prism from "prismjs";
import co from "co";

class ReactClass extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			style: "",
		};
		this.interval = 40;
		this.resumeEditorContent = `
个人信息

姓    名：刘刚                 
年    龄：24岁               
邮.   箱：534189206@qq.com                      
电.   话：18382427771  
专  业：软件技术                
工作经验：2年-3年
应聘岗位：web前端 
动态简历： https://github.com/liugang790/interdocueMyself
平时喜欢浏览博客和框架的技术论坛，下载或者收藏好的文章以及demo来练练手， 精彩的我会记在印象笔记中，为以后开发做准备。。。

工作经历
成都智客科技有限公司（2016.1-.至今） 
产品：淘宝卖家服务市场—美单，聚流宝，微优享等
公司人数：20-50人
岗位：web前端
智客科技作为成都电商的佼佼者，主要是开发淘宝卖家工具为主，为淘宝商家复制商品和引入更多的流量提供更加方便的软件，同时开发一款具有市场潜力很大的APP软件—微优享

淘宝SDK模版
进入智客科技后，最先接触的是淘宝SDK模版开发（之前从未接触淘宝模版）
根据UI设计师的界面，开发不同的初级模版，高级模版，js模版等，高级模版需要用到PHP语言和较复杂的逻辑。
运用的api和方法是淘宝内部开放的，需要在这些有限的接口和方法，去设计无限精彩的模版，其实所用到的php语言就和js的方法类似。
开发初级和高级模版共开发了30套左右。


淘宝卖家工具开发
根据公司目标调整任务 后面基本上开发淘宝卖家工具，结合已有上线的很多软件的功能，融合至一个工具中-美单。
美单—该项目主要运用angularjs框架开发。（虽然用的是angularjs1，感觉运用的是angularjs2的思想）。把里面所用到的所有列表全部封装至一个函数里面，用模版组件化的思想和封装指令的方法，使每个模版独立分开。
代码管理git
主要配合淘宝内部的样式框架千牛
遇到的最大困惑就是跨域后生成的fromdata数据格式不正确，通过多方查阅以前其他人遇到的坑，封装的一个方法解决。
其他卖家工具—聚网批，流量无忧等。
主要运用了gulp、grunt、less等工具和语言（现在这几个工具都很少用了），用gulp打包和压缩修改后的代码，同时实时监听修改的代码和错误。

微优享app
该项目是一款集成在线课堂，大字生成器，趣图生成器等功能的app，负责其中h5页面嵌套以及交互，iOS和安卓 用到reactjs框架的h5页面。
在h5页面中请求ios和安卓内部返回的数据来交互。
react框架用到了 web-pack 和yarn（刚学习yarn，没有用到npm）

水果忍者（公司外包）
	—我能说回到我上个公司的老本行了么  （：
不过这个和其他不同的是这个是用的react框架，这个框架不同的是react+redux+es6+babel+less
该项目主要是介绍买家可以在线选择所需要的水果，卖家根据就近商店配送。
react框架主要特点：
	数据流清楚，便于交互和查看数据
	代码便于管理，结构清晰明了
	组件之间没有很强的依赖性
这个项目也是我第一次接触完整的redux ，也是半吊子上任=。=
 该项目对我后面学习更加深层次reactjs+native有了更好的基础。
该项目难解决的地方就是商家定位和用户定位。


其他前端相关工作：
	偶尔自己设计简单的UI界面，自己切图、设计等等。
	移动端的相关的网站、卖家工具的移动端 ，比如淘宝魔盒、移动端的视频播放等。
	根据公司的业务，有时需要做其他PC端的项目，比如格格屋等项目。


最近刚接触到的一个运用最新技术的react框架—米花支付（react+redux+es6+babel+yarn+typescript+sass）
目前正在完成简单的功能，结合蚂蚁金服开源的一套antd组件
最近和几个小伙伴一起探讨和学习开发共同在玩一个react项目：https://github.com/vicodedotwin/antdweb

在智客学到了很多东西，不管是工作知识还是在与他人沟通中。公司成立子公司后，抽调了更多的人去做其他去了。

成都钛氪火星科技有限公司（2015.3-2016.1）
公司人数：10人（完整团队—专注微信公众号30年  :) ）
岗位：web前端

体简—微信公众号
体简是一个主要和医院合作，当用户体检结果后通过关注公众号形式，可以查看自己的检查结果。
该项目运用angularjs框架，grunt.less/sass等语言和工具（现在很少人用了）
同时运用到了mock.js ，使用模拟json数据的形式，当后台api没有提供的时候，自己模拟数据，到时候只需要换接口就行了。
主要有以下功能：
	在线查看查看自己检查结果
	有异常的结果会特别标注出来
	可以通过社区查看有益身心健康的文章
	可以查询有关疾病的介绍
	线上和医生咨询（后期公司在执行上流产了）

 率修邦—公众号（外包）
让维修师傅真正获得蓝领应有的尊重。只需您一键下单，专业师傅即刻上门为您排忧解难！—用户只需在线下单，维修师傅上门服务
网站：http://www.shuaixiubang.com/index.php?s=/Home/Index/pc.html
框架：angularjs
该项目主要包含以下情况：
	通过在线预约下单，上传维修相关的图片，选择维修师傅上门服务
	通过百度定位，定位你家地址
	在线咨询和查询相关费用
	在线支付相关费用

通过绑定自己的微信账户，查看自己所有的订单效果。这个需要和师傅端的app接入。

未见—微信公众号
原型图：https://pro.modao.cc/app/6OJzo9E1yMA3TR8uZd9t?%23screen=s67F88AD3C66E#screen=s67F88AD3C66E

未见是通过和旅行社合作，在线下单选择自己旅游目的地。
选择不同的地点，不同的时间，有不一样的优惠价格。
该项目是在第一个版本的基础上升级，第一版没有用任何框架，升级过后用的angularjs框架，
不管是在性能和页面上面都有了很大的提升。
运用gulp工具压缩代码，运用图片预加载或者懒加载的方式提升页面流畅速度。
通过该项目是第一次接触到angularjs框架（虽然现在已经到angular 2了，感觉和angular 1是两个完全不同的概念，和react框架的思想差不多一样=。=）


皇上友赏
该项目也属于微信公众号，由于沟通和后期的执行问题，该项目做出来就死在了前进的道路上，不过该项目就个人觉得而言，还是觉得很有意思的，要是能推广好的话，可能会有点粉丝的哟！  )：

其他相关工作：公司的pc和移动端的官网，空闲时间自己写移动端相关页面玩。
这个公司从老板到员工都是一群程序猿+90后的骚年 （:   

成都恒游科技创意有限公司（2014.5-2015.2）
公司人数：199以上
网站：http://www.ihengyou.com/(离职的时候做的最后一个该公司网站)
职位：web前端

毕竟是还没有毕业在实习期，公司在慢慢转型，技术人员相继离职。想想还是有点怀念呢  在短短的几个月里面，都是接触到的前端的pc端的项目。
这是为自己进入前端坑奠定了基础（=。=）
负责项目：工长汇、云舜、铭炜、鲜果蜗牛、官网等。
所用到框架：bootstrap，jquery等。
工长汇这个项目本身不是很复杂，比较时pc端的，主要是处理各种兼容性的问题，有的样式属性在低版本的浏览器不兼容，需要用到兼容的属性或者js去兼容
当初只是用到div+css+js+jquery+bootstrap的pc端的网站，最后处理一下兼容问题。
其他项目用到了css3的动画效果

毕竟是带我踏进进入这个行业的公司，从此进入了前端坑。。。
通过接触到不同公司的不同项目，不管是pc还是移动端，不管是reactjs、angularjs等各种前端框架，一路踩过来的坑也不少，在兼容和性能等方面，正如刚刚接触到es6（熟悉），es7（学习中），还是最近刚接触到的typescript等，技术在不断更新，坑也在不断的踩。。。


熟悉技能
计算机语言：html/html5、css/css3、JS、Jquery、Ajax、less/sass、mysql等
框架：angularjs、reactjs、jquery、bootstrap等（如果有更多的框架能够学习，我也愿意 (: ）
后台语言：php,
熟悉工具：PhotoShop、grunt.、gulp、webpack、git等。

致谢 
感谢您花时间阅读我的简历，期待有机会与您共事 ：）`
		this.styleEditorContent = [`/*
* Inspired by http://strml.net/
* 
* Hello, 我是刘刚
*
* 最近看到了别人用 Vue 做了一个动态的简历，感觉很有意思，所以我也用 React 做了一份简易的动态简历
* 希望大家能够喜欢 :)
*/

/* 所以我们就开始吧！首先给所有元素加上过渡效果 */
* {
  -webkit-transition: all .3s;
  transition: all .3s;
}
/* 白色背景太单调了，我们来点背景 */
html {
  color: rgb(222,222,222); background: #425261; 
}
/* 文字直接显示在页面上，没有任何装饰，真的人反人类呢！所以我们来给文字加点装饰吧~~ */
.styleEditor {
  background-color: #303030;
  padding: .5em;
  border: 1px solid;
  margin: .5em;
  overflow: auto;
  width: 45vw; height: 90vh;
}
/* 作为一个程序员，我们不可以太沉闷哦~~，给自己的代码加一点色彩吧 */
.token.comment{ color: #857F6B; font-style: italic; }
.token.selector{ color: #E86E75; }
.token.property{ color: #F78C6C; }
.token.punctuation{ color: #88DCFE; }
.token.function{ color: #82AAFF; }

/* 加一点 3D 效果，更加地酷炫 */
html{
  -webkit-perspective: 1000px;
          perspective: 1000px;
}
.styleEditor {
  position: fixed; left: 0; top: 0; 
  -webkit-transition: none; 
  transition: none;
  -webkit-transform: rotateY(10deg) translateZ(-100px) ;
          transform: rotateY(10deg) translateZ(-100px) ;
}
/* 不知道以上对代码框的修改你是否喜欢呢？ */

/* 接下来我给自己准备一个编辑器，用来存放我的简历内容 */
.resumeEditor{
  position: fixed; right: 0; top: 0;
  padding: .5em;  margin: .5em;
  width: 48vw; height: 90vh; 
  border: 1px solid;
  background: white; color: #222;
  overflow: auto;
}

/* 好了，我开始写简历了 */
`,
`
/* 这个简历好像差点什么
 * 对了，这是 Markdown 格式的，我需要变成对 HR 更友好的格式
 * 简单，用开源工具翻译成 HTML 就行了
 *           3          
 *           2          
 *           1          
 *          啦啦！
 */
`,
`
/* 再对 HTML 加点样式 */
.resumeEditor{
  padding: 2em;
}
.resumeEditor h1{
  display: block;
  width: 80px;
  margin: 0 auto;
}
.resumeEditor h2{
  display: inline-block;
  border-bottom: 1px solid;
  margin: 1em 0 .5em;
}
.resumeEditor h3{
	display: inline-block;
	margin: 0.5em 0;
}
.resumeEditor a{
	color: #000;
}
.resumeEditor ul{
	list-style: none;
}
.resumeEditor ul>li::before {
	content: "•";
	margin-left: 1em;
	margin-right: 0.5em;
}
.resumeEditor blockquote {
  margin: 1em;
  padding: .5em;
  background: #ddd;
}
/*
* 前端真的很有意思！
* 做自己喜欢的事，人生能有多少机会这么不顾一切呢？
* I hope you enjoyed this.
*/
`];
	}

	addToStyle(char) {
		this.setState({
			style: this.state.style + char,
		});
	}

	replaceStyle(style) {
		this.setState({
			style: style,
		});
	}

	replaceStyleEditorContent() {
		
	}

	showStyleEditorContent(n) {
		let lastContentLength = 0;
		if (n !== 0) {lastContentLength = this.state.style.length;}
		let style = this.styleEditorContent[n];
		let len = style.length;
		return new Promise((resolve, reject) => {
			let showStyle = function () {
				let currentLen = this.state.style.length - lastContentLength;
				if (currentLen < len) {
					let char = style.substring(currentLen, currentLen+1);
					this.refs.StyleEditor.addToContent(char);
					this.addToStyle(char);
					setTimeout(showStyle, this.interval);
				} else {
					resolve();
				}
			}.bind(this);
			showStyle();
		});
	}

	showResumeContent() {
		let content = this.resumeEditorContent;
		let len = content.length;
		return new Promise((resolve, reject) => {
			let showContent = function() {
				let currentLen = this.refs.ResumeEditor.getCurrentContentLength();
				if (currentLen < len) {
					let char = content.substring(currentLen, currentLen+1);
					this.refs.ResumeEditor.addToContent(char);
					setTimeout(showContent, this.interval);
				} else {
					resolve();
				}
			}.bind(this);
			showContent();
		});
	}

	setResumeMarkdown() {
		return new Promise((resolve, reject) => {
			setTimeout(this.refs.ResumeEditor.setIsMarkdown(true), this.interval);
			resolve();
		}); 
	}

	async startShow() {
		await this.showStyleEditorContent(0).then(function() {console.log('done! show Content 0')});
		await this.showResumeContent();
		await this.showStyleEditorContent(1).then(function() {console.log('done! show Content 1')});
		await this.setResumeMarkdown();
		await this.showStyleEditorContent(2).then(function() {console.log('done! show Content 2')});
	}

	componentDidMount() {
		this.startShow();
		console.log(111);
		// this.refs.StyleEditor.replaceContent(this.content[0]);
		// this.replaceStyle(this.content[0]); 
		// this.refs.ResumeEditor.replaceContent("");
	}

	render() {
		return (
			<div>
				<StyleEditor ref="StyleEditor" />
				<ResumeEditor ref="ResumeEditor" />
				<style>{this.state.style}</style>
			</div>);
	}
}
ReactDOM.render(<ReactClass />, document.getElementById("content"));