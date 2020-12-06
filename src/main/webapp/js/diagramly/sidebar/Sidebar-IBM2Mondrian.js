(function()
{
	Sidebar.prototype.addIBM2MondrianPalette = function()
	{
		var w = 240;
		var h = 48;
		var gn = 'mxgraph.ibm2mondrian';
		var dt = 'ibm ';
		var pts = 'points=[[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]]';
		var style_shape = 'html=1;whiteSpace=wrap;metaEdit=1;metaData={"Type":{"editable":false}};strokeWidth=1'
		var style_text = 'fontFamily=IBM Plex Sans;fontColor=#000000;verticalAlign=middle;align=left;spacingLeft=60'
		this.setCurrentSearchEntryLibrary('ibm2mondrian', 'ibm2Mondrian');
		
		this.addPaletteFunctions('ibm2mondrian', 'IBM 2.0 Mondrian', false,
		[
			this.addEntry(dt + 'tn', function()
		   	{
				var default_icon = 'data:image/svg+xml,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJpY29uIiB2aWV3Qm94PSIwIDAgMzIgMzIiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDpub25lO308L3N0eWxlPjwvZGVmcz48dGl0bGU+c3RvcDwvdGl0bGU+PHBhdGggZD0iTTI0LDhWMjRIOFY4SDI0bTAtMkg4QTIsMiwwLDAsMCw2LDhWMjRhMiwyLDAsMCwwLDIsMkgyNGEyLDIsMCwwLDAsMi0yVjhhMiwyLDAsMCwwLTItMloiLz48cmVjdCBpZD0iX1RyYW5zcGFyZW50X1JlY3RhbmdsZV8iIGRhdGEtbmFtZT0iJmx0O1RyYW5zcGFyZW50IFJlY3RhbmdsZSZndDsiIGNsYXNzPSJjbHMtMSIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIi8+PC9zdmc+;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJpY29uIiB2aWV3Qm94PSIwIDAgMzIgMzIiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDpub25lO308L3N0eWxlPjwvZGVmcz48dGl0bGU+c3RvcDwvdGl0bGU+PHBhdGggZD0iTTI0LDhWMjRIOFY4SDI0bTAtMkg4QTIsMiwwLDAsMCw2LDhWMjRhMiwyLDAsMCwwLDIsMkgyNGEyLDIsMCwwLDAsMi0yVjhhMiwyLDAsMCwwLTItMloiLz48cmVjdCBpZD0iX1RyYW5zcGFyZW50X1JlY3RhbmdsZV8iIGRhdGEtbmFtZT0iJmx0O1RyYW5zcGFyZW50IFJlY3RhbmdsZSZndDsiIGNsYXNzPSJjbHMtMSIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIi8+PC9zdmc';
				var other_label = 'html=1;whiteSpace=wrap;metaEdit=1;noLabel=1;strokeWidth=1';
				var style_text = 'fontFamily=IBM Plex Sans;fontColor=#000000;verticalAlign=middle;align=left'
			    var bg = new mxCell('', 
			    		new mxGeometry(0, 0, w, h), "shape=" + gn + ".base" + ";" + style_text + ";" + "image=" + default_icon + ";" + other_label);
		    	bg.vertex = true;
		    	bg.setValue(mxUtils.createXmlDocument().createElement('object'));
		    	bg.setAttribute('placeholders', '1');
                bg.setAttribute('Element-ID', 'Element-ID');
                bg.setAttribute('Element-Name', 'Element-Name');
			    
			   	return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, 'BASE');
			})				
		]);
		
		this.setCurrentSearchEntryLibrary();
	};
})();
