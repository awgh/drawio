(function()
{
	Sidebar.prototype.addIBM2MondrianPalette = function()
	{
		var w = 240;
		var h = 48;
		var gn = 'mxgraph.ibm2mondrian';
		var dt = 'ibm ';
		this.setCurrentSearchEntryLibrary('ibm2mondrian', 'ibm2Mondrian');
		
		this.addPaletteFunctions('ibm2mondrian', 'IBM 2.0 Mondrian', false,
		[
			this.addEntry(dt + 'tn', function()
		   	{
				var default_icon = 'data:image/svg+xml,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJpY29uIiB2aWV3Qm94PSIwIDAgMzIgMzIiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDpub25lO308L3N0eWxlPjwvZGVmcz48dGl0bGU+c3RvcDwvdGl0bGU+PHBhdGggZD0iTTI0LDhWMjRIOFY4SDI0bTAtMkg4QTIsMiwwLDAsMCw2LDhWMjRhMiwyLDAsMCwwLDIsMkgyNGEyLDIsMCwwLDAsMi0yVjhhMiwyLDAsMCwwLTItMloiLz48cmVjdCBpZD0iX1RyYW5zcGFyZW50X1JlY3RhbmdsZV8iIGRhdGEtbmFtZT0iJmx0O1RyYW5zcGFyZW50IFJlY3RhbmdsZSZndDsiIGNsYXNzPSJjbHMtMSIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIi8+PC9zdmc+;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJpY29uIiB2aWV3Qm94PSIwIDAgMzIgMzIiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDpub25lO308L3N0eWxlPjwvZGVmcz48dGl0bGU+c3RvcDwvdGl0bGU+PHBhdGggZD0iTTI0LDhWMjRIOFY4SDI0bTAtMkg4QTIsMiwwLDAsMCw2LDhWMjRhMiwyLDAsMCwwLDIsMkgyNGEyLDIsMCwwLDAsMi0yVjhhMiwyLDAsMCwwLTItMloiLz48cmVjdCBpZD0iX1RyYW5zcGFyZW50X1JlY3RhbmdsZV8iIGRhdGEtbmFtZT0iJmx0O1RyYW5zcGFyZW50IFJlY3RhbmdsZSZndDsiIGNsYXNzPSJjbHMtMSIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIi8+PC9zdmc';
				var other_label = 'metaEdit=0;strokeWidth=1';
				var style_text = 'html=1;whiteSpace=wrap;fontFamily=IBM Plex Sans;fontColor=#000000;fontSize=14;verticalAlign=middle;align=left;spacing=12;spacingLeft=0;spacingRight=2;spacingTop=0;spacingBottom=0'
			    var bg = new mxCell('', 
			    		new mxGeometry(0, 0, w, h), "shape=" + gn + ".base" + ";" + style_text + ";" + other_label + ";" + "image=" + default_icon);
		    	bg.vertex = true;
		    	bg.setValue(mxUtils.createXmlDocument().createElement('object'));
				bg.setAttribute('placeholders', '1');
				bg.setAttribute('label', '<B>%Element-Name%</B><BR><font style=\'font-size: 12px\'>%Element-ID%</font>');
                bg.setAttribute('Element-ID', 'Element-ID');
                bg.setAttribute('Element-Name', 'Element-Name');
			    
			   	return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, 'BASE');
			})				
		]);
		
		this.setCurrentSearchEntryLibrary();
	};
})();
