(function()
{
	Sidebar.prototype.addMondrianPalette = function()
	{
		var w = 240;
		var h = 48;
		var gn = 'mxgraph.mondrian';
		var dt = 'mondrian ';
		var pts = 'points=[[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]]';
		var style_shape = 'html=1;whiteSpace=wrap;metaEdit=1;metaData={"Type":{"editable":false}};strokeWidth=1'
		var style_text = 'fontFamily=IBM Plex Sans;fontColor=#000000;verticalAlign=middle;align=left;spacingLeft=60'
		this.setCurrentSearchEntryLibrary('mondrian');
		
		this.addPaletteFunctions('mondrian', 'Mondrian', false,
		[
			/*
			this.addEntry(dt + 'sbb', function()
		   	{
			    var bg = new mxCell('', 
			    		new mxGeometry(0, 0, w, h), "shape=" + gn + ".sbb;dx=4" + ";" + style_shape + ";" + style_text + ";" + pts);
		    	bg.vertex = true;
		    	bg.setValue(mxUtils.createXmlDocument().createElement('object'));
		    	bg.setAttribute('placeholders', '1');
		        bg.setAttribute('Type', 'SBB');
                bg.setAttribute('Domain', 'Domain');
                bg.setAttribute('SBB-ID', 'SBB-ID');
                bg.setAttribute('SBB-Name', 'SBB-Name');
		    	bg.setAttribute('label', '<b style="font-size: 12px"><font style="font-size: 12px">%SBB-Name%</fon></b><br style="font-size: 12px"><font style="font-size: 10px">%SBB-ID%</font>');
			    
			   	return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, 'SBB');
			}),
			this.addEntry(dt + 'ln', function()
		   	{
			    var bg = new mxCell('', 
			    		new mxGeometry(0, 0, w, h), "shape=" + gn + ".ln;dx=4" + ";" + style_shape + ";" + style_text + ";" + pts);
		    	bg.vertex = true;
		    	bg.setValue(mxUtils.createXmlDocument().createElement('object'));
		    	bg.setAttribute('placeholders', '1');
		        bg.setAttribute('Type', 'LN');
                bg.setAttribute('Domain', 'Domain');
                bg.setAttribute('LN-ID', 'LN-ID');
                bg.setAttribute('LN-Name', 'LN-Name');
		    	bg.setAttribute('label', '<b style="font-size: 12px"><font style="font-size: 12px">%LN-Name%</fon></b><br style="font-size: 12px"><font style="font-size: 10px">%LN-ID%</font>');
			    
			   	return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, 'LN');
			}),		
			this.addEntry(dt + 'tn', function()
		   	{
			    var bg = new mxCell('', 
			    		new mxGeometry(0, 0, w, h), "shape=" + gn + ".tn" + ";" + style_shape + ";" + style_text + ";" + pts);
		    	bg.vertex = true;
		    	bg.setValue(mxUtils.createXmlDocument().createElement('object'));
		    	bg.setAttribute('placeholders', '1');
		        bg.setAttribute('Type', 'TN');
                bg.setAttribute('Domain', 'Domain');
                bg.setAttribute('TN-ID', 'TN-ID');
                bg.setAttribute('TN-Name', 'TN-Name');
				//bg.setAttribute('label', '<b><font style="font-size: 14px">%TN-Name%</font></b><br><font style="font-size: 10px">%TN-ID%</font>');
				bg.setAttribute('label', '<font style="font-size: 14px">%TN-Name%</font>');
			    
			   	return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, 'TN');
			}),*/
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
			/*this.addEntry(dt + 'container', function()
		   	{
			    var bg = new mxCell('', 
			    		new mxGeometry(0, 0, w * 1.6, h * 1.1), 'rounded=1;whiteSpace=wrap;html=1;labelBackgroundColor=none;fillColor=#85BBF0;fontColor=#ffffff;align=center;arcSize=10;strokeColor=#78A8D8;metaEdit=1;metaData={"mondrianType":{"editable":false}};' + pts);
		    	bg.vertex = true;
		    	bg.setValue(mxUtils.createXmlDocument().createElement('object'));
		    	bg.setAttribute('placeholders', '1');
		        bg.setAttribute('mondrianName', 'name');
		        bg.setAttribute('mondrianType', 'Container');
		        bg.setAttribute('mondrianTechnology', 'technology');
		        bg.setAttribute('mondrianDescription', 'Description');
		    	bg.setAttribute('label', '<b>%mondrianName%</b><div>[%mondrianType%: %mondrianTechnology%]</div><br><div>%mondrianDescription%</div>');
			    
			   	return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, 'Container');
			}),				
			this.addEntry(dt + 'execution environment', function()
		   	{
			    var bg = new mxCell('', 
			    		new mxGeometry(0, 0, w * 2, h * 1.7), 'rounded=1;whiteSpace=wrap;html=1;labelBackgroundColor=none;fillColor=#ffffff;fontColor=#000000;align=left;arcSize=5;strokeColor=#000000;verticalAlign=bottom;metaEdit=1;metaData={"mondrianType":{"editable":false}};' + pts);
		    	bg.vertex = true;
		    	bg.setValue(mxUtils.createXmlDocument().createElement('object'));
		    	bg.setAttribute('placeholders', '1');
		        bg.setAttribute('mondrianName', 'name');
		        bg.setAttribute('mondrianType', 'ExecutionEnvironment');
		        bg.setAttribute('mondrianApplication', 'applicationAndVersion');
		    	bg.setAttribute('label', '<div style="text-align: left">%mondrianName%</div><div style="text-align: left">[%mondrianApplication%]</div>');
			    
			   	return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, 'Execution Environment');
			}),				
			this.addEntry(dt + 'deployment node', function()
		   	{
			    var bg = new mxCell('', 
			    		new mxGeometry(0, 0,  w * 2.4, h * 2.3), 'rounded=1;whiteSpace=wrap;html=1;labelBackgroundColor=none;fillColor=#ffffff;fontColor=#000000;align=left;arcSize=5;strokeColor=#000000;verticalAlign=bottom;metaEdit=1;metaData={"mondrianType":{"editable":false}};' + pts);
		    	bg.vertex = true;
		    	bg.setValue(mxUtils.createXmlDocument().createElement('object'));
		    	bg.setAttribute('placeholders', '1');
		        bg.setAttribute('mondrianName', 'hostname');
		        bg.setAttribute('mondrianType', 'DeploymentNode');
		        bg.setAttribute('mondrianOperationSystem', 'operationSystem');
		        bg.setAttribute('mondrianScalingFactor', 'scalingFactor');
		    	bg.setAttribute('label', '<div style="text-align: left">%mondrianName%</div><div style="text-align: left">[%mondrianOperationSystem%]</div><div style="text-align: right">%mondrianScalingFactor%</div>');
			    
			   	return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, 'Deployment Node');
			}),				
			this.addEntry(dt + 'database', function()
		   	{
			    var bg = new mxCell('', 
			    		new mxGeometry(0, 0, w * 1.6, h * 1.4), 'shape=cylinder;whiteSpace=wrap;html=1;boundedLbl=1;rounded=0;labelBackgroundColor=none;fillColor=#438DD5;fontSize=12;fontColor=#ffffff;align=center;strokeColor=#3C7FC0;metaEdit=1;points=[[0.5,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.5,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];metaData={"mondrianType":{"editable":false}};');
		    	bg.vertex = true;
		    	bg.setValue(mxUtils.createXmlDocument().createElement('object'));
		    	bg.setAttribute('placeholders', '1');
		        bg.setAttribute('mondrianType', 'Database');
		        bg.setAttribute('mondrianTechnology', 'Technology');
		        bg.setAttribute('mondrianDescription', 'Description');
		    	bg.setAttribute('label', '%mondrianType%<div>[Container:&nbsp;%mondrianTechnology%]</div><br><div>%mondrianDescription%</div>');
			    
			   	return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, 'Database');
			}),				
			this.addEntry(dt + 'relationship', function()
		   	{
			    var edge = new mxCell('', 
			    		new mxGeometry(0, 0, w * 1.6, 0), 'edgeStyle=none;rounded=0;html=1;entryX=0;entryY=0.5;jettySize=auto;orthogonalLoop=1;strokeColor=#707070;strokeWidth=2;fontColor=#707070;jumpStyle=none;dashed=1;metaEdit=1;metaData={"mondrianType":{"editable":false}};');
				edge.geometry.setTerminalPoint(new mxPoint(0, 0), true);
				edge.geometry.setTerminalPoint(new mxPoint(w * 1.6, 0), false);
				edge.geometry.relative = true;
			    edge.edge = true;
			    edge.setValue(mxUtils.createXmlDocument().createElement('object'));
			    edge.setAttribute('placeholders', '1');
			    edge.setAttribute('mondrianType', 'Relationship');
			    edge.setAttribute('mondrianTechnology', 'technology');
			    edge.setAttribute('mondrianDescription', 'Description');
			    edge.setAttribute('label', '<div style="text-align: left"><div style="text-align: center"><b>%mondrianDescription%</b></div><div style="text-align: center">[%mondrianTechnology%]</div></div>');
			    
			   	return sb.createEdgeTemplateFromCells([edge], edge.geometry.width, edge.geometry.height, 'Relationship');
			})	*/		
		]);
		
		this.setCurrentSearchEntryLibrary();
	};
})();
