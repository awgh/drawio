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
				   {val: 'subnet', dispName: 'Subnet ACL'}, 
				   {val: 'public', dispName: 'Public Network'}, 
				   {val: 'enterprise', dispName: 'Enterprise Network'}, 
				   {val: 'classic', dispName: 'Classic Infrastructure'}]}
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
	c.rect(0,0, w, h);
	c.fillAndStroke();
	
	var strokeColor = mxUtils.getValue(this.state.style, 'strokeColor', 'none');
	c.setFillColor(strokeColor);
	c.setStrokeColor('none');
	
	var prType = mxUtils.getValue(this.state.style, 'prType', '');
	
	switch(prType)
	{
		case 'cloud':
			var bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm1.cloudtag');
			bgSt1.drawShape(c, this, 0, 0, 25, 25);
			break;
		case 'vpc':
			var bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm1.vpctag');
			bgSt1.drawShape(c, this, 0, 0, 25, 25);
			break;
		case 'region':
			var bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm1.regiontag');
			bgSt1.drawShape(c, this, 0, 0, 25, 25);
			break;
		case 'zone':
			var bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm1.zonetag');
			bgSt1.drawShape(c, this, 0, 0, 25, 25);
			break;
		case 'subnet':
			var bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm1.subnettag');
			bgSt1.drawShape(c, this, 0, 0, 25, 25);
			break;
		case 'public':
			var bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm1.publictag');
			bgSt1.drawShape(c, this, 0, 0, 25, 25);
			break;
		case 'enterprise':
			var bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm1.enterprisetag');
			bgSt1.drawShape(c, this, 0, 0, 25, 25);
			break;
		case 'classic':
			var bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm1.classictag');
			bgSt1.drawShape(c, this, 0, 0, 25, 25);
			break;
		default:
			break;
	}
};

mxCellRenderer.registerShape(mxShapeIBM1Box.prototype.cst.IBM_BOX, mxShapeIBM1Box);
