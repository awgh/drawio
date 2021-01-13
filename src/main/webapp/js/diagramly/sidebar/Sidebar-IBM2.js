(function()
{
	Sidebar.prototype.addIBM2Palette = function()
	{
		var dt = 'ibm mondrian ';

		// Types
		var actor = 'actor';
		var group = 'group';
		var tsysm = 'ts';
		var lcomp = 'lc';
		var lnode = 'ln';
		var lcomp = 'lc';
		var pnode = 'pn';
		var pcomp = 'pc';
	
		// Colors
		var black   = 'black';
		var blue    = 'blue';
		var cyan    = 'cyan';
		var gray    = 'gray';
		var green   = 'green';
		var magenta = 'magenta';
		var purple  = 'purple';
		var red     = 'red';
		var teal    = 'teal';

		var spanning_groups = 'Security Group';

		var stencils = 
		[
		    [
			['Groups'],

			['Cloud Groups',		'ibm-cloud',			lnode, gray],
			['IBM Cloud',			'ibm-cloud',			group, blue],
			['Region',			'flag',				group, gray],
			['Region Alt',			'location',			group, gray],
			['Zone',			'data--base--alt',		group, gray],
			['Cloud Services',		'',				group, blue],
			['Classic Infrastructure',	'',				group, blue],
			['Account',			'user',				group, gray],
			['Access Group',		'credentials',			group, gray],
			['Resource Group',		'collaborate',			group, gray],

			['VPC Groups',			'virtual-private-cloud',	lnode, gray],
			['VPC',				'virtual-private-cloud',	group, green],
			['Subnet:ACL',			'',				group, green],
			['Virtual Server',		'virtual-machine',		group, green],
			['Instance Group',		'',				group, green],
			['Physical Server',		'',				group, green],
			['Endpoints',			'',				group, green],
			['Security Group',		'security',			group, red],

			['Kubernetes Groups',		'',				lnode, gray],
			['Kubernetes Cluster',		'',				group, blue],
			['OpenShift Cluster',		'',				group, blue],
			['Kubernetes Services',		'',				group, purple],
			['Kubernetes Replica Set',	'',				group, purple],
			['Kubernetes Pod',		'',				group, purple],
			['Kubernetes Namespace',	'',				group, purple],

			['Network Groups',		'',				lnode, gray],
			['Public Network',		'events',			group, green],
			['Enterprise Network',		'enterprise',			group, green],
			['Cloud Foundry',		'',				group, green],
			['Data Center',			'',				group, green],
			['Point of Presence',		'',				group, green],
			['Overlay Network',		'',				group, green],
			['VLAN',			'',				group, green],
	   	    ],

		    [
			['Compute'],

			['Virtual Server',		'virtual-machine',		lnode, blue],
			['Instance Group',		'',				lnode, blue],
		    ],

		    [
			['Compute / Devices'],

			['Physical Server',		'archive',			pnode, blue],
			['Web Browser',			'terminal',			lnode, blue],
			['Mobile Device',		'mobile',			pnode, blue],
			['Tablet Device',		'tablet',			pnode, blue],
			['Laptop Device',		'laptop',			pnode, blue],
			['Desktop Computer',		'devices',			pnode, blue],
		    ],

		    [
			['Network'],

			['Floating IP',			'connect',			lnode, blue],
			['Transit Gateway',		'',				lnode, blue],
			['Endpoints',			'',				lnode, blue],
		    ],

		    [
			['Network / Devices'],

			['Application Load Balancer',	'parent-child',			pnode, blue],
			['Network Load Balancer',	'parent-child',			pnode, blue],
			['Public Gateway',		'network--2',			pnode, blue],
			['Edge Node',			'edge-node',			pnode, blue],
		    ],

		    [
			['Security'],

			['VPN',				'VPN'	,			lnode, red],
			['VPN Policy',			'policy',			lnode, red],
			['Identity and Access Manager',	'fingerprint-recognition',	lnode, red],
			['Credentials',			'credentials',			lnode, red],
			['Rule',			'rule',				lnode, red],
		    ],

		    [
			['Security / Devices'],

			['VPN Gateway',			'',				pnode, red],
		    ],

		    [
			['Storage'],

			['Object Storage Accessor',	'',				lnode, blue],
			['Object Storage Slicestor',	'',				lnode, blue],
		    ],

		    [
			['Storage / Devices'],

			['Block Storage',		'',				pnode, blue],
			['File Storage',		'',				pnode, blue],
			['Object Storage',		'object-storage',		pnode, blue],
		    ],

		    [
			['Users'],

			['User',			'user',				actor, black],
			['Users',			'group',			actor, black],
			['Events',			'events',			actor, black],
			['Collaborate',			'collaborate',			actor, black],
			['Web Browser',			'terminal',			actor, black],
		    ],
		];

		function createVertex(stencil)
		{
			var shapeName = stencil[0];
			var iconName = stencil[1];
			var shapeType = stencil[2];
			var shapeColor = stencil[3];

			var extraStyle = '';
			var shapeLayout = '';
			var shapeId = '';

			if (shapeType == group)
			{
				shapeLayout = 'expanded';				
				if (spanning_groups.includes(shapeName))
				{
					extraStyle = ';container=0;collapsible=0;recursiveResize=0;fontStyle=0;colorFamily=' + shapeColor;
				}
				else 
				{
					extraStyle = ';container=1;collapsible=0;recursiveResize=0;fontStyle=0;colorFamily=' + shapeColor;
				}
			}
			else
			{
				shapeLayout = 'collapsed';				
				extraStyle = ';fontStyle=0;colorFamily=' + shapeColor;
			}

			var bg = Sidebar.prototype.addIBM2MondrianVertexTemplateFactoryPlus(shapeType, shapeLayout, extraStyle, shapeId, shapeName, iconName);
	   		return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, shapeName);
		};

		stencils.forEach((section, stencil_index) => {
			var header = '';
			var entries = [];
			section.forEach((stencil, section_index) => {
				if (section_index == 0)
				{
					header = stencil[0];
				}
				else
				{
					var entryName = (dt + header.replace(/\s/g,'').toLowerCase() + name.replace(/\s/g,'')).toLowerCase();
					entries.push(this.addEntry(entryName, function() { return createVertex(stencil); }))
				}
			});
			this.setCurrentSearchEntryLibrary('ibm2', 'ibm2' + header);
			this.addPaletteFunctions('ibm2' + header, 'IBM 2.0 / ' + header, false, entries);
		});

		this.setCurrentSearchEntryLibrary();
	};

	Sidebar.prototype.addIBM2MondrianVertexTemplateFactoryPlus = function(shapeType, shapeLayout, shapeExtraStyle, shapeId, shapeName, iconName)
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
		bg.setAttribute('label', '<B>%Element-Name%</B><BR><font style=\'font-size: 12px\'>%Element-ID%</font>');
		bg.setAttribute('Element-ID', shapeId);
		bg.setAttribute('Element-Name', shapeName);
		bg.setAttribute('Icon-Name', iconName);
		
		return bg;
	}
})();
