(function()
{
	Sidebar.prototype.addIBM2Palette = function()
	{
		var actor = 'actor';

		var aw = 48;
		var ah = 48;

		var actor_style = 'shape=mxgraph.ibm2mondrian.base;shapeType=actor;html=1;whiteSpace=wrap;fontFamily=IBM Plex Sans;fontColor=#000000;fontSize=14;verticalAlign=middle;align=left;spacing=8;spacingLeft=12;spacingRight=16;spacingTop=0;spacingBottom=0;metaEdit=0;strokeWidth=1;'

		var group = 'group';

		var gw = 240;
		var gh = 240;

		var group_style = 'shape=mxgraph.ibm2mondrian.base;shapeType=group;html=1;whiteSpace=wrap;fontFamily=IBM Plex Sans;fontColor=#000000;fontSize=14;verticalAlign=middle;align=left;spacing=8;spacingLeft=12;spacingRight=16;spacingTop=0;spacingBottom=0;metaEdit=0;strokeWidth=1;container=1;collapsible=0;recursiveResize=0;';

		var accountColor = "colorFamily=gray;"
		var cloudColor = "colorFamily=blue;"
		var kubeColor = "colorFamily=purple;"
		var locationColor = "colorFamily=gray;"
		var networkColor = "colorFamily=green;"
		var sectionColor = "colorFamily=gray;"
		var securityColor = "colorFamily=red;"
		var userColor = "colorFamily=black;"
		var vpcColor = "colorFamily=green;"

		var gn = 'mxgraph.ibm2';
		var dt = 'ibm ';

		this.setCurrentSearchEntryLibrary('ibm2', 'ibm2Groups');

		function createVertex(name, type, color, icon, setname)
		{
			var w = (type == actor) ? aw : gw;
			var h = (type == actor) ? ag : gh;
			var style = (type == actor) ? actorStyle : groupStyle;

			var bg = new mxCell('', new mxGeometry(0, 0, w, h), style + color);
	    		bg.vertex = true;
	    		bg.setValue(mxUtils.createXmlDocument().createElement('object'));
			bg.setAttribute('placeholders', '1');
			bg.setAttribute('label', '<B>%Element-Name%</B><BR><font style=\'font-size: 12px\'>%Element-ID%</font>');
               		bg.setAttribute('Element-ID', '');
			bg.setAttribute('Element-Name', (setname ? name : ''));
			bg.setAttribute('Icon-Name', icon);
	   		return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, name);
		};

		this.addPaletteFunctions('ibm2', 'IBM 2.0 / Groups', false,
		[
			// Cloud groups
			this.addEntry(dt + 'cloud header', function() { return createVertex('Cloud Groups', actor, sectionColor, 'ibm-cloud', true) }),
			this.addEntry(dt + 'ibm cloud', function() { return createVertex('IBM Cloud', group, cloudColor, 'ibm-cloud', true) }),
			this.addEntry(dt + 'region', function() { return createVertex('Region', group, locationColor, 'flag', true) }),
			this.addEntry(dt + 'region alt', function() { return createVertex('Region', group, locationColor, 'location', true) }),
			this.addEntry(dt + 'zone', function() { return createVertex('Zone', group, locationColor, '', true) }),
			this.addEntry(dt + 'cloud services', function() { return createVertex('Cloud Services', group, cloudColor, '', true) }),
			this.addEntry(dt + 'classic', function() { return createVertex('Classic Infrastructure', group, cloudColor, '', true) }),
			this.addEntry(dt + 'account', function() { return createVertex('Account', group, accountColor, 'user', true) }),
			this.addEntry(dt + 'access', function() { return createVertex('Access Group', group, accountColor, 'credentials', true) }),
			this.addEntry(dt + 'resource', function() { return createVertex('Resource Group', group, accountColor, 'collaborate', true) }),

			// VPC groups 
			this.addEntry(dt + 'vpc header', function() { return createVertex('VPC Groups', actor, sectionColor, 'virtual-private-cloud', true) }),
			this.addEntry(dt + 'vpc', function() { return createVertex('VPC', group, cloudColor, 'virtual-private-cloud', true) }),
			this.addEntry(dt + 'subnet', function() { return createVertex('Subnet:ACL', group, vpcColor, '', true) }),
			this.addEntry(dt + 'instance', function() { return createVertex('Virtual Server', group, vpcColor, 'virtual-machine', true) }),
			this.addEntry(dt + 'instance group', function() { return createVertex('Instance Group', group, vpcColor, '', true) }),
			this.addEntry(dt + 'bare metal', function() { return createVertex('Bare Metal', group, vpcColor, '', true) }),
			this.addEntry(dt + 'endpoints', function() { return createVertex('Endpoints', group, vpcColor, '', true) }),
			this.addEntry(dt + 'security group', function() { return createVertex('Security Group', group, securityColor, 'security', true) }),

			// Kubernetes groups 
			this.addEntry(dt + 'kube header', function() { return createVertex('Kubernetes Groups', actor, sectionColor, '', true) }),
			this.addEntry(dt + 'ibm kube', function() { return createVertex('IBM Kubernetes Cluster', group, cloudColor, '', true) }),
			this.addEntry(dt + 'general kube', function() { return createVertex('General Kubernetes Cluster', group, cloudColor, '', true) }),
			this.addEntry(dt + 'openshift', function() { return createVertex('OpenShift Cluster', group, cloudColor, '', true) }),
			this.addEntry(dt + 'kube services', function() { return createVertex('Kubernetes Services', group, kubeColor, '', true) }),
			this.addEntry(dt + 'replica set', function() { return createVertex('Kubernetes Replica Set', group, kubeColor, '', true) }),
			this.addEntry(dt + 'pod', function() { return createVertex('Kubernetes Pod', group, kubeColor, '', true) }),
			this.addEntry(dt + 'namespace', function() { return createVertex('Kubernetes Namespace', group, accountColor, '', true) }),
			this.addEntry(dt + 'foundry', function() { return createVertex('Cloud Foundry', group, kubeColor, '', true) }),

			// Network groups 
			this.addEntry(dt + 'network header', function() { return createVertex('Network Groups', actor, sectionColor, '', true) }),
			this.addEntry(dt + 'public', function() { return createVertex('Public Network', group, networkColor, 'events', true) }),
			this.addEntry(dt + 'enterprise', function() { return createVertex('Enterprise Network', group, networkColor, 'enterprise', true) }),
			this.addEntry(dt + 'datacenter', function() { return createVertex('Data Center', group, networkColor, '', true) }),
			this.addEntry(dt + 'pop', function() { return createVertex('Point of Presence', group, networkColor, '', true) }),
			this.addEntry(dt + 'overlay', function() { return createVertex('Overlay Network', group, networkColor, '', true) }),
			this.addEntry(dt + 'vlan', function() { return createVertex('VLAN', group, networkColor, '', true) }),
		]);

		this.addPaletteFunctions('ibm2', 'IBM 2.0 / Users', false,
		[
			this.addEntry(dt + 'user', function() { return createVertex('User', actor, userColor, 'user', false) }),
			this.addEntry(dt + 'events', function() { return createVertex('Events', actor, userColor, 'events', false, false) }),
			this.addEntry(dt + 'credentials', function() { return createVertex('Credentials', actor, userColor, 'credentials', false) }),
			this.addEntry(dt + 'collaborate', function() { return createVertex('Collaborate', actor, userColor, 'collaborate', false) }),
		]);

		this.setCurrentSearchEntryLibrary();
	};
})();
