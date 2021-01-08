(function()
{
	Sidebar.prototype.addIBM2Palette = function()
	{
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
		   ['Groups', [
			['Cloud Groups',		'ibm-cloud',			actor_type, section_color],
			['IBM Cloud',			'ibm-cloud',			group_type, cloud_color],
			['Region',			'flag',				group_type, cloud_color],
			['Region Alt',			'location',			group_type, cloud_color],
			['Zone',			'',				group_type, cloud_color],
			['Cloud Services',		'',				group_type, cloud_color],
			['Classic Infrastructure',	'',				group_type, cloud_color],
			['Account',			'user',				group_type, cloud_color],
			['Access Group',		'credentials',			group_type, cloud_color],
			['Resource Group',		'collaborate',			group_type, cloud_color],

			['VPC Groups',			'virtual-private-cloud',	actor_type, section_color],
			['VPC',				'virtual-private-cloud',	group_type, cloud_color],
			['Subnet:ACL',			'',				group_type, cloud_color],
			['Virtual Server',		'virtual-machine',		group_type, cloud_color],
			['Instance Group',		'',				group_type, cloud_color],
			['Physical Server',		'',				group_type, cloud_color],
			['Endpoints',			'',				group_type, cloud_color],
			['Security Group',		'security',			group_type, cloud_color],

			['Kubernetes Groups',		'',				actor_type, section_color],
			['Kubernetes Cluster',		'',				group_type, cloud_color],
			['OpenShift Cluster',		'',				group_type, cloud_color],
			['Kubernetes Services',		'',				group_type, cloud_color],
			['Kubernetes Replica Set',	'',				group_type, cloud_color],
			['Kubernetes Pod',		'',				group_type, cloud_color],
			['Kubernetes Namespace',	'',				group_type, cloud_color],

			['Network Groups',		'',				actor_type, section_color],
			['Public Network',		'events',			group_type, cloud_color],
			['Enterprise Network',		'enterprise',			group_type, cloud_color],
			['Data Center',			'',				group_type, cloud_color],
			['Point of Presence',		'',				group_type, cloud_color],
			['Overlay Network',		'',				group_type, cloud_color],
			['VLAN',			'',				group_type, cloud_color],
		   ]],
		];

		var internal_version = 'ibm2';
		var external_version = 'IBMIBM 2.0';

		var gn = 'mxgraph.ibm2mondrian';
		var dt = 'ibm ';

		this.setCurrentSearchEntryLibrary('ibm2', 'ibm2Groups');

		function createVertex(name, icon_type, icon_color, icon_name)
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

		stencils.forEach((section) => {
			section.forEach((stencil) => {
				var items = stencil.pop();
				console.log(items);
				//stencil.forEach((item) => {
				//	console.log(item);
				//});
				//console.log(stencil)
				//var header = stencil[0];
				//var items = stencil[1];
				var entries = [];
				//console.log(header);
				//console.log(items);

				//items.forEach((item) => {
				//	console.log(item);;
				//	//entries.push(this.addEntry(dt + item[0], function() { return createVertex(item[0], item[2], item[3], item[1]) }))
				//});

				//this.addPaletteFunctions(internal_version, external_version + ' / ' + header, false, entries);
			});
		});

		//this.addPaletteFunctions('ibm2', 'IBM 2.0 / Groups', false,
		//[
			// Cloud groups
		//	this.addEntry(dt + 'cloudheader', function() { return createVertex('Cloud Groups', actor_type, section_color, 'ibm-cloud') }),
		//	this.addEntry(dt + 'ibmcloudgroup', function() { return createVertex('IBM Cloud', group_type, cloud_color, 'ibm-cloud') }),
		//	this.addEntry(dt + 'regiongroup', function() { return createVertex('Region', group_type, location_color, 'flag') }),
		//	this.addEntry(dt + 'regiongroup alt', function() { return createVertex('Region', group_type, location_color, 'location') }),
		//	this.addEntry(dt + 'zonegroup', function() { return createVertex('Zone', group_type, location_color, '') }),
		//	this.addEntry(dt + 'cloudservicesgroup', function() { return createVertex('Cloud Services', group_type, cloud_color, '') }),
		//	this.addEntry(dt + 'classicgroup', function() { return createVertex('Classic Infrastructure', group_type, cloud_color, '') }),
		//	this.addEntry(dt + 'accountgroup', function() { return createVertex('Account', group_type, account_color, 'user') }),
		//	this.addEntry(dt + 'accessgroup', function() { return createVertex('Access Group', group_type, account_color, 'credentials') }),
		//	this.addEntry(dt + 'resourcegroup', function() { return createVertex('Resource Group', group_type, account_color, 'collaborate') }),

			// VPC groups 
		//	this.addEntry(dt + 'vpcheader', function() { return createVertex('VPC Groups', actor_type, section_color, 'virtual-private-cloud') }),
		//	this.addEntry(dt + 'vpcgroup', function() { return createVertex('VPC', group_type, cloud_color, 'virtual-private-cloud') }),
		//	this.addEntry(dt + 'subnetgroup', function() { return createVertex('Subnet:ACL', group_type, vpc_color, '') }),
		//	this.addEntry(dt + 'virtualservergroup', function() { return createVertex('Virtual Server', group_type, vpc_color, 'virtual-machine') }),
		//	this.addEntry(dt + 'autoscalinggroup', function() { return createVertex('Autoscaling', group_type, vpc_color, '') }),
		//	this.addEntry(dt + 'physicalservergroup', function() { return createVertex('Physical Server', group_type, vpc_color, '') }),
		//	this.addEntry(dt + 'endpointsgroup', function() { return createVertex('Endpoints', group_type, vpc_color, '') }),
		//	this.addEntry(dt + 'securitygroup', function() { return createVertex('Security Group', group_type, security_color, 'security') }),

			// Kubernetes groups 
		//	this.addEntry(dt + 'kubeheader', function() { return createVertex('Kubernetes Groups', actor_type, section_color, '') }),
		//	this.addEntry(dt + 'ibmkubegroup', function() { return createVertex('IBM Kubernetes Cluster', group_type, cloud_color, '') }),
		//	this.addEntry(dt + 'generalkubegroup', function() { return createVertex('General Kubernetes Cluster', group_type, cloud_color, '') }),
		//	this.addEntry(dt + 'openshiftgroup', function() { return createVertex('OpenShift Cluster', group_type, cloud_color, '') }),
		//	this.addEntry(dt + 'kubeservicesgroup', function() { return createVertex('Kubernetes Services', group_type, kube_color, '') }),
		//	this.addEntry(dt + 'replicasetgroup', function() { return createVertex('Kubernetes Replica Set', group_type, kube_color, '') }),
		//	this.addEntry(dt + 'podgroup', function() { return createVertex('Kubernetes Pod', group_type, kube_color, '') }),
		//	this.addEntry(dt + 'namespacegroup', function() { return createVertex('Kubernetes Namespace', group_type, account_color, '') }),
		//	this.addEntry(dt + 'foundrygroup', function() { return createVertex('Cloud Foundry', group_type, kube_color, '') }),

			// Network groups 
		//	this.addEntry(dt + 'networkheader', function() { return createVertex('Network Groups', actor_type, section_color, '') }),
		//	this.addEntry(dt + 'publicgroup', function() { return createVertex('Public Network', group_type, network_color, 'events') }),
		//	this.addEntry(dt + 'enterprisegroup', function() { return createVertex('Enterprise Network', group_type, network_color, 'enterprise') }),
		//	this.addEntry(dt + 'datacentergroup', function() { return createVertex('Data Center', group_type, network_color, '') }),
		//	this.addEntry(dt + 'popgroup', function() { return createVertex('Point of Presence', group_type, network_color, '') }),
		//	this.addEntry(dt + 'overlaygroup', function() { return createVertex('Overlay Network', group_type, network_color, '') }),
		//	this.addEntry(dt + 'vlangroup', function() { return createVertex('VLAN', group_type, network_color, '') }),
		//]);

		this.addPaletteFunctions('ibm2', 'IBM 2.0 / Compute', false,
		[
			this.addEntry(dt + 'virtualserver', function() { return createVertex('Virtual Server', actor_type, cloud_color, 'virtual-machine') }),
			this.addEntry(dt + 'autoscaling', function() { return createVertex('Autoscaling', actor_type, cloud_color, '') }),
		]);

		this.addPaletteFunctions('ibm2', 'IBM 2.0 / Compute Devices', false,
		[
			this.addEntry(dt + 'physicalserver', function() { return createVertex('Physical Server', actor_type, cloud_color, '') }),
			this.addEntry(dt + 'browser', function() { return createVertex('Web Browser', actor_type, cloud_color, 'terminal') }),
			this.addEntry(dt + 'mobiledevice', function() { return createVertex('Mobile Device', actor_type, cloud_color, 'mobile') }),
			this.addEntry(dt + 'tabletdevice', function() { return createVertex('Tablet Device', actor_type, cloud_color, 'tablet') }),
			this.addEntry(dt + 'laptopdevice', function() { return createVertex('Laptop Device', actor_type, cloud_color, 'laptop') }),
			this.addEntry(dt + 'devices', function() { return createVertex('Desktop Computer', actor_type, cloud_color, 'devices') }),
		]);

		this.addPaletteFunctions('ibm2', 'IBM 2.0 / Network', false,
		[
			this.addEntry(dt + 'fip', function() { return createVertex('Floating IP', actor_type, cloud_color, 'connect') }),
			this.addEntry(dt + 'transitgateway', function() { return createVertex('Transit Gateway', actor_type, cloud_color, '') }),
			this.addEntry(dt + 'endpoints', function() { return createVertex('Endpoints', actor_type, cloud_color, '') }),
		]);

		this.addPaletteFunctions('ibm2', 'IBM 2.0 / Network Devices', false,
		[
			this.addEntry(dt + 'alb', function() { return createVertex('Application Load Balancer', actor_type, cloud_color, 'parent-child') }),
			this.addEntry(dt + 'nlb', function() { return createVertex('Network Load Balancer', actor_type, cloud_color, 'parent-child') }),
			this.addEntry(dt + 'networkgateway', function() { return createVertex('Network Gateway', actor_type, cloud_color, 'network--2') }),
			this.addEntry(dt + 'edgenode', function() { return createVertex('Edge Node', actor_type, cloud_color, 'edge-node') }),
		]);

		this.addPaletteFunctions('ibm2', 'IBM 2.0 / Security', false,
		[
			this.addEntry(dt + 'vpn', function() { return createVertex('VPN', actor_type, security_color, 'VPN') }),
			this.addEntry(dt + 'vpnpolicy', function() { return createVertex('VPN Policy', actor_type, security_color, 'policy') }),
			this.addEntry(dt + 'iam', function() { return createVertex('Identity and Access Manager', actor_type, security_color, 'fingerprint-recognition') }),
			this.addEntry(dt + 'credentials', function() { return createVertex('Credentials', actor_type, security_color, 'credentials') }),
			this.addEntry(dt + 'rules', function() { return createVertex('Rules', actor_type, security_color, 'rule') }),
		]);

		this.addPaletteFunctions('ibm2', 'IBM 2.0 / Security Devices', false,
		[
			this.addEntry(dt + 'vpngateway', function() { return createVertex('VPN Gateway', actor_type, security_color, '') }),
		]);

		this.addPaletteFunctions('ibm2', 'IBM 2.0 / Storage', false,
		[
			this.addEntry(dt + 'objectaccessor', function() { return createVertex('Object Storage Accessor', actor_type, cloud_color, '') }),
			this.addEntry(dt + 'objectslicestor', function() { return createVertex('Object Storage Slicestor', actor_type, cloud_color, '') }),
		]);

		this.addPaletteFunctions('ibm2', 'IBM 2.0 / Storage Devices', false,
		[
			this.addEntry(dt + 'blockstorage', function() { return createVertex('Block Storage', actor_type, cloud_color, '') }),
			this.addEntry(dt + 'filestorage', function() { return createVertex('File Storage', actor_type, cloud_color, '') }),
			this.addEntry(dt + 'objectstorage', function() { return createVertex('Object Storage', actor_type, cloud_color, 'object-storage') }),
		]);

		this.addPaletteFunctions('ibm2', 'IBM 2.0 / Users', false,
		[
			this.addEntry(dt + 'user', function() { return createVertex('User', actor_type, user_color, 'user') }),
			this.addEntry(dt + 'users', function() { return createVertex('Users', actor_type, user_color, 'group') }),
			this.addEntry(dt + 'events', function() { return createVertex('Events', actor_type, user_color, 'events') }),
			this.addEntry(dt + 'collaborate', function() { return createVertex('Collaborate', actor_type, user_color, 'collaborate') }),
		]);

		this.setCurrentSearchEntryLibrary();
	};
})();
