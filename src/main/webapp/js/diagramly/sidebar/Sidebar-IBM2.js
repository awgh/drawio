(function()
{
	Sidebar.prototype.addIBM2Palette = function()
	{
		var w = 240;
		var h = 240;
		var gn = 'mxgraph.ibm2';
		var dt = 'ibm ';

		var cloudColor = "colorFamily=blue;"
		var accountColor = "colorFamily=gray;"
		var networkColor = "colorFamily=green;"
		var securityColor = "colorFamily=red;"

		var group_style = 'shape=mxgraph.ibm2mondrian.base;shapeType=group;html=1;whiteSpace=wrap;fontFamily=IBM Plex Sans;fontColor=#000000;fontSize=14;verticalAlign=middle;align=left;spacing=8;spacingLeft=12;spacingRight=16;spacingTop=0;spacingBottom=0;metaEdit=0;strokeWidth=1;container=1;collapsible=0;recursiveResize=0;';

		//var section_style = 'text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;';
	 	var section_style = 'html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;shape=mxgraph.ibm2mondrian.';

		this.setCurrentSearchEntryLibrary('ibm2', 'ibm2Groups');

		function createVertexTemplate(name, color, icon)
		{
			var bg = new mxCell('', new mxGeometry(0, 0, w, h), group_style + color);
	    		bg.vertex = true;
	    		bg.setValue(mxUtils.createXmlDocument().createElement('object'));
			bg.setAttribute('placeholders', '1');
			bg.setAttribute('label', '<B>%Element-Name%</B><BR><font style=\'font-size: 12px\'>%Element-ID%</font>');
               		bg.setAttribute('Element-ID', '');
			bg.setAttribute('Element-Name', name);
			bg.setAttribute('Icon-Name', icon);
	   		return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, 'BASE');
		};

		this.addPaletteFunctions('ibm2', 'IBM 2.0 / Cloud / Groups', false,
		[
			// Cloud groups
			//this.createVertexTemplateEntry(sectionProperties, 0, 0, 'ibm cloud', 'ibm cloud', true, null, null),
			this.createVertexTemplateEntry(section_style + 'ibm-cloud', 24, 24, '', '', true, null, null), 
			this.addEntry(dt + 'ibm cloud', function() { return createVertexTemplate('IBM Cloud', cloudColor, 'ibm-cloud') }),
			this.addEntry(dt + 'region', function() { return createVertexTemplate('Region', accountColor, 'flag') }),
			this.addEntry(dt + 'region alt', function() { return createVertexTemplate('Region', accountColor, 'location') }),
			this.addEntry(dt + 'zone', function() { return createVertexTemplate('Zone', accountColor, 'enterprise') }),
			this.addEntry(dt + 'public', function() { return createVertexTemplate('Public Network', cloudColor, 'events') }),
			this.addEntry(dt + 'enterprise', function() { return createVertexTemplate('Enterprise Network', cloudColor, 'enterprise') }),
			this.addEntry(dt + 'account', function() { return createVertexTemplate('Account', accountColor, 'user') }),
			this.addEntry(dt + 'access', function() { return createVertexTemplate('Access Group', accountColor, 'credentials') }),
			this.addEntry(dt + 'resource', function() { return createVertexTemplate('Resource Group', accountColor, 'collaborate') }),

			// VPC groups 
			//this.createVertexTemplateEntry(sectionProperties, 0, 0, 'vpc', 'vpc', true, null, null),
			this.createVertexTemplateEntry(section_style + 'virtual-private-cloud', 24, 24, '', '', true, null, null), 
			this.addEntry(dt + 'vpc', function() { return createVertexTemplate('VPC', cloudColor, 'virtual-private-cloud') }),
			this.addEntry(dt + 'subnet', function() { return createVertexTemplate('Subnet', networkColor, 'virtual-private-cloud') }),
			this.addEntry(dt + 'vs', function() { return createVertexTemplate('Virtual Server', networkColor, 'virtual-machine') }),
			this.addEntry(dt + 'sg', function() { return createVertexTemplate('Security Group', securityColor, 'security') }),
		]);

		this.setCurrentSearchEntryLibrary();
	};
})();
