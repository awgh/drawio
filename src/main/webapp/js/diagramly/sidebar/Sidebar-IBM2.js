(function()
{
	Sidebar.prototype.addIBM2Palette = function()
	{
		var d = 60;
		var dt = 'ibm ';
		var sb = this;
		var s = 'shape=mxgraph.ibm2mondrian.base;shapeType=group;html=1;whiteSpace=wrap;fontFamily=IBM Plex Sans;fontColor=#000000;fontSize=14;verticalAlign=middle;align=left;spacing=8;spacingLeft=12;spacingRight=16;spacingTop=0;spacingBottom=0;metaEdit=0;strokeWidth=1;container=1;collapsible=0;recursiveResize=0;';
		
		// Adds IBM shapes
		this.setCurrentSearchEntryLibrary('ibm2', 'ibm2Groups');
		this.addIBM2GroupsPalette(d, dt, sb, s);
		this.setCurrentSearchEntryLibrary();
	};

	Sidebar.prototype.addIBM2GroupsPalette = function(d, dt, sb, s)
	{
		var x = 240;
		var y = 160;

		var generalColor = "colorFamily=blue"
		var accountColor = "colorFamily=purple;"
		var locationColor = "colorFamily=gray;"
		var networkColor = "colorFamily=teal;"
		var securityColor = "colorFamily=red;"

		var fns = [
			 // General groups
			 this.createVertexTemplateEntry(s + cloudColor + 'image=ibm-cloud;', x, y, 'IBM Cloud', 'IBM Cloud', true, null, null),
			 this.createVertexTemplateEntry(s + locationColor + 'image=flag;', x, y, 'Region', 'Region', true, null, null),
			 this.createVertexTemplateEntry(s + locationColor + 'image=location;', x, y, 'Region', 'Region', true, null, null),
			 this.createVertexTemplateEntry(s + locationColor + 'image=devices;', x, y, 'Zone', 'Zone', true, null, null),
			 this.createVertexTemplateEntry(s + generalColor + 'image=events;', x, y, 'Public Network', 'Public Network', true, null, null),
			 this.createVertexTemplateEntry(s + generalColor + 'image=enterprise;', x, y, 'Enterprise Network', 'Enterprise Network', true, null, null),

			 // VPC groups
			 this.createVertexTemplateEntry(s + cloudColor + 'image=virtual-private-cloud;', x, y, 'VPC', 'VPC', true, null, null),
			 this.createVertexTemplateEntry(s + networkColor + 'image=virtual-private-cloud;', x, y, 'Subnet', 'Subnet', true, null, null),
		];
			   	
   		this.addPalette('ibm2Groups', 'IBM 2.0 / Cloud / Groups', false, mxUtils.bind(this, function(content)
	    {
			for (var i = 0; i < fns.length; i++)
			{
				content.appendChild(fns[i](content));
			}
		}));
	};
})();
