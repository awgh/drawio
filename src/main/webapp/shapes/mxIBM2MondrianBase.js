/**
 * Copyright (c) 2006-2015, JGraph Ltd
 * Copyright (c) 2006-2015, Gaudenz Alder
 */
/**
 * Class: mxMondrianBase
 *
 * Extends <mxShape> to implement an shapes which are compliant with the IBM Mondrian Design Method
 * 
 * Constructor: mxMondrianBase
 * 
 * Parameters:
 * 
 * bounds - <mxRectangle> that defines the bounds. This is stored in
 * <mxShape.bounds>.
 * fill - String that defines the fill color. This is stored in <fill>.
 * stroke - String that defines the stroke color. This is stored in <stroke>.
 * strokewidth - Optional integer that defines the stroke width. Default is
 * 1. This is stored in <strokewidth>.
 */
function mxIBM2MondrianBase(bounds, fill, stroke, strokewidth)
{
	mxShape.call(this, bounds, fill, stroke, strokewidth);
	this.bounds = bounds;
	this.fill = fill;
	this.stroke = stroke;
	this.strokewidth = (strokewidth != null) ? strokewidth : 1;
};

/**
 * Extends mxShape.
 */
mxUtils.extend(mxIBM2MondrianBase, mxShape);

mxIBM2MondrianBase.prototype.cst = {
	MONDRIAN_BASE : 'mxgraph.ibm2mondrian.base',

	ELEMENT_TYPE : 'elementType',
	ELEMENT_TYPE_DEFAULT : 'pn',
	SHAPE_LAYOUT : 'shapeLayout',
	SHAPE_LAYOUT_DEFAULT : 'icon_name',
	COLOR_FAMILY : 'colorFamily',
	COLOR_FAMILY_DEFAULT : 'blue',
	COLOR_FILL_ICON : 'colorFillIcon', 
	COLOR_FILL_ICON_DEFAULT : 'swatch_40', 
	COLOR_FILL_TEXT : 'colorFillText', 
	COLOR_FILL_TEXT_DEFAULT : 'white',
};

//**********************************************************************************************************************************************************
// IBM Design Language Color Definitions https://www.ibm.com/design/language/color/#specifications
//**********************************************************************************************************************************************************
mxIBM2MondrianBase.prototype.getSelectedColorSpecification = function(colorFamily) {
	switch(colorFamily) {
		case 'red':
			return {noColor: 'none', white: '#ffffff', swatch_10: '#fff1f1', swatch_20: '#ffd7d9', swatch_30: '#ffb3b8', swatch_40: '#ff8389', swatch_50: '#fa4d56', swatch_60: '#da1e28'};
		case 'magenta':
			return {noColor: 'none', white: '#ffffff', swatch_10: '#fff0f7', swatch_20: '#ffd6e8', swatch_30: '#ffafd2', swatch_40: '#ff7eb6', swatch_50: '#ee5396', swatch_60: '#d02670'};
		case 'purple':
			return {noColor: 'none', white: '#ffffff', swatch_10: '#f6f2ff', swatch_20: '#e8daff', swatch_30: '#d4bbff', swatch_40: '#be95ff', swatch_50: '#a56eff', swatch_60: '#8a3ffc'};		
		case 'cyan':
			return {noColor: 'none', white: '#ffffff', swatch_10: '#e5f6ff', swatch_20: '#bae6ff', swatch_30: '#82cfff', swatch_40: '#33b1ff', swatch_50: '#1192e8', swatch_60: '#0072c3'};			
		case 'blue':
			return {noColor: 'none', white: '#ffffff', swatch_10: '#edf5ff', swatch_20: '#d0e2ff', swatch_30: '#a6c8ff', swatch_40: '#78a9ff', swatch_50: '#4589ff', swatch_60: '#0f62fe'};
		case 'teal':
			return {noColor: 'none', white: '#ffffff', swatch_10: '#d9fbfb', swatch_20: '#9ef0f0', swatch_30: '#3ddbd9', swatch_40: '#08bdba', swatch_50: '#009d9a', swatch_60: '#007d79'};
		case 'green':
			return {noColor: 'none', white: '#ffffff', swatch_10: '#defbe6', swatch_20: '#a7f0ba', swatch_30: '#6fdc8c', swatch_40: '#42be65', swatch_50: '#24a148', swatch_60: '#198038'};
		default:
			return {noColor: 'none', white: '#ffffff', swatch_10: '#f2f4f8', swatch_20: '#dde1e6', swatch_30: '#c1c7cd', swatch_40: '#a2a9b0', swatch_50: '#878d96', swatch_60: '#697077'};
	}
}

