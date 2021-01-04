(function()
{
	Sidebar.prototype.addIBM2Palette = function()
	{
		var w = 240;
		var h = 160;
		var gn = 'mxgraph.ibm2';
		var dt = 'ibm ';

		var cloudColor = "colorFamily=blue;"
		var accountColor = "colorFamily=purple;"
		var locationColor = "colorFamily=gray;"
		var networkColor = "colorFamily=teal;"
		var securityColor = "colorFamily=red;"

		var style_text = 'shape=mxgraph.ibm2mondrian.base;shapeType=group;html=1;whiteSpace=wrap;fontFamily=IBM Plex Sans;fontColor=#000000;fontSize=14;verticalAlign=middle;align=left;spacing=8;spacingLeft=12;spacingRight=16;spacingTop=0;spacingBottom=0;metaEdit=0;strokeWidth=1;container=1;collapsible=0;recursiveResize=0;';

		this.setCurrentSearchEntryLibrary('ibm2', 'ibm2Groups');

		//var fns = [
			 // General groups
			 //this.createVertexTemplateEntry(style_text + cloudColor + 'image=ibm-cloud;', w, h, 'IBM Cloud', 'IBM Cloud', true, null, null),
			 //this.createVertexTemplateEntry(style_text + locationColor + 'image=flag;', w, h, 'Region', 'Region', true, null, null),
			 //this.createVertexTemplateEntry(style_text + locationColor + 'image=location;', w, h, 'Region', 'Region', true, null, null),
			 //this.createVertexTemplateEntry(style_text + locationColor + 'image=devices;', w, h, 'Zone', 'Zone', true, null, null),
			 //this.createVertexTemplateEntry(style_text + cloudColor + 'image=events;', w, h, 'Public Network', 'Public Network', true, null, null),
			 //this.createVertexTemplateEntry(style_text + cloudColor + 'image=enterprise;', w, h, 'Enterprise Network', 'Enterprise Network', true, null, null),
			 //this.createVertexTemplateEntry(style_text + accountColor + 'image=credentials;', w, h, 'Access Group', 'Access Group', true, null, null),
			 //this.createVertexTemplateEntry(style_text + accountColor + 'image=user;', w, h, 'Account Group', 'Account Group', true, null, null),
			 //this.createVertexTemplateEntry(style_text + accountColor + 'image=collaborate;', w, h, 'Resource Group', 'Account Group', true, null, null),

			 // VPC groups
			 //this.createVertexTemplateEntry(style_text + cloudColor + 'image=virtual-private-cloud;', w, h, 'VPC', 'VPC', true, null, null),
			 //this.createVertexTemplateEntry(style_text + networkColor + 'image=subnet;', w, h, 'Subnet', 'Subnet', true, null, null),
			 //this.createVertexTemplateEntry(style_text + securityColor + 'image=security;', w, h, 'Subnet', 'Subnet', true, null, null),
		//];

		//this.addPalette('ibm2Groups', 'IBM 2.0 / Cloud / Groups', false, mxUtils.bind(this, function(content)
		//{
		//	for (var i = 0; i < fns.length; i++)
		//	{
		//		content.appendChild(fns[i](content));
		//	}
		//}));

		this.addPaletteFunctions('ibm2', 'IBM 2.0 / Cloud / Groups', false,
		[
			this.addEntry(dt + 'tn', function()
		   	{
			    var bg = new mxCell('', new mxGeometry(0, 0, w, h), style_text + cloudColor);
		    		bg.vertex = true;
		    		bg.setValue(mxUtils.createXmlDocument().createElement('object'));
				bg.setAttribute('placeholders', '1');
				bg.setAttribute('label', '<B>%Element-Name%</B><BR><font style=\'font-size: 12px\'>%Element-ID%</font>');
                		bg.setAttribute('Element-ID', 'Element-ID');
				bg.setAttribute('Element-Name', 'IBM Cloud');
				bg.setAttribute('Icon-Name', 'ibm-cloud');
			    
			   	return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, 'BASE');
			})				
		]);

		this.setCurrentSearchEntryLibrary();
	};
})();
