sap.ui.define(
		['jquery.sap.global', 'sap/ui/core/FragmentControl'],
		function (jQuery, FragmentControl) {
	"use strict";
	
	var oSearchField = FragmentControl.extend("control.SearchField", {
		metadata: {
			properties: {
				placeholder: { type: "string", defaultValue: "Enter Search Term..." },
				buttonText: { type: "string", defaultValue: "Search" }
			},
			events: {
				search: {
					parameters: {
						value: {type: "string"}
					}
				}
			}
		},
		
		handleSearch: function() { // button was pressed, retrieve Input value + fire event
			var sSearchString = this.byId("innerInput").getValue();
			this.fireEvent("search", {value: sSearchString});
		}
	});
	return oSearchField;
}, /* bExport= */ true);