mxIBM2MondrianBase.prototype.getLineColor = function(colorFamily) {
		return mxMondrianBase.prototype.getSelectedColorSpecification(colorFamily).swatch_60;
}

mxIBM2MondrianBase.prototype.getDividerLineColor = function(colorFamily, colorFillText) {
	if(colorFillText === 'swatch_10')
	{
		return mxIBM2MondrianBase.prototype.getSelectedColorSpecification(colorFamily).swatch_20;
	}
	else
	{
		return mxIBM2MondrianBase.prototype.getSelectedColorSpecification(colorFamily).swatch_10;
	}
}

mxIBM2MondrianBase.prototype.customProperties = [
	{name:'elementType', dispName:'Element Type', type:'enum', defVal:'pn',
		enumList:[{val:'actor', dispName: 'Actor'}, {val:'ln', dispName: 'Logical Node'}, {val:'pn', dispName: 'Prescribed Node'}]},
	{name:'shapeLayout', dispName:'Shape Layout', type:'enum', defVal:'icon_name',
		enumList:[{val:'icon', dispName: 'Icon'}, {val:'icon_name', dispName: 'Icon + Name'}, {val:'name', dispName: 'Name'}]},
	{name:'colorFamily', dispName:'Color', type:'enum', defVal:'blue',
		enumList:[{val:'blue', dispName: 'Blue'}, {val:'cyan', dispName: 'Cyan'}, {val:'green', dispName: 'Green'}, {val:'gray', dispName: 'Gray'}, {val:'magenta', dispName: 'Magenta'}, {val:'purple', dispName: 'Purple'}, {val:'red', dispName: 'Red'}, {val:'teal', dispName: 'Teal'}]},
	{name:'colorFillIcon', dispName:'Fill (Icon)', type:'enum', defVal:'swatch_40',
		enumList:[{val:'noColor', dispName: 'None'}, {val:'swatch_30', dispName: 'Light'}, {val:'swatch_40', dispName: 'Medium'}, {val:'swatch_50', dispName: 'Dark'}]},
	{name:'colorFillText', dispName:'Fill (Text)', type:'enum', defVal:'white',
		enumList:[{val:'noColor', dispName: 'None'}, {val:'white', dispName: 'White'}, {val:'swatch_10', dispName: 'Very Light'}]},
	];

mxCellRenderer.registerShape(mxIBM2MondrianBase.prototype.cst.MONDRIAN_BASE, mxIBM2MondrianBase);

/**
 * Variable: cornerRadius
 *
 * Default width and height for the titleBarHeight. Default is 8.
 */
mxIBM2MondrianBase.prototype.cornerRadius = 8;

/**
 * Variable: textSpacingLeft
 *
 * Default value for image spacing. Default is 12.
 */
mxIBM2MondrianBase.prototype.textSpacingLeft = 12;

/**
 * Variable: textSpacingRight
 *
 * Default value for image spacing. Default is 16.
 */
mxIBM2MondrianBase.prototype.textSpacingRight = 16;

/**
 * Variable: iconSize
 *
 * Default width and height for the icon. Default is 24.
 */
mxIBM2MondrianBase.prototype.iconSize = 24;

/**
 * Variable: iconSpacing
 *
 * Default width and height for the icon. Default is 12.
 */
mxIBM2MondrianBase.prototype.iconSpacing = 12;

/**
 * Variable: titleBarHeight
 *
 * Default width and height for the titleBarHeight. Default is 48.
 */
mxIBM2MondrianBase.prototype.titleBarHeight = 48;

/**
 * Function: init
 *
 * Initializes the shape and the <indicator>.
 */
mxIBM2MondrianBase.prototype.init = function(container)
{
	mxShape.prototype.init.apply(this, arguments);
	
	this.shapeWidthIconView = mxIBM2MondrianBase.prototype.titleBarHeight;
	this.shapeHeightIconView = mxIBM2MondrianBase.prototype.titleBarHeight;


	/*** START Registration of Event Listener */
	// The text values on the shape are controlled via Values. This is to trigger a redraw when this change happens.
	// I think not the way it should be done, but have not found the correct way
	this.cellID = this.state.cell.id;
	var changeListener = mxUtils.bind(this, function(evt)
	{
		var changeType = evt.properties.change.constructor.name;
		if((changeType === 'mxValueChange') && (evt.properties.change.cell.id === this.cellID) ){
			this.redraw();
		}	
	});
	
	this.state.view.graph.model.addListener(mxEvent.EXECUTED, mxUtils.bind(this, function(sender, evt)
	{
		changeListener(evt);
	}));
	/*** END Registration of Event Listener */
};	

