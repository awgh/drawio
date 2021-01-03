(function()
{
	Sidebar.prototype.addIBM2Palette = function()
	{
		var w = 240;
		var h = 48;
		var gn = 'mxgraph.ibm2';
		var dt = 'ibm ';

		var cloudColor = "colorFamily=blue;"
		var accountColor = "colorFamily=purple;"
		var locationColor = "colorFamily=gray;"
		var networkColor = "colorFamily=teal;"
		var securityColor = "colorFamily=red;"

		var style_text = 'shape=mxgraph.ibm2mondrian.base;shapeType=group;html=1;whiteSpace=wrap;fontFamily=IBM Plex Sans;fontColor=#000000;fontSize=14;verticalAlign=middle;align=left;spacing=8;spacingLeft=12;spacingRight=16;spacingTop=0;spacingBottom=0;metaEdit=0;strokeWidth=1;container=1;collapsible=0;recursiveResize=0;';

		this.setCurrentSearchEntryLibrary('ibm2', 'ibm2Groups');

		var fns = [
			 // General groups
			 this.createVertexTemplateEntry(style_text + cloudColor + 'image=ibm-cloud;', x, y, 'IBM Cloud', 'IBM Cloud', true, null, null),
			 this.createVertexTemplateEntry(style_text + locationColor + 'image=flag;', x, y, 'Region', 'Region', true, null, null),
			 this.createVertexTemplateEntry(style_text + locationColor + 'image=location;', x, y, 'Region', 'Region', true, null, null),
			 this.createVertexTemplateEntry(style_text + locationColor + 'image=devices;', x, y, 'Zone', 'Zone', true, null, null),
			 this.createVertexTemplateEntry(style_text + cloudColor + 'image=events;', x, y, 'Public Network', 'Public Network', true, null, null),
			 this.createVertexTemplateEntry(style_text + cloudColor + 'image=enterprise;', x, y, 'Enterprise Network', 'Enterprise Network', true, null, null),
			 this.createVertexTemplateEntry(style_text + accountColor + 'image=credentials;', x, y, 'Access Group', 'Access Group', true, null, null),
			 this.createVertexTemplateEntry(style_text + accountColor + 'image=user;', x, y, 'Account Group', 'Account Group', true, null, null),
			 this.createVertexTemplateEntry(style_text + accountColor + 'image=collaborate;', x, y, 'Resource Group', 'Account Group', true, null, null),

			 // VPC groups
			 this.createVertexTemplateEntry(style_text + cloudColor + 'image=virtual-private-cloud;', x, y, 'VPC', 'VPC', true, null, null),
			 this.createVertexTemplateEntry(style_text + networkColor + 'image=virtual-private-cloud;', x, y, 'Subnet', 'Subnet', true, null, null),
		];

		this.addPalette('ibm2Groups', 'IBM 2.0 / Cloud / Groups', false, mxUtils.bind(this, function(content)
		{
			for (var i = 0; i < fns.length; i++)
			{
				content.appendChild(fns[i](content));
			}
		}));

		this.setCurrentSearchEntryLibrary();
	};
})();
