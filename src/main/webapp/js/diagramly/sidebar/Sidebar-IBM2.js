(function()
{
	Sidebar.prototype.addIBM2Palette = function()
	{
		var w = 240;
		var h = 48;

		var gn = 'mxgraph.ibm2mondrian';
		var dt = 'ibm ';

		var internal_version = 'ibm2';
		var external_version = 'IBM 2.0';

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
		var named_actors = 'Cloud Groups, VPC Groups, Kubernetes Groups, Network Groups';

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

			['User',			'user',				actor_type, security_color],
			['Users',			'group',			actor_type, security_color],
			['Events',			'events',			actor_type, security_color],
			['Collaborate',			'collaborate',			actor_type, security_color],
		    ],
		];

		function createVertex(name, icon_name, icon_type, icon_color)
		{
			var w = (icon_type == actor_type) ? actor_width : group_width;
			var h = (icon_type == actor_type) ? actor_height : group_height;
			var default_icon = '';
			var container_text = '';
			var set_name = false;

			if (icon_type == actor_type)
			{
				set_name = named_actors.includes(name);
			}
			else
			{
				set_name = true;

				if (spanning_groups.includes(name))
				{
					container_text = 'container=0;collapsible=0;recursiveResize=0;';
				}
				else 
				{
					container_text = 'container=1;collapsible=0;recursiveResize=0;';
				}
			}

			var shape_type = 'shapeType=' + icon_type;
			var other_label = 'metaEdit=0;strokeWidth=1'; 
			var style_text = 'html=1;whiteSpace=wrap;fontFamily=IBM Plex Sans;fontColor=#000000;fontSize=14;verticalAlign=middle;align=left;spacing=8;spacingLeft=12;spacingRight=16;spacingTop=0;spacingBottom=0';

			var bg = new mxCell('', new mxGeometry(0, 0, w, h), "shape=" + gn + ".base" + ";" + shape_type + ";" + style_text + ";" + other_label + ";" + "colorFamily=" + icon_color + ";" + container_text + "image=" + default_icon + ";");
	    		bg.vertex = true;
	    		bg.setValue(mxUtils.createXmlDocument().createElement('object'));
			bg.setAttribute('placeholders', '1');
			bg.setAttribute('label', '<B>%Element-Name%</B><BR><font style=\'font-size: 12px\'>%Element-ID%</font>');
               		bg.setAttribute('Element-ID', '');
			bg.setAttribute('Element-Name', (set_name ? name : ''));
			bg.setAttribute('Icon-Name', icon_name);
	   		return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, name);
		};

		//this.setCurrentSearchEntryLibrary('ibm2', 'ibm2Mondrian');

		stencils.forEach((section, stencil_index) => {
			var header = '';
			var entries = [];
			// (stencil_index == 0)
				section.forEach((stencil, section_index) => {
					if (section_index == 0)
					{
						header = stencil[0];
					}
					else
					{
						entries.push(this.addEntry(dt + 'tn', function() { return createVertex(stencil[0], stencil[1], stencil[2], stencil[2]) }));
					}
				});
				this.setCurrentSearchEntryLibrary('ibm2', 'ibm2Mondrian');
				this.addPaletteFunctions('ibm2', 'IBM 2.0 /9/ ' + header, false, entries);
		});

		this.setCurrentSearchEntryLibrary();

		//entries.push(this.addEntry(dt + 'tn', function() { return createVertex('Mondrian', actor_type, '', '') }));

		//this.addPaletteFunctions('ibm2', 'IBM 2.0 /5/ Mondrian', false, entries);
		
  		/*		
		this.addPaletteFunctions('ibm2', 'IBM 2.0 /3/ Mondrian', false,
		[
			this.addEntry(dt + 'tn', function()
		   	{
				var default_icon = '';
				var shape_type = 'shapeType=pn';
				var other_label = 'metaEdit=0;strokeWidth=1';
				var style_text = 'html=1;whiteSpace=wrap;fontFamily=IBM Plex Sans;fontColor=#000000;fontSize=14;verticalAlign=middle;align=left;spacing=8;spacingLeft=12;spacingRight=16;spacingTop=0;spacingBottom=0'
			    var bg = new mxCell('', 
			    		new mxGeometry(0, 0, w, h), "shape=" + gn + ".base" + ";" + shape_type + ";" + style_text + ";" + other_label + ";" + "image=" + default_icon);
		    	bg.vertex = true;
		    	bg.setValue(mxUtils.createXmlDocument().createElement('object'));
				bg.setAttribute('placeholders', '1');
				bg.setAttribute('label', '<B>%Element-Name%</B><BR><font style=\'font-size: 12px\'>%Element-ID%</font>');
                bg.setAttribute('Element-ID', 'Element-ID');
				bg.setAttribute('Element-Name', 'Element-Name');
				bg.setAttribute('Icon-Name', '');
			    
			   	return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, 'BASE');
			})				
		]);
		*/
		
		//this.setCurrentSearchEntryLibrary();
	};
})();
