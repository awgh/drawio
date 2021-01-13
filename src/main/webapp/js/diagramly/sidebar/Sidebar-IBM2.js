(function()
{
	Sidebar.prototype.addIBM2Palette = function()
	{
		var dt = 'ibm mondrian ';

		var actor = 'actor';
		var group = 'group';
		var lnode = 'ln';
	
		var account = 'gray';
		var cloud = 'blue';
		var kube = 'purple';
		var loc = 'gray';
		var network = 'green';
		var section = 'gray';
		var security = 'red';
		var user = 'black';
		var vpc = 'green';

		var spanning_groups = 'Security Group';

		var stencils = 
		[
		    [
			['Groups'],

			['Cloud Groups',		'ibm-cloud',			lnode, section],
			['IBM Cloud',			'ibm-cloud',			group, cloud],
			['Region',			'flag',				group, loc],
			['Region Alt',			'location',			group, loc],
			['Zone',			'data--base--alt',		group, loc],
			['Cloud Services',		'',				group, cloud],
			['Classic Infrastructure',	'',				group, cloud],
			['Account',			'user',				group, account],
			['Access Group',		'credentials',			group, account],
			['Resource Group',		'collaborate',			group, account],

			['VPC Groups',			'virtual-private-cloud',	lnode, section],
			['VPC',				'virtual-private-cloud',	group, vpc],
			['Subnet:ACL',			'',				group, vpc],
			['Virtual Server',		'virtual-machine',		group, vpc],
			['Instance Group',		'',				group, vpc],
			['Physical Server',		'',				group, vpc],
			['Endpoints',			'',				group, vpc],
			['Security Group',		'security',			group, security],

			['Kubernetes Groups',		'',				lnode, section],
			['Kubernetes Cluster',		'',				group, cloud],
			['OpenShift Cluster',		'',				group, cloud],
			['Kubernetes Services',		'',				group, kube],
			['Kubernetes Replica Set',	'',				group, kube],
			['Kubernetes Pod',		'',				group, kube],
			['Kubernetes Namespace',	'',				group, kube],

			['Network Groups',		'',				lnode, section],
			['Public Network',		'events',			group, network],
			['Enterprise Network',		'enterprise',			group, network],
			['Cloud Foundry',		'',				group, network],
			['Data Center',			'',				group, network],
			['Point of Presence',		'',				group, network],
			['Overlay Network',		'',				group, network],
			['VLAN',			'',				group, network],
	   	    ],

		    [
			['Compute'],

			['Virtual Server',		'virtual-machine',		lnode, cloud],
			['Instance Group',		'',				lnode, cloud],
		    ],

		    [
			['Compute Devices'],

			['Physical Server',		'archive',			lnode, cloud],
			['Web Browser',			'terminal',			lnode, cloud],
			['Mobile Device',		'mobile',			lnode, cloud],
			['Tablet Device',		'tablet',			lnode, cloud],
			['Laptop Device',		'laptop',			lnode, cloud],
			['Desktop Computer',		'devices',			lnode, cloud],
		    ],

		    [
			['Network'],

			['Floating IP',			'connect',			lnode, cloud],
			['Transit Gateway',		'',				lnode, cloud],
			['Endpoints',			'',				lnode, cloud],
		    ],

		    [
			['Network Devices'],

			['Application Load Balancer',	'parent-child',			lnode, cloud],
			['Network Load Balancer',	'parent-child',			lnode, cloud],
			['Public Gateway',		'network--2',			lnode, cloud],
			['Edge Node',			'edge-node',			lnode, cloud],
		    ],

		    [
			['Security'],

			['VPN',				'VPN'	,			lnode, security],
			['VPN Policy',			'policy',			lnode, security],
			['Identity and Access Manager',	'fingerprint-recognition',	lnode, security],
			['Credentials',			'credentials',			lnode, security],
			['Rule',			'rule',				lnode, security],
		    ],

		    [
			['Security Devices'],

			['VPN Gateway',			'',				lnode, security],
		    ],

		    [
			['Storage'],

			['Object Storage Accessor',	'',				lnode, cloud],
			['Object Storage Slicestor',	'',				lnode, cloud],
		    ],

		    [
			['Storage Devices'],

			['Block Storage',		'',				lnode, cloud],
			['File Storage',		'',				lnode, cloud],
			['Object Storage',		'object-storage',		lnode, cloud],
		    ],

		    [
			['Users'],

			['User',			'user',				actor, user],
			['Users',			'group',			actor, user],
			['Events',			'events',			actor, user],
			['Collaborate',			'collaborate',			actor, user],
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

			if (shapeType == actor_type)
			{
				shapeLayout = 'collapsed';				
				extraStyle = ';colorFamily=' + shapeColor;
			}
			else
			{
				shapeLayout = 'expanded';				
				if (spanning_groups.includes(shapeName))
				{
					extraStyle = ';container=0;collapsible=0;recursiveResize=0;colorFamily=' + shapeColor;
				}
				else 
				{
					extraStyle = ';container=1;collapsible=0;recursiveResize=0;colorFamily=' + shapeColor;
				}
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
			this.setCurrentSearchEntryLibrary('ibm2', 'ibm2' + header.replace(/\s/g,''));
			this.addPaletteFunctions('ibm2', 'IBM 2.0 / ' + header, false, entries);
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
