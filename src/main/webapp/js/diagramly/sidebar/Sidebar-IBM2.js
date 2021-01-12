(function()
{
	Sidebar.prototype.addIBM2Palette = function()
	{
		var dt = 'ibm mondrian ';

		var actor_type = 'actor';
		var actor_width = 48;
		var actor_height = 48;

		var group_type = 'group';
		var group_width = 240;
		var group_height = 240;

		var account_color = 'gray';
		var cloud_color = 'blue';
		var kube_color = 'purple';
		var location_color = 'gray';
		var network_color = 'green';
		var section_color = 'gray';
		var security_color = 'red';
		var user_color = 'black';
		var vpc_color = 'green';

		var spanning_groups = 'Security Group';

		var stencils = 
		[
		    [
			['Groups'],

			['Cloud Groups',		'ibm-cloud',			actor_type, section_color],
			['IBM Cloud',			'ibm-cloud',			group_type, cloud_color],
			['Region',			'flag',				group_type, location_color],
			['Region Alt',			'location',			group_type, location_color],
			['Zone',			'data--base--alt',		group_type, location_color],
			['Cloud Services',		'',				group_type, cloud_color],
			['Classic Infrastructure',	'',				group_type, cloud_color],
			['Account',			'user',				group_type, account_color],
			['Access Group',		'credentials',			group_type, account_color],
			['Resource Group',		'collaborate',			group_type, account_color],

			['VPC Groups',			'virtual-private-cloud',	actor_type, section_color],
			['VPC',				'virtual-private-cloud',	group_type, vpc_color],
			['Subnet:ACL',			'',				group_type, vpc_color],
			['Virtual Server',		'virtual-machine',		group_type, vpc_color],
			['Instance Group',		'',				group_type, vpc_color],
			['Physical Server',		'',				group_type, vpc_color],
			['Endpoints',			'',				group_type, vpc_color],
			['Security Group',		'security',			group_type, security_color],

			['Kubernetes Groups',		'',				actor_type, section_color],
			['Kubernetes Cluster',		'',				group_type, cloud_color],
			['OpenShift Cluster',		'',				group_type, cloud_color],
			['Kubernetes Services',		'',				group_type, kube_color],
			['Kubernetes Replica Set',	'',				group_type, kube_color],
			['Kubernetes Pod',		'',				group_type, kube_color],
			['Kubernetes Namespace',	'',				group_type, kube_color],

			['Network Groups',		'',				actor_type, section_color],
			['Public Network',		'events',			group_type, network_color],
			['Enterprise Network',		'enterprise',			group_type, network_color],
			['Cloud Foundry',		'',				group_type, network_color],
			['Data Center',			'',				group_type, network_color],
			['Point of Presence',		'',				group_type, network_color],
			['Overlay Network',		'',				group_type, network_color],
			['VLAN',			'',				group_type, network_color],
	   	    ],

		    [
			['Compute'],

			['Virtual Server',		'virtual-machine',		actor_type, cloud_color],
			['Instance Group',		'',				actor_type, cloud_color],
		    ],

		    [
			['Compute Devices'],

			['Physical Server',		'archive',			actor_type, cloud_color],
			['Web Browser',			'terminal',			actor_type, cloud_color],
			['Mobile Device',		'mobile',			actor_type, cloud_color],
			['Tablet Device',		'tablet',			actor_type, cloud_color],
			['Laptop Device',		'laptop',			actor_type, cloud_color],
			['Desktop Computer',		'devices',			actor_type, cloud_color],
		    ],

		    [
			['Network'],

			['Floating IP',			'connect',			actor_type, cloud_color],
			['Transit Gateway',		'',				actor_type, cloud_color],
			['Endpoints',			'',				actor_type, cloud_color],
		    ],

		    [
			['Network Devices'],

			['Application Load Balancer',	'parent-child',			actor_type, cloud_color],
			['Network Load Balancer',	'parent-child',			actor_type, cloud_color],
			['Public Gateway',		'network--2',			actor_type, cloud_color],
			['Edge Node',			'edge-node',			actor_type, cloud_color],
		    ],

		    [
			['Security'],

			['VPN',				'VPN'	,			actor_type, security_color],
			['VPN Policy',			'policy',			actor_type, security_color],
			['Identity and Access Manager',	'fingerprint-recognition',	actor_type, security_color],
			['Credentials',			'credentials',			actor_type, security_color],
			['Rule',			'rule',				actor_type, security_color],
		    ],

		    [
			['Security Devices'],

			['VPN Gateway',			'',				actor_type, security_color],
		    ],

		    [
			['Storage'],

			['Object Storage Accessor',	'',				actor_type, cloud_color],
			['Object Storage Slicestor',	'',				actor_type, cloud_color],
		    ],

		    [
			['Storage Devices'],

			['Block Storage',		'',				actor_type, cloud_color],
			['File Storage',		'',				actor_type, cloud_color],
			['Object Storage',		'object-storage',		actor_type, cloud_color],
		    ],

		    [
			['Users'],

			['User',			'user',				actor_type, user_color],
			['Users',			'group',			actor_type, user_color],
			['Events',			'events',			actor_type, user_color],
			['Collaborate',			'collaborate',			actor_type, user_color],
		    ],
		];

		function createVertex(stencil)
		{
			var shapeName = stencil[0];
			var iconName = stencil[1];
			var shapeType = stencil[2];
			var shapeColor = stencil[3];

			var w = (iconType == actor_type) ? actor_width : group_width;
			var h = (iconType == actor_type) ? actor_height : group_height;

			var extraStyle = '';
			var useName = '';
			var shapeLayout = '';
			var shapeId = '';

			if (shapeType == actor_type)
			{
				useName = '';
				shapeLayout = 'collapsed';				
				extraStyle = ';colorFamily=' + shapeColor;
			}
			else
			{
				useName = shapeName;
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

			var bg = Sidebar.prototype.addIBM2MondrianVertexTemplateFactoryPlus(shapeType, shapeLayout, extraStyle, shapeId, useName, iconName);
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
