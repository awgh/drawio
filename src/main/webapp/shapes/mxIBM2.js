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
	{name: 'prType', dispName: 'Box Type', defVal: 'cloud', type: 'enum', 
		enumList: [{val: 'cloud', dispName: 'IBM Cloud'}, 
				   {val: 'vpc', dispName: 'VPC'}, 
				   {val: 'region', dispName: 'Region'}, 
				   {val: 'zone', dispName: 'Zone'}, 
				   {val: 'subnet', dispName: 'Subnet ACL'}, 
				   {val: 'public', dispName: 'Public Network'}, 
				   {val: 'enterprise', dispName: 'Enterprise Network'}, 
				   {val: 'classic', dispName: 'Classic Infrastructure'},
				   {val: 'services', dispName: 'Cloud Services'},
                                   {val: 'account', dispName: 'Account Group'},
                                   {val: 'instance', dispName: 'Instance Group'},
                                   {val: 'namespace', dispName: 'Namespace Group'},
                                   {val: 'resource', dispName: 'Resource Group'},
                                   {val: 'security', dispName: 'Security Group'}]}
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

	// Start tag after color bar or leave space for rounded corner
	var tagoffset = 3;

	var rounded = mxUtils.getNumber(this.state.style, 'rounded', 0);

	if (rounded == 1)
	{
		c.roundrect(0, 0, w, h, 16)
	}
	else
	{
		//c.rect(0, 0, w, h);
		
		c.moveTo(0, 0);
		c.lineTo(w, 0);
		c.lineTo(w, h);
		c.lineTo(0, h);
		c.lineTo(0, 0);

		// Color bar
		//c.moveTo(1, 0);
		//c.lineTo(1, 25);
		//c.moveTo(2, 0);
		//c.lineTo(2, 25);
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

	// Title line (similar to swimlane)
	// c.moveTo(0, 25);
	// c.lineTo(w, 25);

	// Component bars
	// c.moveTo(-4, 5);
	// c.lineTo(4, 5);
	// c.lineTo(4, 10);
	// c.lineTo(-4, 10);
	// c.lineTo(-4, 5);

	// c.moveTo(-4, 15);
	// c.lineTo(4, 15);
	// c.lineTo(4, 20);
	// c.lineTo(-4, 20);
	// c.lineTo(-4, 15);

	c.fillAndStroke();
	
	var strokeColor = mxUtils.getValue(this.state.style, 'strokeColor', 'none');
	var fillColor = mxUtils.getValue(this.state.style, 'fillColor', 'none');

	//c.setFillColor(strokeColor);
	//c.setStrokeColor('none');

	c.setFillColor(fillColor);
	c.setStrokeColor(strokeColor);

	var prType = mxUtils.getValue(this.state.style, 'prType', '');
	
	switch(prType)
	{
		case 'cloud':
			var bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.cloudtag');
			bgSt1.drawShape(c, this, tagoffset, 0, 25, 25);
			break;
		case 'vpc':
			var bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.vpctag');
			bgSt1.drawShape(c, this, tagoffset, 0, 25, 25);
			break;
		case 'region':
			var bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.regiontag');
			bgSt1.drawShape(c, this, tagoffset, 0, 25, 25);
			break;
		case 'zone':
			var bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.zonetag');
			bgSt1.drawShape(c, this, tagoffset, 0, 25, 25);
			break;
		case 'subnet':
			var bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.subnettag');
			bgSt1.drawShape(c, this, tagoffset, 0, 25, 25);
			break;
		case 'public':
			var bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.publictag');
			bgSt1.drawShape(c, this, tagoffset, 0, 25, 25);
			break;
		case 'enterprise':
			var bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.enterprisetag');
			bgSt1.drawShape(c, this, tagoffset, 0, 25, 25);
			break;
		case 'classic':
			var bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.classictag');
			bgSt1.drawShape(c, this, tagoffset, 0, 25, 25);
			break;
		case 'services':
                        bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.cloudtag');
                        bgSt1.drawShape(c, this, 0, 0, 25, 25);
                        break;
                case 'account':
                        bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.cloudtag');
                        bgSt1.drawShape(c, this, 0, 0, 25, 25);
                        break;
                case 'instance':
                        bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.cloudtag');
                        bgSt1.drawShape(c, this, 0, 0, 25, 25);
                        break;
                case 'namespace':
                        bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.cloudtag');
                        bgSt1.drawShape(c, this, 0, 0, 25, 25);
                        break;
                case 'resource':
                        bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.cloudtag');
                        bgSt1.drawShape(c, this, 0, 0, 25, 25);
                        break;
                case 'security':
                        bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2.securitytag');
                        bgSt1.drawShape(c, this, 0, 0, 25, 25);
                        break;
		default:
			break;
	}
};

mxCellRenderer.registerShape(mxShapeIBM2Box.prototype.cst.IBM_BOX, mxShapeIBM2Box);
