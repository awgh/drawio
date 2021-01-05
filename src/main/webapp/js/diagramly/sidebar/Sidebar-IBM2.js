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

		var actorUserColor = "colorFamily=black;"

		var groupAccountColor = "colorFamily=gray;"
		var groupCloudColor = "colorFamily=blue;"
		var groupNetworkColor = "colorFamily=green;"
		var groupSecurityColor = "colorFamily=red;"
		var groupSectionColor = "colorFamily=gray;"

		var actor_style = 'shape=mxgraph.ibm2mondrian.base;shapeType=actor;html=1;whiteSpace=wrap;fontFamily=IBM Plex Sans;fontColor=#000000;fontSize=14;verticalAlign=middle;align=left;spacing=8;spacingLeft=12;spacingRight=16;spacingTop=0;spacingBottom=0;metaEdit=0;strokeWidth=1;'

		var group_style = 'shape=mxgraph.ibm2mondrian.base;shapeType=group;html=1;whiteSpace=wrap;fontFamily=IBM Plex Sans;fontColor=#000000;fontSize=14;verticalAlign=middle;align=left;spacing=8;spacingLeft=12;spacingRight=16;spacingTop=0;spacingBottom=0;metaEdit=0;strokeWidth=1;container=1;collapsible=0;recursiveResize=0;';

		this.setCurrentSearchEntryLibrary('ibm2', 'ibm2Groups');

		function createActorVertex(name, color, icon, setname)
		{
			var bg = new mxCell('', new mxGeometry(0, 0, aw, ah), actor_style + color);
	    		bg.vertex = true;
	    		bg.setValue(mxUtils.createXmlDocument().createElement('object'));
			bg.setAttribute('placeholders', '1');
			bg.setAttribute('label', '<B>%Element-Name%</B><BR><font style=\'font-size: 12px\'>%Element-ID%</font>');
               		bg.setAttribute('Element-ID', '');
			bg.setAttribute('Element-Name', (setname ? name : ''));
			bg.setAttribute('Icon-Name', icon);
	   		return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, name);
		};

		function createGroupVertex(name, color, icon, setname)
		{
			var bg = new mxCell('', new mxGeometry(0, 0, gw, gh), group_style + color);
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
			this.addEntry(dt + 'cloud header', function() { return createActorVertex('Cloud Groups', groupSectionColor, 'ibm-cloud', true) }),
			this.addEntry(dt + 'ibm cloud', function() { return createGroupVertex('IBM Cloud', groupCloudColor, 'ibm-cloud', true) }),
			this.addEntry(dt + 'region', function() { return createGroupVertex('Region', groupAccountColor, 'flag', true) }),
			this.addEntry(dt + 'region alt', function() { return createGroupVertex('Region', groupAccountColor, 'location', true) }),
			this.addEntry(dt + 'zone', function() { return createGroupVertex('Zone', groupAccountColor, 'enterprise', true) }),
			this.addEntry(dt + 'datacenter', function() { return createGroupVertex('Data Center', groupAccountColor, 'enterprise', true) }),
			this.addEntry(dt + 'public', function() { return createGroupVertex('Public Network', groupCloudColor, 'events', true) }),
			this.addEntry(dt + 'enterprise', function() { return createGroupVertex('Enterprise Network', groupCloudColor, 'enterprise', true) }),
			this.addEntry(dt + 'classic', function() { return createGroupVertex('Classic Infrastructure', groupCloudColor, '', true) }),
			this.addEntry(dt + 'cloud services', function() { return createGroupVertex('Cloud Services', groupCloudColor, '', true) }),
			this.addEntry(dt + 'account', function() { return createGroupVertex('Account', groupAccountColor, 'user', true) }),
			this.addEntry(dt + 'access', function() { return createGroupVertex('Access Group', groupAccountColor, 'credentials', true) }),
			this.addEntry(dt + 'resource', function() { return createGroupVertex('Resource Group', groupAccountColor, 'collaborate', true) }),

			// VPC groups 
			this.addEntry(dt + 'vpc header', function() { return createActorVertex('VPC Groups', groupSectionColor, 'virtual-private-cloud', true) }),
			this.addEntry(dt + 'vpc', function() { return createGroupVertex('VPC', groupCloudColor, 'virtual-private-cloud', true) }),
			this.addEntry(dt + 'subnet', function() { return createGroupVertex('Subnet:ACL', groupNetworkColor, 'virtual-private-cloud', true) }),
			this.addEntry(dt + 'vs', function() { return createGroupVertex('Virtual Server', groupNetworkColor, 'virtual-machine', true) }),
			this.addEntry(dt + 'endpoints', function() { return createGroupVertex('Endpoints', groupNetworkColor, '', true) }),
			this.addEntry(dt + 'ig', function() { return createGroupVertex('Instance Group', groupNetworkColor, '', true) }),
			this.addEntry(dt + 'sg', function() { return createGroupVertex('Security Group', groupSecurityColor, 'security', true) }),

			// Kubernetes groups 
			this.addEntry(dt + 'kube header', function() { return createActorVertex('Kubernetes Groups', groupSectionColor, 'ibm-cloud', true) }),
			this.addEntry(dt + 'ibm kube', function() { return createGroupVertex('IBM Kubernetes Cluster', groupCloudColor, '', true) }),
			this.addEntry(dt + 'general kube', function() { return createGroupVertex('General Kubernetes Cluster', groupCloudColor, '', true) }),
			this.addEntry(dt + 'openshift', function() { return createGroupVertex('OpenShift Cluster', groupCloudColor, '', true) }),
			this.addEntry(dt + 'kube services', function() { return createGroupVertex('Kubernetes Services', groupCloudColor, '', true) }),
			this.addEntry(dt + 'kube rs', function() { return createGroupVertex('Kubernetes Replica Set', groupCloudColor, '', true) }),
			this.addEntry(dt + 'kube pod', function() { return createGroupVertex('Kubernetes Pod', groupCloudColor, '', true) }),
			this.addEntry(dt + 'kube ns', function() { return createGroupVertex('Kubernetes Namespace', groupAccountColor, '', true) }),
		]);

		this.addPaletteFunctions('ibm2', 'IBM 2.0 / Users', false,
		[
			this.addEntry(dt + 'user', function() { return createActorVertex('User', actorUserColor, 'user', false) }),
			this.addEntry(dt + 'events', function() { return createActorVertex('Events', actorUserColor, 'events', false) }),
			this.addEntry(dt + 'credentials', function() { return createActorVertex('Credentials', actorUserColor, 'credentials', false) }),
			this.addEntry(dt + 'collaborate', function() { return createActorVertex('Collaborate', actorUserColor, 'collaborate', false) }),
		]);

		this.setCurrentSearchEntryLibrary();
	};
})();
