hexo.extend.injector.register('head_begin', `<link rel="icon" href="https://www.brilliantw.net/img/輝煌icon.png">`, 'default');
hexo.extend.injector.register('head_end', `<meta property="og:image" content="https://www.brilliantw.net/img/輝煌icon.png">
<meta property="og:image:type" content="image/png">
<meta property="og:image:width" content="256">
<meta property="og:image:height" content="256">`, 'default')

window.addEventListener("mousemove", function (e) {
	var to_append = document.getElementsByClassName('loader-container')[0];
	var all = document.getElementsByClassName('loader-container');

	var parent_div = document.createElement('div');
	parent_div.className = "loader-container";
	var inner_div = document.createElement('div');
	inner_div.className = "loader";
	parent_div.appendChild(inner_div)
	var d = document.body.appendChild(parent_div);

	parent_div.style.left = (e.clientX - 50)+'px';
	parent_div.style.top = (e.clientY - 50)+'px';

	if(document.getElementsByClassName('loader-container').length > 50) {
		document.body.removeChild(to_append)
	}
});
