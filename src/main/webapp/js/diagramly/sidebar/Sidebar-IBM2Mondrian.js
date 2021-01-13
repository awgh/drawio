(function()
{
	Sidebar.prototype.addIBM2MondrianPalette = function()
	{
		var dt = 'ibm mondrian ';
		this.setCurrentSearchEntryLibrary('ibm2mondrian', 'ibm2Mondrian');
		
		this.addPaletteFunctions('ibm2mondrian', 'IBM 2.0 Mondrian', false,
		[
			this.addEntry(dt + 'actor', function()
			{
			 var bg = Sidebar.prototype.addIBM2MondrianVertexTemplateFactory('actor', 'collapsed', '');
			 return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, 'Actor');
			}),

			this.addEntry(dt + 'ts', function()
			{
			  var bg = Sidebar.prototype.addIBM2MondrianVertexTemplateFactory('ts', 'collapsed', '');
			  return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, 'Target System (Collapsed)');
			}),
			this.addEntry(dt + 'ln', function()
		   	{
				var bg = Sidebar.prototype.addIBM2MondrianVertexTemplateFactory('ln', 'collapsed', '');
				return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, 'Logical Node (Collapsed)');
			}),
			this.addEntry(dt + 'lc', function()
			 {
			  var bg = Sidebar.prototype.addIBM2MondrianVertexTemplateFactory('lc', 'collapsed', '');
			  return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, 'Logical Component (Collapsed)');
			}),
			this.addEntry(dt + 'pn', function()
			{
			 var bg = Sidebar.prototype.addIBM2MondrianVertexTemplateFactory('pn', 'collapsed', '');
			 return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, 'Prescribed Node (Collapsed)');
			}),
			this.addEntry(dt + 'pc', function()
			{
			var bg = Sidebar.prototype.addIBM2MondrianVertexTemplateFactory('pc', 'collapsed', '');
			return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, 'Prescribed Component (Collapsed)');
			}),


			this.addEntry(dt + 'ts', function()
			{
			  var bg = Sidebar.prototype.addIBM2MondrianVertexTemplateFactory('ts', 'expanded', '');
			  return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, 'Target System (Expanded)');
			}),
			this.addEntry(dt + 'ln', function()
		   	{
				var bg = Sidebar.prototype.addIBM2MondrianVertexTemplateFactory('ln', 'expanded', '');
				return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, 'Logical Node (Expanded)');
			}),
			this.addEntry(dt + 'lc', function()
			{
			  var bg = Sidebar.prototype.addIBM2MondrianVertexTemplateFactory('lc', 'expanded', '');
			  return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, 'Logical Component (Expanded)');
			}),
			this.addEntry(dt + 'pn', function()
			{
			 var bg = Sidebar.prototype.addIBM2MondrianVertexTemplateFactory('pn', 'expanded', '');
			 return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, 'Prescribed Node (Expanded)');
			}),
			this.addEntry(dt + 'pc', function()
			{
			var bg = Sidebar.prototype.addIBM2MondrianVertexTemplateFactory('pc', 'expanded', '');
			return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, 'Prescribed Component (Expanded)');
			}),
			this.addEntry(dt + 'group', function()
			{
			var bg = Sidebar.prototype.addIBM2MondrianVertexTemplateFactory('group', 'expanded', ';container=1;collapsible=0;recursiveResize=0');
			return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, 'Group');
			})
		]);
		
		this.setCurrentSearchEntryLibrary();
	};

	Sidebar.prototype.addIBM2MondrianVertexTemplateFactory = function(shapeType, shapeLayout, shapeExtraStyle)
	{
		const gn = 'mxgraph.ibm2mondrian';
		const default_icon = '';
		const other_label = 'metaEdit=0;strokeWidth=1' + shapeExtraStyle;
		var styleText = 'html=1;whiteSpace=wrap;fontFamily=IBM Plex Sans;fontColor=#000000;fontSize=14';
		var shapeWidth = null;
		var shapeHeight = null;
	
		if(shapeLayout === 'expanded')
		{
			shapeHeight = (shapeType === 'group') ? 152 : 48;
			shapeWidth = 240;
			styleText = styleText + ';verticalAlign=middle;align=left;spacing=0;spacingLeft=12;spacingRight=16;spacingTop=0;spacingBottom=0';
		}
		else if(shapeLayout === 'collapsed')
		{
			shapeHeight = 48;
			shapeWidth = (shapeType === 'ts') ? 64 : 48;
			styleText = styleText + ';verticalAlign=top;align=center;spacing=0;spacingLeft=0;spacingRight=0;spacingTop=8;spacingBottom=0;verticalLabelPosition=bottom;labelPosition=center;positionText=bottom;';
		}

		var bg = new mxCell('', 
			new mxGeometry(0, 0, shapeWidth, shapeHeight), "shape=" + gn + ".base" + ";shapeType=" + shapeType + ";shapeLayout=" + shapeLayout + ";" + styleText + ";" + other_label + ";" + "image=" + default_icon);
		bg.vertex = true;
		bg.setValue(mxUtils.createXmlDocument().createElement('UserObject'));
		bg.setAttribute('placeholders', '1');
		//bg.setAttribute('label', '<B>%Element-Name%</B><BR><font style=\'font-size: 12px\'>%Element-ID%</font>');
		bg.setAttribute('label', '%Element-Name%<BR><font style=\'font-size: 12px\'>%Element-ID%</font>');
		bg.setAttribute('Element-ID', 'Element-ID');
		bg.setAttribute('Element-Name', 'Element-Name');
		bg.setAttribute('Icon-Name', '');
		
		return bg;
	}
})();