/**
 * Function: redraw
 *
 * Reconfigures this shape. This will update the attributees of the Shape.
 */
mxIBM2MondrianBase.prototype.redraw = function()
{
	console.log("redraw");
	mxShape.prototype.redraw.apply(this, arguments);

	// Resize the Shape which can happen upon an mxGeometry change (by dragging the handles) or by a style change
	// Not sure this is the correct place to handle it: a) seems resouce intenstive, so the if statements are placeholders to figure out if the update is required
	if(true)
	{
		var currentGeoState = this.state.cell.getGeometry();
		var newGeoState = null;
	
		if(this.elementType === 'actor') // Actor is always 48x48.
		{
			newGeoState = new mxGeometry(currentGeoState.x, currentGeoState.y, this.shapeWidthIconView, this.shapeHeightIconView);
		}
		else
		{
			newGeoState = new mxGeometry(currentGeoState.x, currentGeoState.y, Math.max(this.shapeWidthIconView, currentGeoState.width), Math.max(this.titleBarHeight, currentGeoState.height));
		}
	
		if(true)
		{
			this.state.view.graph.resizeCell(this.state.cell, newGeoState);
	
			// this is only when there is a style change that forced the update
			this.state.view.invalidate(this.state.cell);
			this.state.view.validate();	
		}	
	}
};

mxIBM2MondrianBase.prototype.paintVertexShape = function(c, x, y, w, h)
{
	console.log("paintVertexShape");
	this.elementType = mxUtils.getValue(this.style, mxIBM2MondrianBase.prototype.cst.ELEMENT_TYPE, mxIBM2MondrianBase.prototype.cst.ELEMENT_TYPE_DEFAULT);
	this.shapeLayout = mxUtils.getValue(this.style, mxIBM2MondrianBase.prototype.cst.SHAPE_LAYOUT, mxIBM2MondrianBase.prototype.cst.SHAPE_LAYOUT_DEFAULT);
	this.colorFamily = mxUtils.getValue(this.style, mxIBM2MondrianBase.prototype.cst.COLOR_FAMILY, mxIBM2MondrianBase.prototype.cst.COLOR_FAMILY_DEFAULT);
	this.colorFillIcon = mxUtils.getValue(this.style, mxIBM2MondrianBase.prototype.cst.COLOR_FILL_ICON, mxIBM2MondrianBase.prototype.cst.COLOR_FILL_ICON_DEFAULT);
	this.colorFillText = mxUtils.getValue(this.style, mxIBM2MondrianBase.prototype.cst.COLOR_FILL_TEXT, mxIBM2MondrianBase.prototype.cst.COLOR_FILL_TEXT_DEFAULT);

	c.translate(x, y);

	this.paintTitleBar(c, x, y, w, h);
	this.paintIconBox(c, x, y, w, h);
	this.paintIcon(c, x, y, w, h);
	this.paintElementName(c, x, y, w, h);
	this.paintShape(c, x, y, w, h);
};

/**
 * Function: paintTitleBar
 * 
 * Generic background painting implementation.
 */
mxIBM2MondrianBase.prototype.paintTitleBar = function(c, x, y, w, h)
{
	var minHeight = Math.min(h, this.titleBarHeight);
	if(this.shapeLayout != 'icon')
	{
		if(this.elementType === 'ln')
		{
			c.setFillColor(this.getSelectedColorSpecification(this.colorFamily)[this.colorFillText]);
			c.roundrect(0, 0, w, minHeight, this.cornerRadius, this.cornerRadius);
			c.fill();
		}
		else if(this.elementType === 'pn')
		{
			c.setFillColor(this.getSelectedColorSpecification(this.colorFamily)[this.colorFillText]);
			c.rect(0, 0, w, minHeight);
			c.fill();
		}
		else {
			//do nothing
		}	
	}
};

/**
 * Function: paintIconBox
 * 
 * Generic background painting implementation.
 */
