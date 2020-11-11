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
function mxShapeIBM1Box(bounds, fill, stroke, strokewidth)
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
mxUtils.extend(mxShapeIBM1Box, mxShape);

mxShapeIBM1Box.prototype.cst = {
		IBM_BOX : 'mxgraph.ibm1.box'
};

mxShapeIBM1Box.prototype.customProperties = [
	{name: 'prType', dispName: 'Box Type', defVal: 'cloud', type: 'enum', 
		enumList: [{val: 'cloud', dispName: 'IBM Cloud'}, 
				   {val: 'vpc', dispName: 'VPC'}, 
				   {val: 'region', dispName: 'Region'}, 
				   {val: 'zone', dispName: 'Zone'}, 
				   {val: 'subnet', dispName: 'Subnet:ACL'}, 
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
mxShapeIBM1Box.prototype.paintVertexShape = function(c, x, y, w, h)
{
	c.translate(x, y);
	
	c.begin();
	//c.rect(0,0, w, h);
        c.moveTo(0, 0);
        c.lineTo(w, 0);
        c.lineTo(w, h);
        c.lineTo(0, h);
        c.lineTo(0, 0);

	var dashed = mxUtils.getNumber(this.state.style, 'dashed', 0);
	if (dashed == 1)
	{
		// Remove dashed border around tag.
		c.setDashed(false)
		c.moveTo(0, 0);
		c.lineTo(25, 0);
		c.moveTo(0, 0);
		c.lineTo(0, 25);
		c.setDashed(true)
	}

	c.fillAndStroke();

	var strokeColor = mxUtils.getValue(this.state.style, 'strokeColor', 'none');
	c.setFillColor(strokeColor);
	c.setStrokeColor('none');
	
	var prType = mxUtils.getValue(this.state.style, 'prType', '');
	
	switch(prType)
	{
		case 'cloud':
			bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm1.cloudtag');
			bgSt1.drawShape(c, this, 0, 0, 25, 25);
			break;
		case 'vpc':
			bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm1.vpctag');
			bgSt1.drawShape(c, this, 0, 0, 25, 25);
			break;
		case 'region':
			bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm1.regiontag');
			bgSt1.drawShape(c, this, 0, 0, 25, 25);
			break;
		case 'zone':
			bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm1.zonetag');
			bgSt1.drawShape(c, this, 0, 0, 25, 25);
			break;
		case 'subnet':
			bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm1.subnettag');
			bgSt1.drawShape(c, this, 0, 0, 25, 25);
			break;
		case 'public':
			bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm1.publictag');
			bgSt1.drawShape(c, this, 0, 0, 25, 25);
			break;
		case 'enterprise':
			bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm1.enterprisetag');
			bgSt1.drawShape(c, this, 0, 0, 25, 25);
			break;
		case 'classic':
			bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm1.classictag');
			bgSt1.drawShape(c, this, 0, 0, 25, 25);
			break;
		case 'services':
			bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm1.cloudtag');
			bgSt1.drawShape(c, this, 0, 0, 25, 25);
			break;
		case 'account':
			bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm1.cloudtag');
			bgSt1.drawShape(c, this, 0, 0, 25, 25);
			break;
		case 'instance':
			bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm1.cloudtag');
			bgSt1.drawShape(c, this, 0, 0, 25, 25);
			break;
		case 'namespace':
			bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm1.cloudtag');
			bgSt1.drawShape(c, this, 0, 0, 25, 25);
			break;
		case 'resource':
			bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm1.cloudtag');
			bgSt1.drawShape(c, this, 0, 0, 25, 25);
			break;
		case 'security':
			bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm1.cloudtag');
			bgSt1.drawShape(c, this, 0, 0, 25, 25);
			break;
		default:
			break;
	}
};

mxCellRenderer.registerShape(mxShapeIBM1Box.prototype.cst.IBM_BOX, mxShapeIBM1Box);
