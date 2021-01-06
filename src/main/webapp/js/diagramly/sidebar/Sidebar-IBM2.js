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

		var gn = 'mxgraph.ibm2mondrian';
		var dt = 'ibm ';

		this.setCurrentSearchEntryLibrary('ibm2', 'ibm2Groups');

		function createVertex(name, icon_type, icon_color, icon_name, set_name)
		{
			var w = (icon_type == actor_type) ? actor_width : group_width;
			var h = (icon_type == actor_type) ? actor_height : group_height;
			var default_icon = '';
			var container_text = '';

			if (icon_type == group_type)
			{
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

		this.addPaletteFunctions('ibm2', 'IBM 2.0 / Groups', false,
		[
			// Cloud groups
			this.addEntry(dt + 'cloud header', function() { return createVertex('Cloud Groups', actor_type, section_color, 'ibm-cloud', true) }),
			this.addEntry(dt + 'ibm cloud', function() { return createVertex('IBM Cloud', group_type, cloud_color, 'ibm-cloud', true) }),
			this.addEntry(dt + 'region', function() { return createVertex('Region', group_type, location_color, 'flag', true) }),
			this.addEntry(dt + 'region alt', function() { return createVertex('Region', group_type, location_color, 'location', true) }),
			this.addEntry(dt + 'zone', function() { return createVertex('Zone', group_type, location_color, '', true) }),
			this.addEntry(dt + 'cloud services', function() { return createVertex('Cloud Services', group_type, cloud_color, '', true) }),
			this.addEntry(dt + 'classic', function() { return createVertex('Classic Infrastructure', group_type, cloud_color, '', true) }),
			this.addEntry(dt + 'account', function() { return createVertex('Account', group_type, account_color, 'user', true) }),
			this.addEntry(dt + 'access', function() { return createVertex('Access Group', group_type, account_color, 'credentials', true) }),
			this.addEntry(dt + 'resource', function() { return createVertex('Resource Group', group_type, account_color, 'collaborate', true) }),

			// VPC groups 
			this.addEntry(dt + 'vpc header', function() { return createVertex('VPC Groups', actor_type, section_color, 'virtual-private-cloud', true) }),
			this.addEntry(dt + 'vpc', function() { return createVertex('VPC', group_type, cloud_color, 'virtual-private-cloud', true) }),
			this.addEntry(dt + 'subnet', function() { return createVertex('Subnet:ACL', group_type, vpc_color, '', true) }),
			this.addEntry(dt + 'instance', function() { return createVertex('Virtual Server', group_type, vpc_color, 'virtual-machine', true) }),
			this.addEntry(dt + 'instance group', function() { return createVertex('Instance Group', group_type, vpc_color, '', true) }),
			this.addEntry(dt + 'bare metal', function() { return createVertex('Bare Metal', group_type, vpc_color, '', true) }),
			this.addEntry(dt + 'endpoints', function() { return createVertex('Endpoints', group_type, vpc_color, '', true) }),
			this.addEntry(dt + 'security group', function() { return createVertex('Security Group', group_type, security_color, 'security', true) }),

			// Kubernetes groups 
			this.addEntry(dt + 'kube header', function() { return createVertex('Kubernetes Groups', actor_type, section_color, '', true) }),
			this.addEntry(dt + 'ibm kube', function() { return createVertex('IBM Kubernetes Cluster', group_type, cloud_color, '', true) }),
			this.addEntry(dt + 'general kube', function() { return createVertex('General Kubernetes Cluster', group_type, cloud_color, '', true) }),
			this.addEntry(dt + 'openshift', function() { return createVertex('OpenShift Cluster', group_type, cloud_color, '', true) }),
			this.addEntry(dt + 'kube services', function() { return createVertex('Kubernetes Services', group_type, kube_color, '', true) }),
			this.addEntry(dt + 'replica set', function() { return createVertex('Kubernetes Replica Set', group_type, kube_color, '', true) }),
			this.addEntry(dt + 'pod', function() { return createVertex('Kubernetes Pod', group_type, kube_color, '', true) }),
			this.addEntry(dt + 'namespace', function() { return createVertex('Kubernetes Namespace', group_type, account_color, '', true) }),
			this.addEntry(dt + 'foundry', function() { return createVertex('Cloud Foundry', group_type, kube_color, '', true) }),

			// Network groups 
			this.addEntry(dt + 'network header', function() { return createVertex('Network Groups', actor_type, section_color, '', true) }),
			this.addEntry(dt + 'public', function() { return createVertex('Public Network', group_type, network_color, 'events', true) }),
			this.addEntry(dt + 'enterprise', function() { return createVertex('Enterprise Network', group_type, network_color, 'enterprise', true) }),
			this.addEntry(dt + 'datacenter', function() { return createVertex('Data Center', group_type, network_color, '', true) }),
			this.addEntry(dt + 'pop', function() { return createVertex('Point of Presence', group_type, network_color, '', true) }),
			this.addEntry(dt + 'overlay', function() { return createVertex('Overlay Network', group_type, network_color, '', true) }),
			this.addEntry(dt + 'vlan', function() { return createVertex('VLAN', group_type, network_color, '', true) }),
		]);

		this.addPaletteFunctions('ibm2', 'IBM 2.0 / Compute', false,
		[
			this.addEntry(dt + 'vsi', function() { return createVertex('Virtual Server', actor_type, cloud_color, 'virtual-machine', false) }),
		]);

		this.addPaletteFunctions('ibm2', 'IBM 2.0 / Compute Devices', false,
		[
			this.addEntry(dt + 'baremetal', function() { return createVertex('Bare Metal Server', actor_type, cloud_color, '', false) }),
			this.addEntry(dt + 'browser', function() { return createVertex('Web Browser', actor_type, cloud_color, 'terminal', false) }),
			this.addEntry(dt + 'mobiledevice', function() { return createVertex('Mobile Device', actor_type, cloud_color, 'mobile', false) }),
		]);

		this.addPaletteFunctions('ibm2', 'IBM 2.0 / Network', false,
		[
			this.addEntry(dt + 'fip', function() { return createVertex('Floating IP', actor_type, cloud_color, 'connect', false) }),
			this.addEntry(dt + 'transitgateway', function() { return createVertex('Transit Gateway', actor_type, cloud_color, '', false) }),
			this.addEntry(dt + 'endpoints', function() { return createVertex('VPC Endpoints', actor_type, cloud_color, '', false) }),
		]);

		this.addPaletteFunctions('ibm2', 'IBM 2.0 / Network Devices', false,
		[
			this.addEntry(dt + 'alb', function() { return createVertex('Application Load Balancer', actor_type, cloud_color, 'fork', false) }),
			this.addEntry(dt + 'nlb', function() { return createVertex('Network Load Balancer', actor_type, cloud_color, 'share', false) }),
			this.addEntry(dt + 'networkgateway', function() { return createVertex('Network Gateway', actor_type, cloud_color, 'network--2', false) }),
			this.addEntry(dt + 'edgenode', function() { return createVertex('Edge Node', actor_type, cloud_color, 'edge-node', false) }),
		]);

		this.addPaletteFunctions('ibm2', 'IBM 2.0 / Security', false,
		[
			this.addEntry(dt + 'iam', function() { return createVertex('Identity and Access Manager', actor_type, security_color, 'fingerprint-recognition', false) }),
			this.addEntry(dt + 'rules', function() { return createVertex('Rules', actor_type, security_color, 'rule', false) }),
			this.addEntry(dt + 'vpn', function() { return createVertex('VPN', actor_type, security_color, 'VPN', false) }),
			this.addEntry(dt + 'vpnpolicy', function() { return createVertex('VPN Policy', actor_type, security_color, 'policy', false) }),
		]);

		this.addPaletteFunctions('ibm2', 'IBM 2.0 / Security Devices', false,
		[
			this.addEntry(dt + 'vpngateway', function() { return createVertex('VPN Gateway', actor_type, security_color, '', false) }),
		]);

		this.addPaletteFunctions('ibm2', 'IBM 2.0 / Storage', false,
		[
			this.addEntry(dt + 'objectaccessor', function() { return createVertex('Object Storage Accessor', actor_type, cloud_color, '', false) }),
			this.addEntry(dt + 'objectslicestor', function() { return createVertex('Object Storage Slicestor', actor_type, cloud_color, '', false) }),
		]);

		this.addPaletteFunctions('ibm2', 'IBM 2.0 / Storage Devices', false,
		[
			this.addEntry(dt + 'blockstorage', function() { return createVertex('Block Storage', actor_type, cloud_color, '', false) }),
			this.addEntry(dt + 'filestorage', function() { return createVertex('File Storage', actor_type, cloud_color, '', false) }),
			this.addEntry(dt + 'objectstorage', function() { return createVertex('Object Storage', actor_type, cloud_color, 'object-storage', false) }),
		]);

		this.addPaletteFunctions('ibm2', 'IBM 2.0 / Users', false,
		[
			this.addEntry(dt + 'user', function() { return createVertex('User', actor_type, user_color, 'user', false) }),
			this.addEntry(dt + 'group', function() { return createVertex('Group', actor_type, user_color, 'group', false) }),
			this.addEntry(dt + 'events', function() { return createVertex('Events', actor_type, user_color, 'events', false, false) }),
			this.addEntry(dt + 'credentials', function() { return createVertex('Credentials', actor_type, user_color, 'credentials', false) }),
			this.addEntry(dt + 'collaborate', function() { return createVertex('Collaborate', actor_type, user_color, 'collaborate', false) }),
		]);

		this.setCurrentSearchEntryLibrary();
	};
})();