mxIBM2MondrianBase.prototype.paintIconBox = function(c, x, y, w, h)
{
	c.setFillColor(this.getSelectedColorSpecification(this.colorFamily)[this.colorFillIcon]);

	var minWidth = Math.min(w, this.getIconBoxWidth());
	var minHeight = Math.min(h, this.titleBarHeight);

	if(this.elementType === 'actor')
	{
		c.ellipse(0, 0, minWidth, minHeight);
	}
	else if(this.elementType === 'ln') // Logical Node
	{
		c.roundrect(0, 0, minWidth, minHeight, this.cornerRadius, this.cornerRadius);
	}
	else // Prescribed Node
	{
		c.rect(0, 0, minWidth, minHeight);
	}
	
	c.fill();
};

/**
 * Function: paintShape
 * 
 * Generic background painting implementation.
 */
mxIBM2MondrianBase.prototype.paintShape = function(c, x, y, w, h)
{
	var shapeWidth = w;
	var shapeHeigth = h;

	if(this.shapeLayout == 'icon' || this.elementType === 'actor')
	{
		shapeWidth = this.getIconBoxWidth();
		shapeHeigth = this.getIconBoxWidth();
	}
	
	if(this.elementType === 'actor')
	{
		c.setStrokeColor(this.getLineColor(this.colorFamily));
		c.ellipse(0, 0, shapeWidth, shapeHeigth);
		c.stroke();
	}
	else if(this.elementType === 'ln') // Logical Node
	{
		if (h > this.titleBarHeight)
		{
			c.setStrokeColor(this.getDividerLineColor(this.colorFamily, this.colorFillText));
			c.roundrect(0, 0, shapeWidth, this.titleBarHeight, this.cornerRadius, this.cornerRadius);
			c.stroke();
		}
		c.setStrokeColor(this.getLineColor(this.colorFamily));
		c.roundrect(0, 0, shapeWidth, shapeHeigth, this.cornerRadius, this.cornerRadius);
		c.stroke();
	}
	else // Prescribed Node
	{
		if (h > this.titleBarHeight)
		{	
			c.setStrokeColor(this.getDividerLineColor(this.colorFamily, this.colorFillText));
			c.rect(0, 0, shapeWidth, this.titleBarHeight);
			c.stroke();
		}
		c.setStrokeColor(this.getLineColor(this.colorFamily));
		c.rect(0, 0, shapeWidth, shapeHeigth);
		c.stroke();
	}		
};

/**
 * Function: paintIcon
 * 
 * Generic background painting implementation.
 */
mxIBM2MondrianBase.prototype.paintIcon = function(c, x, y, w, h)
{
	if (this.image != null && (this.shapeLayout == 'icon' || this.shapeLayout == 'icon_name'))
	{	
		c.image(this.iconSpacing, this.iconSpacing, this.iconSize, this.iconSize, this.image, true, false, false);
	}
};

mxIBM2MondrianBase.prototype.getIconBoxWidth = function()
{
	if (this.image != null && (this.shapeLayout == 'icon' || this.shapeLayout == 'icon_name'))
	{	
		return (2 * this.iconSpacing + this.iconSize);
	}
	else
	{
		return 0;
	}
};

mxIBM2MondrianBase.prototype.paintElementName = function(c, x, y, w, h)
{
	var elementName = this.state.cell.getAttribute('Element-Name','Missing Element-Name');
	var iconBoxWidth = this.getIconBoxWidth();
		 
	if (this.shapeLayout == 'name' || this.shapeLayout == 'icon_name')
	{
		c.setFontFamily('IBM Plex Sans');
		c.setFontColor('#000000');	
		c.setFontStyle(0);
		c.setFontSize(14);
		c.text(iconBoxWidth + this.textSpacingLeft, Math.min(h/2, this.titleBarHeight/2) - 2, 
			w - (iconBoxWidth + this.textSpacingLeft + this.textSpacingRight), h, 
			elementName, mxConstants.ALIGN_LEFT, mxConstants.ALIGN_MIDDLE, 1, 'html', 0, 0, 0);
	}
};

mxIBM2MondrianBase.prototype.getConstraints = function(style, w, h)
{
	var constr = [];

	constr.push(new mxConnectionConstraint(new mxPoint(0.5, 0), false));
	constr.push(new mxConnectionConstraint(new mxPoint(1, 0), false));
	constr.push(new mxConnectionConstraint(new mxPoint(1, 0.5), false));
	constr.push(new mxConnectionConstraint(new mxPoint(0.5, 1), false));
	constr.push(new mxConnectionConstraint(new mxPoint(0, 1), false));
	constr.push(new mxConnectionConstraint(new mxPoint(0, 0.5), false));

	return (constr);
}
