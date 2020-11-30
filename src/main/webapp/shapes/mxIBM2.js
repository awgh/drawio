/**
 * $Id: mxIBM.js,v 1.0 2018/08/21 13:05:39 mate Exp $
 * Copyright (c) 2006-2020, JGraph Ltd
 */

//**********************************************************************************************************************************************************
//Box
//**********************************************************************************************************************************************************
/**
* Extends mxShape.
*/
function mxShapeIBM2Box(bounds, fill, stroke, strokewidth)
{
	mxShape.call(this);
	this.bounds = bounds;
	this.fill = fill;
	this.stroke = stroke;
	this.strokewidth = (strokewidth != null) ? strokewidth : 1;
};

/**
* Extends mxShape.
*/
mxUtils.extend(mxShapeIBM2Box, mxShape);

mxShapeIBM2Box.prototype.cst = {
		IBM_BOX : 'mxgraph.ibm2.box'
};

mxShapeIBM2Box.prototype.customProperties = [
	{name: 'boxType', dispName: 'Box Type', defVal: 'cloud-ibm', type: 'enum', 
		enumList: [
			   // Cloud Boxes
			   {val: 'cloud-ibm', dispName: 'IBM Cloud'}, 
			   {val: 'cloud-region', dispName: 'Region'}, 
			   {val: 'cloud-zone', dispName: 'Zone'}, 
			   {val: 'cloud-public', dispName: 'Public Network'}, 
			   {val: 'cloud-enterprise', dispName: 'Enterprise Network'}, 
			   {val: 'cloud-classic', dispName: 'Classic Infrastructure'},
			   {val: 'cloud-services', dispName: 'Cloud Services'},
			   {val: 'cloud-foundry', dispName: 'Cloud Foundry'},
                           {val: 'cloud-accessgroup', dispName: 'Access Group'},
                           {val: 'cloud-accountgroup', dispName: 'Account Group'},
                           {val: 'cloud-resourcegroup', dispName: 'Resource Group'},

			   // VPC Boxes
			   {val: 'vpc-ibm', dispName: 'VPC'}, 
			   {val: 'vpc-subnet', dispName: 'Subnet:ACL'}, 
                           {val: 'vpc-virtualserver', dispName: 'Virtual Server'},
                           {val: 'vpc-baremetal', dispName: 'Bare Metal Server'},
                           {val: 'vpc-endpoints', dispName: 'Endpoints'},
                           {val: 'vpc-instancegroup', dispName: 'Instance Group'},
                           {val: 'vpc-securitygroup', dispName: 'Security Group'},

			   // Kube Boxes
                           {val: 'kube-ibm', dispName: 'IBM Kubernetes Cluster'},
                           {val: 'kube-general', dispName: 'General Kubernetes Cluster'},
                           {val: 'kube-openshift', dispName: 'OpenShift Cluster'},
                           {val: 'kube-services', dispName: 'Kubernetes Services'},
                           {val: 'kube-replicaset', dispName: 'Kubernetes Replica Set'},
                           {val: 'kube-pod', dispName: 'Kubernetes Pod'},
                           {val: 'kube-namespacegroup', dispName: 'Kubenetes Namespace Group'},

			   // Network Boxes
                           {val: 'network-pop', dispName: 'Point of Presence'},
                           {val: 'network-datacenter', dispName: 'Data Center'},
                           {val: 'network-overlay', dispName: 'Overlay Network'},
                           {val: 'network-vlan', dispName: 'VLAN'},
                           {val: 'network-server', dispName: 'Server Content'},
                           {val: 'network-general', dispName: 'General Content'},
                           {val: 'network-other', dispName: 'Other Content'},

			   // Other Boxes
                           {val: 'other-logicalcomponent', dispName: 'Logical Component'},
                           {val: 'other-prescribedcomponent', dispName: 'Prescribed Component'},
                           {val: 'other-logicalnode', dispName: 'Logical Node'},
                           {val: 'other-prescribednode', dispName: 'Prescribed Node'}
			  ]},

	{name: 'boxKind', dispName: 'Box Kind', defVal: 'none', type: 'enum', 
		enumList: [
			   {val: 'logicalcomponent', dispName: 'Logical Component'}, 
			   {val: 'prescribedcomponent', dispName: 'Prescribed Component'}, 
			   {val: 'logicalnode', dispName: 'Logical Node'}, 
			   {val: 'prescribednode', dispName: 'Prescribed Node'},
			   {val: 'targetsystem', dispName: 'Target System'}, 
			   {val: 'none', dispName: 'None'} 
			  ]},

	{name: 'boxIcon', dispName: 'Box Icon', defVal: 'topleft', type: 'enum', 
		enumList: [
			   {val: 'topleft', dispName: 'Top Left'}, 
			   {val: 'topmiddle', dispName: 'Top Middle'}, 
			   {val: 'topright', dispName: 'Top Right'},
			   {val: 'none', dispName: 'None'} 
			  ]},

	{name: 'boxBar', dispName: 'Box Bar', devVal: false, type: 'bool'},

	{name: 'boxLane', dispName: 'Box Lane', defVal: false, type: 'bool'}
];

