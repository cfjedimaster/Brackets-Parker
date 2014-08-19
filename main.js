/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define, brackets, $, window, Mustache */

define(function (require, exports, module) {
	'use strict';

	//var
	//	panelHtml     = require("text!templates/panel.html");

	var Commands                = brackets.getModule("command/Commands"),
		CommandManager          = brackets.getModule("command/CommandManager"),
		EditorManager           = brackets.getModule("editor/EditorManager"),
		DocumentManager         = brackets.getModule("document/DocumentManager"),
		ExtensionUtils          = brackets.getModule("utils/ExtensionUtils"),
		Menus                   = brackets.getModule("command/Menus"),
		PanelManager            = brackets.getModule("view/PanelManager"),
		NativeApp               = brackets.getModule("utils/NativeApp"),
		AppInit                 = brackets.getModule("utils/AppInit");

	//commands
	var VIEW_HIDE_PARKER = "parker.run";

	//require('htmlescaper');
	/*
	var _ = require('./underscore-min');
console.dir(_);
*/

/*
	require('underscore');
	var Parker = require('parker/lib/Parker');
*/
	require(['underscore'], function(_) {
		console.dir(_);
		var Parker = require('parker/lib/Parker');
		console.dir(Parker);
	});

	var $parker;

	function handleEscape() {
		var text;

		var editor = EditorManager.getFocusedEditor();
		if(!editor) return;

		text = editor.document.getText();

		$htmlescaper.show();
		CommandManager.get(VIEW_HIDE_PARKER).setChecked(true);

		//var escapeText = HTMLEscaper.escape(text);
		//$textareaOutput.val(escapeText);
	}

	function _handleShowPanel() {
		
		if ($parker.css("display") === "none") {

			handleEscape();
            $(DocumentManager).on("currentDocumentChange documentSaved", handleEscape);


		} else {
			$parker.hide();
			CommandManager.get(VIEW_HIDE_PARKER).setChecked(false);
			EditorManager.focusEditor();
            $(DocumentManager).off("currentDocumentChange documentSaved", handleEscape);
		}

		EditorManager.resizeEditor();
	}
	
	CommandManager.register("Run Parker", VIEW_HIDE_PARKER, _handleShowPanel);

	AppInit.appReady(function () {
		
		//ExtensionUtils.loadStyleSheet(module, "htmlescaper-brackets.css");

		//add the HTML UI
		/*
		var $panel = $(Mustache.render(panelHtml));

		var menu = Menus.getMenu(Menus.AppMenuBar.VIEW_MENU);
		menu.addMenuItem(VIEW_HIDE_PARKER, "", Menus.AFTER);

		$('.close', $panel).click(function () {
			//CommandManager.execute(VIEW_HIDE_HTMLESCAPER);
		});


		// AppInit.htmlReady() has already executed before extensions are loaded
		// so, for now, we need to call this ourself
		PanelManager.createBottomPanel('camden.parker.panel', $panel, 200);

		//$textareaOutput = $("#htmlescaper_output", $panel);
		$parker = $("#parker");
		*/

	});
	
	
});