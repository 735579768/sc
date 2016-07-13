$(function() {
	window.sc = {
		initPage: function() {
			var leftobj = $('#left-nav');
			var pblock = $('.param-block');
			var addData = function(paramblock) {
				var str = '<dl>';
				str += '<dt onclick="sc.showMenu(this);"><i class="fa fa-envira"></i>' + paramblock.find('h2').text() + '</dt>';
				paramblock.find('.code-block .code-title a').each(function(index, el) {
					var nam = $(this).prop('name');
					var tex = $(this).text();
					str += '<dd><a href="#' + nam + '">' + tex + '</a></dd>';
				});
				str += '</dl>';
				leftobj.append(str);
			};
			pblock.each(function(index, el) {
				addData($(this));
			});
		},
		//显示页面
		showMenu: function(obj) {
			$(obj).parent().find('dd').toggle();
		}
	};
	sc.initPage();

});