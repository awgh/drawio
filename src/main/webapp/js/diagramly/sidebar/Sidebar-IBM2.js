(function()
{
	Sidebar.prototype.addIBM2Palette = function()
	{
		var aw = 48;
		var ah = 48;

		var gw = 240;
		var gh = 240;

		var gn = 'mxgraph.ibm2';
		var dt = 'ibm ';

		var actorUserColor = "colorFamily=gray;"

		var groupAccountColor = "colorFamily=gray;"
		var groupCloudColor = "colorFamily=blue;"
		var groupNetworkColor = "colorFamily=green;"
		var groupSecurityColor = "colorFamily=red;"
		var groupSectionColor = "colorFamily=blue;colorFillIcon=noColor;"

		var actor_style = 'shape=mxgraph.ibm2mondrian.base;shapeType=actor;html=1;whiteSpace=wrap;fontFamily=IBM Plex Sans;fontColor=#000000;fontSize=14;verticalAlign=middle;align=left;spacing=8;spacingLeft=12;spacingRight=16;spacingTop=0;spacingBottom=0;metaEdit=0;strokeWidth=1;'

		var group_style = 'shape=mxgraph.ibm2mondrian.base;shapeType=group;html=1;whiteSpace=wrap;fontFamily=IBM Plex Sans;fontColor=#000000;fontSize=14;verticalAlign=middle;align=left;spacing=8;spacingLeft=12;spacingRight=16;spacingTop=0;spacingBottom=0;metaEdit=0;strokeWidth=1;container=1;collapsible=0;recursiveResize=0;';

		this.setCurrentSearchEntryLibrary('ibm2', 'ibm2Groups');

		function createActorVertex(name, color, icon)
		{
			var bg = new mxCell('', new mxGeometry(0, 0, aw, ah), actor_style + color);
	    		bg.vertex = true;
	    		bg.setValue(mxUtils.createXmlDocument().createElement('object'));
			bg.setAttribute('placeholders', '1');
			bg.setAttribute('label', '<B>%Element-Name%</B><BR><font style=\'font-size: 12px\'>%Element-ID%</font>');
               		bg.setAttribute('Element-ID', '');
			bg.setAttribute('Element-Name', '');
			bg.setAttribute('Icon-Name', icon);
	   		return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, name);
		};

		function createGroupVertex(name, color, icon)
		{
			var bg = new mxCell('', new mxGeometry(0, 0, gw, gh), group_style + color);
	    		bg.vertex = true;
	    		bg.setValue(mxUtils.createXmlDocument().createElement('object'));
			bg.setAttribute('placeholders', '1');
			bg.setAttribute('label', '<B>%Element-Name%</B><BR><font style=\'font-size: 12px\'>%Element-ID%</font>');
               		bg.setAttribute('Element-ID', '');
			bg.setAttribute('Element-Name', name);
			bg.setAttribute('Icon-Name', icon);
	   		return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, name);
		};

		this.addPaletteFunctions('ibm2', 'IBM 2.0 / Groups', false,
		[
			// Cloud groups
			this.addEntry(dt + 'cloud header', function() { return createActorVertex('Cloud Groups', groupSectionColor, 'ibm-cloud') }),
			this.addEntry(dt + 'ibm cloud', function() { return createGroupVertex('IBM Cloud', groupCloudColor, 'ibm-cloud') }),
			this.addEntry(dt + 'region', function() { return createGroupVertex('Region', groupAccountColor, 'flag') }),
			this.addEntry(dt + 'region alt', function() { return createGroupVertex('Region', groupAccountColor, 'location') }),
			this.addEntry(dt + 'zone', function() { return createGroupVertex('Zone', groupAccountColor, 'enterprise') }),
			this.addEntry(dt + 'public', function() { return createGroupVertex('Public Network', groupCloudColor, 'events') }),
			this.addEntry(dt + 'enterprise', function() { return createGroupVertex('Enterprise Network', groupCloudColor, 'enterprise') }),
			this.addEntry(dt + 'account', function() { return createGroupVertex('Account', groupAccountColor, 'user') }),
			this.addEntry(dt + 'access', function() { return createGroupVertex('Access Group', groupAccountColor, 'credentials') }),
			this.addEntry(dt + 'resource', function() { return createGroupVertex('Resource Group', groupAccountColor, 'collaborate') }),

			// VPC groups 
			this.addEntry(dt + 'vpc header', function() { return createActorVertex('VPC Groups', groupSectionColor, 'virtual-private-cloud') }),
			this.addEntry(dt + 'vpc', function() { return createGroupVertex('VPC', groupCloudColor, 'virtual-private-cloud') }),
			this.addEntry(dt + 'subnet', function() { return createGroupVertex('Subnet:ACL', groupNetworkColor, 'virtual-private-cloud') }),
			this.addEntry(dt + 'vs', function() { return createGroupVertex('Virtual Server', groupNetworkColor, 'virtual-machine') }),
			this.addEntry(dt + 'sg', function() { return createGroupVertex('Security Group', groupSecurityColor, 'security') }),
		]);

		this.addPaletteFunctions('ibm2', 'IBM 2.0 / User', false,
		[
			this.addEntry(dt + 'user', function() { return createActorVertex('User', actorUserColor, 'user') }),
		]);

		this.setCurrentSearchEntryLibrary();
	};
})();