/**
* Function: paintVertexShape
* 
* Paints the vertex shape.
*/
mxShapeIBM2Box.prototype.paintVertexShape = function(c, x, y, w, h)
{
	c.translate(x, y);
	
	c.begin();

	var filler = 12;

	var xoffset = 0;
	var yoffset = 0;

	var wsize = 24;
	var hsize = 24;

	var boxKind = mxUtils.getValue(this.state.style, 'boxKind', 'none');

	var boxBar = mxUtils.getNumber(this.state.style, 'boxBar', 0);

	var boxIcon = mxUtils.getValue(this.state.style, 'boxIcon', 'topleft');

	var boxLane = mxUtils.getValue(this.state.style, 'boxLane', 0);

	var rounded = mxUtils.getNumber(this.state.style, 'rounded', 0);

	if (boxKind == 'targetsystem')
	{
		// Need to implement.
	}
	else if (rounded == 1)
	{
		c.roundrect(0, 0, w, h, 16)

		// Need to implement rounded corners or include with square box below.
	}
	else
	{
		//c.rect(0, 0, w, h);
		
		if (boxKind == 'logicalcomponent' || boxKind == 'prescribedcomponent')
		{
			// Draw top, right, and bottom sides.
			c.moveTo(0, 0);
			c.lineTo(w, 0);
			c.lineTo(w, h);
			c.lineTo(0, h);

			// Draw left side leaving spaces for two tabs.
			c.moveTo(0, 0);
			c.lineTo(0, filler);
			c.moveTo(0, filler+6);
			c.lineTo(0, filler+18);
			c.moveTo(0, filler+24);
			c.lineTo(0, h);

			// Draw first tab.
			c.moveTo(-6, filler);
			c.lineTo(6, filler);
			c.lineTo(6, filler+6);
			c.lineTo(-6, filler+6);
			c.lineTo(-6, filler);

			// Draw second tab.
			c.moveTo(-6, filler+18);
			c.lineTo(6, filler+18);
			c.lineTo(6, filler+24);
			c.lineTo(-6, filler+24);
			c.lineTo(-6, filler+18);
		}
		else 
		{
			// Draw all four sides.
			c.moveTo(0, 0);
			c.lineTo(w, 0);
			c.lineTo(w, h);
			c.lineTo(0, h);
			c.lineTo(0, 0);

			if (boxBar == 1)
			{
				// Draw color bar.
				c.moveTo(1, 0);
				c.lineTo(1, 48);
				c.moveTo(2, 0);
				c.lineTo(2, 48);
				c.moveTo(3, 0);
				c.lineTo(3, 48);
			}
		}

		// Determine tag position.
		switch (boxIcon)
		{
			case 'topleft':
				xoffset = 12;
				yoffset = 12;
				break;
			case 'topmiddle':
				xoffset = (w/2)-12;
				yoffset = 12;
				break;
			case 'topright':
				xoffset = w-25-12;
				yoffset = 12;
				break;
			default:
				break;
		}

		if (boxLane == 1)
		{
			// Title line (similar to swimlane).
			c.moveTo(0, 48);
			c.lineTo(w, 48);
		}
	}

	// Irregular shape
	// c.moveTo(0, 0);
	// c.lineTo(w/3, 0);
	// c.lineTo(w/3, h/2);
	// c.lineTo(2*(w/3), h/2);
	// c.lineTo(2*(w/3), h/3);
	// c.lineTo(w, h/3);
	// c.lineTo(w, h);
	// c.lineTo(0, h);
	// c.lineTo(0, 0);

	c.fillAndStroke();
	
	var strokeColor = mxUtils.getValue(this.state.style, 'strokeColor', 'none');
	var fillColor = mxUtils.getValue(this.state.style, 'fillColor', 'none');

	//c.setFillColor(strokeColor);
	//c.setStrokeColor('none');

	c.setFillColor(fillColor);
	c.setStrokeColor(strokeColor);

	var boxType = mxUtils.getValue(this.state.style, 'boxType', '');

	// Note that cloudtag is used temporarily for new boxes until the icons 
	// for the new boxes are added.
	
	switch(boxType)
	{
		// Cloud Boxes
		case 'cloud-ibm':
			var bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.cloudtag');
			bgSt1.drawShape(c, this, xoffset, yoffset, wsize, hsize);
			break;
		case 'cloud-region':
			var bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.regiontag');
			bgSt1.drawShape(c, this, xoffset, yoffset, wsize, hsize);
			break;
		case 'cloud-zone':
			var bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.zonetag');
			bgSt1.drawShape(c, this, xoffset, yoffset, wsize, hsize);
			break;
		case 'cloud-public':
			var bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.publictag');
			bgSt1.drawShape(c, this, xoffset, yoffset, wsize, hsize);
			break;
		case 'cloud-enterprise':
			var bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.enterprisetag');
			bgSt1.drawShape(c, this, xoffset, yoffset, wsize, hsize);
			break;
		case 'cloud-classic':
			var bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.classictag');
			bgSt1.drawShape(c, this, xoffset, yoffset, wsize, hsize);
			break;
		case 'cloud-services':
                        bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.cloudtag');
                        bgSt1.drawShape(c, this, xoffset, yoffset, wsize, hsize);
                        break;
		case 'cloud-foundry':
                        bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.cloudtag');
                        bgSt1.drawShape(c, this, xoffset, yoffset, wsize, hsize);
                        break;
                case 'cloud-accessgroup':
                        bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.cloudtag');
                        bgSt1.drawShape(c, this, xoffset, yoffset, wsize, hsize);
                        break;
                case 'cloud-accountgroup':
                        bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.cloudtag');
                        bgSt1.drawShape(c, this, xoffset, yoffset, wsize, hsize);
                        break;
                case 'cloud-resourcegroup':
                        bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.cloudtag');
                        bgSt1.drawShape(c, this, xoffset, yoffset, wsize, hsize);
                        break;

		// VPC Boxes
		case 'vpc-ibm':
			var bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.vpctag');
			bgSt1.drawShape(c, this, xoffset, yoffset, wsize, hsize);
			break;
		case 'vpc-subnet':
			var bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.subnettag');
			bgSt1.drawShape(c, this, xoffset, yoffset, wsize, hsize);
			break;
		case 'vpc-virtualserver':
                        //bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.cloudtag');
                        //bgSt1.drawShape(c, this, xoffset, yoffset, wsize, hsize);
                        break;
		case 'vpc-baremetal':
                        bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.cloudtag');
                        bgSt1.drawShape(c, this, xoffset, yoffset, wsize, hsize);
                        break;
		case 'vpc-endpoints':
                        bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.cloudtag');
                        bgSt1.drawShape(c, this, xoffset, yoffset, wsize, hsize);
                        break;
                case 'vpc-instancegroup':
                        bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.instancegrouptag');
                        bgSt1.drawShape(c, this, xoffset, yoffset, wsize, hsize);
                        break;
                case 'vpc-securitygroup':
                        bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.securitygrouptag');
                        bgSt1.drawShape(c, this, xoffset, yoffset, wsize, hsize);
                        break;

		// Kube Boxes
		case 'kube-ibm':
                        bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.cloudtag');
                        bgSt1.drawShape(c, this, xoffset, yoffset, wsize, hsize);
                        break;
		case 'kube-general':
                        bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.kubetag');
                        bgSt1.drawShape(c, this, xoffset, yoffset, wsize, hsize);
                        break;
		case 'kube-openshift':
                        bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.cloudtag');
                        bgSt1.drawShape(c, this, xoffset, yoffset, wsize, hsize);
                        break;
		case 'kube-services':
                        bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.cloudtag');
                        bgSt1.drawShape(c, this, xoffset, yoffset, wsize, hsize);
                        break;
		case 'kube-replicaset':
                        bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.cloudtag');
                        bgSt1.drawShape(c, this, xoffset, yoffset, wsize, hsize);
                        break;
		case 'kube-pod':
                        bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.cloudtag');
                        bgSt1.drawShape(c, this, xoffset, yoffset, wsize, hsize);
                        break;
                case 'kube-namespacegroup':
                        bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.cloudtag');
                        bgSt1.drawShape(c, this, xoffset, yoffset, wsize, hsize);
                        break;

		// Network Boxes
		case 'network-pop':
                        bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.cloudtag');
                        bgSt1.drawShape(c, this, xoffset, yoffset, wsize, hsize);
                        break;
		case 'network-datacenter':
                        bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.cloudtag');
                        bgSt1.drawShape(c, this, xoffset, yoffset, wsize, hsize);
                        break;
		case 'network-overlay':
                        bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.cloudtag');
                        bgSt1.drawShape(c, this, xoffset, yoffset, wsize, hsize);
                        break;
		case 'network-vlan':
                        bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.vlantag');
                        bgSt1.drawShape(c, this, xoffset, yoffset, wsize, hsize);
                        break;
		case 'network-server':
                        bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.cloudtag');
                        bgSt1.drawShape(c, this, xoffset, yoffset, wsize, hsize);
                        break;
		case 'network-general':
                        bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.cloudtag');
                        bgSt1.drawShape(c, this, xoffset, yoffset, wsize, hsize);
                        break;
		case 'network-other':
                        bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.cloudtag');
                        bgSt1.drawShape(c, this, xoffset, yoffset, wsize, hsize);
                        break;

		// Other Boxes
		case 'other-pill':
                        break;
		case 'other-logicalcomponent':
                        break;
		case 'other-prescribedcomponent':
                        break;
		case 'other-logicalnode':
                        break;
		case 'other-prescribednode':
                        break;
			
		default:
			break;
	}
};

mxCellRenderer.registerShape(mxShapeIBM2Box.prototype.cst.IBM_BOX, mxShapeIBM2Box);
