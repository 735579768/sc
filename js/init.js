$(function() {
	window.sc = {
		initPage: function() {
			var leftobj = $('#left-nav');
			var pblock = $('.param-block');
			var addData = function(paramblock) {
				var dtitle = paramblock.find('h2 a');
				var str = '<dl>';
				str += '<dt onclick="sc.showMenu(this);"><i class="fa fa-envira"></i><a href="#' + dtitle.prop('name') + '">' + dtitle.text() + '</a></dt>';
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
			$('#left-nav dt').not(':first').click();
		},
		//显示页面
		showMenu: function(obj) {
			$(obj).parent().find('dd').toggle();
		},
		initEditor: function(id) {
			var editor = ace.edit(id);
			editor.setTheme("ace/theme/monokai");
			editor.setOptions({
				enableBasicAutocompletion: true,
				enableSnippets: true,
				PrintMargin: false,
				enableLiveAutocompletion: true
			});
			//document.getElementById('editor').style.fontSize='14px';
			editor.session.setMode("ace/mode/html");
			editor.setShowPrintMargin(false);
			//editor.setValue("<?php\n\n ?>");
			editor.setReadOnly(true);
		}
	};
	sc.initPage();

});