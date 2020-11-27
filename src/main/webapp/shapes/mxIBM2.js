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

	var tagoffset = 0;

	var boxKind = mxUtils.getValue(this.state.style, 'boxKind', 'none');

	var boxBar = mxUtils.getNumber(this.state.style, 'boxBar', 0);

	// Test changing style.
	this.state.style = mxUtils.setStyle(this.state.style, mxConstants.STYLE_FILLCOLOR, '#ffffff');

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

		// Note that this needs to support properties similar to square box below.

		// Leave space for rounded corner.
		tagoffset = 3;
	}
	else
	{
		//c.rect(0, 0, w, h);
		
		// Draw box.
		c.moveTo(0, 0);
		c.lineTo(w, 0);
		c.lineTo(w, h);
		c.lineTo(0, h);
		if (boxKind == 'prescribedcomponent')
		{
			c.moveTo(0, 0)
			c.lineTo(0, 5)
			c.moveTo(0, 10)
			c.lineTo(0, 15)
			c.moveTo(0, 20)
			c.lineTo(0, h)
		}
		else
		{
			c.lineTo(0, 0);
		}

		// Determine tag position.
		switch (boxIcon)
		{
			case 'topleft':
				if (boxBar == 1)
				{
					// Leave space for bar.
					tagoffset = 3;
				}
				else
				{
					tagoffset = 0;
				}
				break;
			case 'topmiddle':
				tagoffset = (w/2)-12;
				break;
			case 'topright':
				tagoffset = w-25;
				break;
			default:
				break;
		}

		if (boxKind == 'prescribedcomponent')
		{
			// Draw first component bar.
			c.moveTo(-4, 5);
			c.lineTo(4, 5);
			c.lineTo(4, 10);
			c.lineTo(-4, 10);
			c.lineTo(-4, 5);

			// Draw second component bar.
			c.moveTo(-4, 15);
			c.lineTo(4, 15);
			c.lineTo(4, 20);
			c.lineTo(-4, 20);
			c.lineTo(-4, 15);
		}
		else if (boxBar == 1)
		{
			// Draw color bar.
			c.moveTo(1, 0);
			c.lineTo(1, 2);
			c.moveTo(2, 0);
			c.lineTo(2, 25);
		}

		if (boxLane == 1)
		{
			// Title line (similar to swimlane)
			c.moveTo(0, 25);
			c.lineTo(w, 25);
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
			bgSt1.drawShape(c, this, tagoffset, 0, 25, 25);
			break;
		case 'cloud-region':
			var bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.regiontag');
			bgSt1.drawShape(c, this, tagoffset, 0, 25, 25);
			break;
		case 'cloud-zone':
			var bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.zonetag');
			bgSt1.drawShape(c, this, tagoffset, 0, 25, 25);
			break;
		case 'cloud-public':
			var bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.publictag');
			bgSt1.drawShape(c, this, tagoffset, 0, 25, 25);
			break;
		case 'cloud-enterprise':
			var bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.enterprisetag');
			bgSt1.drawShape(c, this, tagoffset, 0, 25, 25);
			break;
		case 'cloud-classic':
			var bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.classictag');
			bgSt1.drawShape(c, this, tagoffset, 0, 25, 25);
			break;
		case 'cloud-services':
                        bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.cloudtag');
                        bgSt1.drawShape(c, this, tagoffset, 0, 25, 25);
                        break;
		case 'cloud-foundry':
                        bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.cloudtag');
                        bgSt1.drawShape(c, this, tagoffset, 0, 25, 25);
                        break;
                case 'cloud-accessgroup':
                        bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.cloudtag');
                        bgSt1.drawShape(c, this, tagoffset, 0, 25, 25);
                        break;
                case 'cloud-accountgroup':
                        bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.cloudtag');
                        bgSt1.drawShape(c, this, tagoffset, 0, 25, 25);
                        break;
                case 'cloud-resourcegroup':
                        bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.cloudtag');
                        bgSt1.drawShape(c, this, tagoffset, 0, 25, 25);
                        break;

		// VPC Boxes
		case 'vpc-ibm':
			var bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.vpctag');
			bgSt1.drawShape(c, this, tagoffset, 0, 25, 25);
			break;
		case 'vpc-subnet':
			var bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.subnettag');
			bgSt1.drawShape(c, this, tagoffset, 0, 25, 25);
			break;
		case 'vpc-virtualserver':
                        //bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.cloudtag');
                        //bgSt1.drawShape(c, this, tagoffset, 0, 25, 25);
                        break;
		case 'vpc-baremetal':
                        bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.cloudtag');
                        bgSt1.drawShape(c, this, tagoffset, 0, 25, 25);
                        break;
		case 'vpc-endpoints':
                        bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.cloudtag');
                        bgSt1.drawShape(c, this, tagoffset, 0, 25, 25);
                        break;
                case 'vpc-instancegroup':
                        bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.instancegrouptag');
                        bgSt1.drawShape(c, this, tagoffset, 0, 25, 25);
                        break;
                case 'vpc-securitygroup':
                        bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.securitygrouptag');
                        bgSt1.drawShape(c, this, tagoffset, 0, 25, 25);
                        break;

		// Kube Boxes
		case 'kube-ibm':
                        bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.cloudtag');
                        bgSt1.drawShape(c, this, tagoffset, 0, 25, 25);
                        break;
		case 'kube-general':
                        bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.cloudtag');
                        bgSt1.drawShape(c, this, tagoffset, 0, 25, 25);
                        break;
		case 'kube-openshift':
                        bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.cloudtag');
                        bgSt1.drawShape(c, this, tagoffset, 0, 25, 25);
                        break;
		case 'kube-services':
                        bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.cloudtag');
                        bgSt1.drawShape(c, this, tagoffset, 0, 25, 25);
                        break;
		case 'kube-replicaset':
                        bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.cloudtag');
                        bgSt1.drawShape(c, this, tagoffset, 0, 25, 25);
                        break;
		case 'kube-pod':
                        bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.cloudtag');
                        bgSt1.drawShape(c, this, tagoffset, 0, 25, 25);
                        break;
                case 'kube-namespacegroup':
                        bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.cloudtag');
                        bgSt1.drawShape(c, this, tagoffset, 0, 25, 25);
                        break;

		// Network Boxes
		case 'network-pop':
                        bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.cloudtag');
                        bgSt1.drawShape(c, this, tagoffset, 0, 25, 25);
                        break;
		case 'network-datacenter':
                        bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.cloudtag');
                        bgSt1.drawShape(c, this, tagoffset, 0, 25, 25);
                        break;
		case 'network-overlay':
                        bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.cloudtag');
                        bgSt1.drawShape(c, this, tagoffset, 0, 25, 25);
                        break;
		case 'network-vlan':
                        bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.cloudtag');
                        bgSt1.drawShape(c, this, tagoffset, 0, 25, 25);
                        break;
		case 'network-server':
                        bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.cloudtag');
                        bgSt1.drawShape(c, this, tagoffset, 0, 25, 25);
                        break;
		case 'network-general':
                        bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.cloudtag');
                        bgSt1.drawShape(c, this, tagoffset, 0, 25, 25);
                        break;
		case 'network-other':
                        bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.cloudtag');
                        bgSt1.drawShape(c, this, tagoffset, 0, 25, 25);
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
