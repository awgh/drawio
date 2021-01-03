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

		this.setCurrentSearchEntryLibrary('ibm2', 'ibm2Groups');

		var fns = [
			 // General groups
			 this.createVertexTemplateEntry(s + cloudColor + 'image=ibm-cloud;', x, y, 'IBM Cloud', 'IBM Cloud', true, null, null),
			 this.createVertexTemplateEntry(s + locationColor + 'image=flag;', x, y, 'Region', 'Region', true, null, null),
			 this.createVertexTemplateEntry(s + locationColor + 'image=location;', x, y, 'Region', 'Region', true, null, null),
			 this.createVertexTemplateEntry(s + locationColor + 'image=devices;', x, y, 'Zone', 'Zone', true, null, null),
			 this.createVertexTemplateEntry(s + cloudColor + 'image=events;', x, y, 'Public Network', 'Public Network', true, null, null),
			 this.createVertexTemplateEntry(s + cloudColor + 'image=enterprise;', x, y, 'Enterprise Network', 'Enterprise Network', true, null, null),
			 this.createVertexTemplateEntry(s + accountColor + 'image=credentials;', x, y, 'Access Group', 'Access Group', true, null, null),
			 this.createVertexTemplateEntry(s + accountColor + 'image=user;', x, y, 'Account Group', 'Account Group', true, null, null),
			 this.createVertexTemplateEntry(s + accountColor + 'image=collaborate;', x, y, 'Resource Group', 'Account Group', true, null, null),

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

		this.setCurrentSearchEntryLibrary();
	};
})();
