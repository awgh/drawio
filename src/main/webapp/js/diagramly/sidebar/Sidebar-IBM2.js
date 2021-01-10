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

		this.setCurrentSearchEntryLibrary('ibm2', 'ibm2Mondrian');

		var entries = [];
		entries.push(this.addEntry(dt + 'tn', function() { return createVertex('Mondrian', actor_type, '', '') }));

		this.addPaletteFunctions('ibm2', 'IBM 2.0 /4/ Mondrian', false, entries);
		
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
		
		this.setCurrentSearchEntryLibrary();
	};
})();
