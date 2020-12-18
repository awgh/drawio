/**
 * Copyright (c) 2020, Merijn Weiss
 */
/**
 * Class: mxIBM2MondrianBase
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
	SHAPE_LAYOUT_DEFAULT : 'expanded',

	ICON_IMAGE : 'iconImage',
	ICON_IMAGE_DEFAULT : 'defaultIconImage',

	COLOR_FAMILY : 'colorFamily',
	COLOR_FAMILY_DEFAULT : 'blue',
	COLOR_FILL_ICON : 'colorFillIcon', 
	COLOR_FILL_ICON_DEFAULT : 'swatch_40', 
	COLOR_FILL_TEXT : 'colorFillText', 
	COLOR_FILL_TEXT_DEFAULT : 'white',
	COLOR_FILL_CONTAINER : 'colorFillContainer', 
	COLOR_FILL_CONTAINER_DEFAULT : 'white',
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
		return mxIBM2MondrianBase.prototype.getSelectedColorSpecification(colorFamily).swatch_60;
}

mxIBM2MondrianBase.prototype.getDividerLineColor = function(colorFamily, colorFillText) {
	if(colorFillText === 'swatch_10')
	{
		return mxIBM2MondrianBase.prototype.getSelectedColorSpecification(colorFamily).swatch_30;
	}
	else
	{
		return mxIBM2MondrianBase.prototype.getSelectedColorSpecification(colorFamily).swatch_20;
	}
}

mxIBM2MondrianBase.prototype.customProperties = [
	{name:'elementType', dispName:'Element Type', type:'enum', defVal:'pn',
		enumList:[{val:'actor', dispName: 'Actor'}, {val:'ts', dispName: 'Target System'}, {val:'ln', dispName: 'Logical Node'}, {val:'lc', dispName: 'Logical Component'}, {val:'pn', dispName: 'Prescribed Node'}, {val:'pc', dispName: 'Prescribed Component'}, {val:'group', dispName: 'Group'}]},
	{name:'shapeLayout', dispName:'Shape Layout', type:'enum', defVal:'expanded',
		enumList:[{val:'collapsed', dispName: 'Collapsed'},{val:'expanded', dispName: 'Expanded'},{val:'custom', dispName: 'Custom'}]},
	{name:'iconImage', dispName:'Icon (Image)', type:'enum', defVal:'defaultIcon',
		enumList:[{val:'noIcon', dispName: '[no icon]'}, {val:'defaultIcon', dispName: '[default icon]'}, {val:'customIcon', dispName: '[custom icon]'}]},
	{name:'colorFamily', dispName:'Color', type:'enum', defVal:'blue',
		enumList:[{val:'blue', dispName: 'Blue'}, {val:'cyan', dispName: 'Cyan'}, {val:'green', dispName: 'Green'}, {val:'gray', dispName: 'Gray'}, {val:'magenta', dispName: 'Magenta'}, {val:'purple', dispName: 'Purple'}, {val:'red', dispName: 'Red'}, {val:'teal', dispName: 'Teal'}]},
	{name:'colorFillIcon', dispName:'Fill (Icon)', type:'enum', defVal:'swatch_40',
		enumList:[{val:'noColor', dispName: 'None'}, {val:'swatch_30', dispName: 'Light'}, {val:'swatch_40', dispName: 'Medium'}, {val:'swatch_50', dispName: 'Dark'}]},
	{name:'colorFillText', dispName:'Fill (Text)', type:'enum', defVal:'white',
		enumList:[{val:'noColor', dispName: 'None'}, {val:'white', dispName: 'White'}, {val:'swatch_10', dispName: 'Very Light'}]},
	{name:'colorFillContainer', dispName:'Fill (Container)', type:'enum', defVal:'white',
		enumList:[{val:'noColor', dispName: 'None'}, {val:'white', dispName: 'White'}, {val:'swatch_10', dispName: 'Very Light'}]},
	];

mxCellRenderer.registerShape(mxIBM2MondrianBase.prototype.cst.MONDRIAN_BASE, mxIBM2MondrianBase);

/**
 * Variable: cornerRadius
 *
 * Default radius for rounded Logical elements. Default is 8.
 */
mxIBM2MondrianBase.prototype.cornerRadius = 8;

/**
 * Variable: targetSystemRadius
 *
 * Default radius for rounded corner of Target System element. Default is 20.
 */
mxIBM2MondrianBase.prototype.targetSystemRadius = 20;

/**
 * Variable: textSpacingLeft
 *
 * Default value for text spacing. Default is 12.
 */
mxIBM2MondrianBase.prototype.textSpacingLeft = 12;

/**
 * Variable: textSpacingRight
 *
 * Default value for text spacing. Default is 16.
 */
mxIBM2MondrianBase.prototype.textSpacingRight = 16;

/**
 * Variable: textSpacingTop
 *
 * Default value for text spacing. Default is 8.
 */
mxIBM2MondrianBase.prototype.textSpacingTop = 8;

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
 * Variable: titleBarWidthMinimum
 *
 * Default width and height for the titleBarWidthMinimum. Default is 192.
 */
mxIBM2MondrianBase.prototype.titleBarWidthMinimum = 192;

/**
 * Variable: groupBarWidth
 *
 * Default width and height for the groupBarWidth. Default is 8.
 */
mxIBM2MondrianBase.prototype.groupBarWidth = 8;

/**
 * Function: init
 *
 * Initializes the shape and the <indicator>.
 */
mxIBM2MondrianBase.prototype.init = function(container)
{
	mxShape.prototype.init.apply(this, arguments);
	this.state.view.updateStyle = true;
	
	this.shapeWidthIconView = mxIBM2MondrianBase.prototype.titleBarHeight;
	this.shapeHeightIconView = mxIBM2MondrianBase.prototype.titleBarHeight;
};	

/**
 * Function: redraw
 *
 * Reconfigures this shape. This will update the attributees of the Shape.
 */
mxIBM2MondrianBase.prototype.redraw = function()
{
	this.elementType = mxUtils.getValue(this.style, mxIBM2MondrianBase.prototype.cst.ELEMENT_TYPE, mxIBM2MondrianBase.prototype.cst.ELEMENT_TYPE_DEFAULT);
	this.shapeLayout = mxUtils.getValue(this.style, mxIBM2MondrianBase.prototype.cst.SHAPE_LAYOUT, mxIBM2MondrianBase.prototype.cst.SHAPE_LAYOUT_DEFAULT);
	this.iconImage = mxUtils.getValue(this.style, mxIBM2MondrianBase.prototype.cst.ICON_IMAGE, mxIBM2MondrianBase.prototype.cst.ICON_IMAGE_DEFAULT);
	this.colorFamily = mxUtils.getValue(this.style, mxIBM2MondrianBase.prototype.cst.COLOR_FAMILY, mxIBM2MondrianBase.prototype.cst.COLOR_FAMILY_DEFAULT);
	this.colorFillIcon = mxUtils.getValue(this.style, mxIBM2MondrianBase.prototype.cst.COLOR_FILL_ICON, mxIBM2MondrianBase.prototype.cst.COLOR_FILL_ICON_DEFAULT);
	this.colorFillText = mxUtils.getValue(this.style, mxIBM2MondrianBase.prototype.cst.COLOR_FILL_TEXT, mxIBM2MondrianBase.prototype.cst.COLOR_FILL_TEXT_DEFAULT);
	this.colorFillContainer = mxUtils.getValue(this.style, mxIBM2MondrianBase.prototype.cst.COLOR_FILL_CONTAINER, mxIBM2MondrianBase.prototype.cst.COLOR_FILL_CONTAINER_DEFAULT);

	//console.log("REDRAW");
	//console.log(this);
	
	mxShape.prototype.redraw.apply(this, arguments);

	if(true)
	{
		var currentStyle = this.state.view.graph.model.getStyle(this.state.cell);
		var newStyle = currentStyle;
		
		if(this.shapeLayout === 'collapsed')
		{
			newStyle = mxUtils.setStyle(newStyle, mxConstants.STYLE_VERTICAL_LABEL_POSITION, mxConstants.ALIGN_BOTTOM);
			newStyle = mxUtils.setStyle(newStyle, mxConstants.STYLE_LABEL_POSITION, mxConstants.ALIGN_CENTER);
			newStyle = mxUtils.setStyle(newStyle, mxConstants.STYLE_VERTICAL_ALIGN, mxConstants.ALIGN_TOP);
			newStyle = mxUtils.setStyle(newStyle, mxConstants.STYLE_ALIGN, mxConstants.ALIGN_CENTER);

			// spacing
			newStyle = mxUtils.setStyle(newStyle, mxConstants.STYLE_SPACING, 0);
			newStyle = mxUtils.setStyle(newStyle, mxConstants.STYLE_SPACING_LEFT, 0);
			newStyle = mxUtils.setStyle(newStyle, mxConstants.STYLE_SPACING_RIGHT, 0);
			newStyle = mxUtils.setStyle(newStyle, mxConstants.STYLE_SPACING_TOP, this.textSpacingTop);
			newStyle = mxUtils.setStyle(newStyle, mxConstants.STYLE_SPACING_BOTTOM, 0);
		}
		else if(this.shapeLayout === 'expanded')
		{
			newStyle = mxUtils.setStyle(newStyle, mxConstants.STYLE_VERTICAL_LABEL_POSITION, mxConstants.ALIGN_MIDDLE);
			newStyle = mxUtils.setStyle(newStyle, mxConstants.STYLE_LABEL_POSITION, mxConstants.ALIGN_CENTER);
			newStyle = mxUtils.setStyle(newStyle, mxConstants.STYLE_VERTICAL_ALIGN, mxConstants.ALIGN_MIDDLE);
			newStyle = mxUtils.setStyle(newStyle, mxConstants.STYLE_ALIGN, mxConstants.ALIGN_LEFT);

			newStyle = mxUtils.setStyle(newStyle, mxConstants.STYLE_SPACING, 0);
			newStyle = mxUtils.setStyle(newStyle, mxConstants.STYLE_SPACING_LEFT, this.textSpacingLeft);
			newStyle = mxUtils.setStyle(newStyle, mxConstants.STYLE_SPACING_RIGHT, this.textSpacingRight);
			newStyle = mxUtils.setStyle(newStyle, mxConstants.STYLE_SPACING_TOP, 0);
			newStyle = mxUtils.setStyle(newStyle, mxConstants.STYLE_SPACING_BOTTOM, 0);
		}
		else // custom does not control these styles so you can use the UI to change it yourselves
		{
		}
			
		if(newStyle != currentStyle)
		{
			//console.log('Set newStyle: ' + newStyle);
			this.state.view.graph.model.beginUpdate();
			try
			{
				this.state.view.invalidate(this.state.cell);	
				this.state.view.graph.model.setStyle(this.state.cell, newStyle);
				this.state.view.validate();
			}
			finally
			{
				this.state.view.graph.model.endUpdate();
			}	
		}
	}
	
	if(true)
	{
		var currentGeoState = this.state.cell.getGeometry();
		var newGeoState = null;
	
		if(this.elementType === 'actor') // Actor is always 48x48.
		{
			newGeoState = new mxGeometry(currentGeoState.x, currentGeoState.y, this.shapeWidthIconView, this.shapeHeightIconView);
		}
		else if(this.elementType === 'ts') // Target System is always 48 height.
		{
			if(this.shapeLayout === 'collapsed')	
				newGeoState = new mxGeometry(currentGeoState.x, currentGeoState.y, 64, this.titleBarHeight);
			else
				newGeoState = new mxGeometry(currentGeoState.x, currentGeoState.y, Math.max(this.titleBarWidthMinimum, currentGeoState.width), this.titleBarHeight);
		}
		else
		{
			if(this.shapeLayout === 'collapsed')
				newGeoState = new mxGeometry(currentGeoState.x, currentGeoState.y, this.shapeWidthIconView, this.shapeHeightIconView);
			else
				newGeoState = new mxGeometry(currentGeoState.x, currentGeoState.y, Math.max(this.titleBarWidthMinimum, currentGeoState.width), Math.max(this.titleBarHeight, currentGeoState.height));
		}
	
		if(newGeoState != null && this.mustCellResize(currentGeoState, newGeoState))
		{
			//console.log('update');
			this.state.view.graph.model.beginUpdate();
			try
			{
				this.state.view.invalidate(this.state.cell);	
				this.state.view.graph.model.setGeometry(this.state.cell, newGeoState);
				this.state.view.validate();
			}
			finally
			{
				this.state.view.graph.model.endUpdate();
			}
		}	
	}
};

mxIBM2MondrianBase.prototype.mustCellResize = function(currentGeoState, newGeoState)
{
	if(currentGeoState.width != newGeoState.width)
		return true;
	else if(currentGeoState.height != newGeoState.height)
		return true;
	else
		return false;
}

mxIBM2MondrianBase.prototype.paintVertexShape = function(c, x, y, w, h)
{
	c.translate(x, y);
	
	this.paintContainer(c, x, y, w, h);
	this.paintTitleBar(c, x, y, w, h);
	this.paintIconBox(c, x, y, w, h);
	this.paintIcon(c, x, y, w, h);
	//this.paintElementName(c, x, y, w, h);
	this.paintShape(c, x, y, w, h);
};

/**
 * Function: paintContainer
 * 
 * Generic background painting implementation.
 */
mxIBM2MondrianBase.prototype.paintContainer = function(c, x, y, w, h)
{
	const endContainer = h - this.titleBarHeight;
	const startContainer = this.titleBarHeight;

	if(this.shapeLayout != 'collapsed' && endContainer > 0)
	{
		if(this.elementType === 'ln' || this.elementType === 'lc')
		{
			c.setFillColor(this.getSelectedColorSpecification(this.colorFamily)[this.colorFillContainer]);
			c.begin();
			c.moveTo(0, startContainer);
			c.lineTo(w, startContainer);
			c.lineTo(w, h - this.cornerRadius);
			c.arcTo(this.cornerRadius, this.cornerRadius, 0, 0, 1, w - this.cornerRadius, h);
			c.lineTo(this.cornerRadius, h);
			c.arcTo(this.cornerRadius, this.cornerRadius, 0, 0, 1, 0, h - this.cornerRadius);
			c.lineTo(0, startContainer);
			c.close();
			c.fill();
		}
		else {
			c.setFillColor(this.getSelectedColorSpecification(this.colorFamily)[this.colorFillContainer]);
			c.rect(0, startContainer, w, endContainer);
			c.fill();
		}	
	}
};

/**
 * Function: paintTitleBar
 * 
 * Generic background painting implementation.
 */
mxIBM2MondrianBase.prototype.paintTitleBar = function(c, x, y, w, h)
{
	const minHeight = Math.min(h, this.titleBarHeight);
	if(this.shapeLayout != 'icon')
	{
		if(this.elementType === 'ln' || this.elementType === 'lc')
		{
			
			if (h > this.titleBarHeight)
			{
				c.setFillColor(this.getSelectedColorSpecification(this.colorFamily)[this.colorFillText]);
				c.begin();
				c.moveTo(this.cornerRadius, 0);
				c.lineTo(w - this.cornerRadius, 0);
				c.arcTo(this.cornerRadius, this.cornerRadius, 0, 0, 1, w, this.cornerRadius);
				c.lineTo(w, minHeight);
				c.lineTo(0, minHeight);
				c.lineTo(0, this.cornerRadius);
				c.arcTo(this.cornerRadius, this.cornerRadius, 0, 0, 1, this.cornerRadius, 0);
				c.close();
				c.fill();
			}
			else
			{
				c.setFillColor(this.getSelectedColorSpecification(this.colorFamily)[this.colorFillText]);
				c.roundrect(0, 0, w, minHeight, this.cornerRadius, this.cornerRadius);
				c.fill();
			}
		}
		else if(this.elementType === 'pn' || this.elementType === 'pc' || this.elementType === 'group')
		{
			c.setFillColor(this.getSelectedColorSpecification(this.colorFamily)[this.colorFillText]);
			c.rect(0, 0, w, minHeight);
			c.fill();
		}
		else if(this.elementType === 'ts')
		{
			c.setFillColor(this.getSelectedColorSpecification(this.colorFamily)[this.colorFillText]);
			c.begin();
			c.moveTo(this.targetSystemRadius, 0);
			c.lineTo(w - this.targetSystemRadius, 0);
			c.arcTo(this.targetSystemRadius, this.targetSystemRadius, 0, 0, 1, w - this.targetSystemRadius, minHeight);
			c.lineTo(this.targetSystemRadius, minHeight);
			c.arcTo(this.targetSystemRadius, this.targetSystemRadius, 0, 0, 1, this.targetSystemRadius, 0);
			c.close();
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
	if(this.elementType === 'group')
		c.setFillColor(this.getSelectedColorSpecification(this.colorFamily)['noColor']);
	else
		c.setFillColor(this.getSelectedColorSpecification(this.colorFamily)[this.colorFillIcon]);

	const minWidth = Math.min(w, this.getIconBoxWidth());
	const minHeight = Math.min(h, this.titleBarHeight);

	if(minWidth > 0)
	{
		if(this.elementType === 'actor')
		{
			c.ellipse(0, 0, minWidth, minHeight);
		}
		else if(this.elementType === 'ts')
		{
			if(w <= 64)
			{
				c.begin();
				c.moveTo(this.targetSystemRadius, 0);
				c.lineTo(minWidth - this.targetSystemRadius, 0);
				c.arcTo(this.targetSystemRadius, this.targetSystemRadius, 0, 0, 1, minWidth - this.targetSystemRadius, minHeight);
				c.lineTo(this.targetSystemRadius, minHeight);
				c.arcTo(this.targetSystemRadius, this.targetSystemRadius, 0, 0, 1, this.targetSystemRadius, 0);
				c.close();
			}
			else
			{
				c.begin();
				c.moveTo(this.targetSystemRadius, 0);
				c.lineTo(minWidth, 0);
				c.lineTo(minWidth, minHeight);
				c.lineTo(this.targetSystemRadius, minHeight);
				c.arcTo(this.targetSystemRadius, this.targetSystemRadius, 0, 0, 1, this.targetSystemRadius, 0);
				c.close();
			}
		}
		else if(this.elementType === 'ln' || this.elementType === 'lc') // Logical Node or Logical Component
		{
			if(w <= this.shapeWidthIconView)
			{
				c.roundrect(0, 0, minWidth, minHeight, this.cornerRadius, this.cornerRadius);
			}
			else
			{
				c.begin();
				c.moveTo(this.cornerRadius, 0);
				c.lineTo(minWidth, 0);
				c.lineTo(minWidth, minHeight);
				if (h > this.titleBarHeight)
				{
					c.lineTo(0, minHeight);
				}
				else
				{
					c.lineTo(this.cornerRadius, minHeight);
					c.arcTo(this.cornerRadius, this.cornerRadius, 0, 0, 1, 0, minHeight - this.cornerRadius);
				}
				c.lineTo(0, this.cornerRadius);	
				c.arcTo(this.cornerRadius, this.cornerRadius, 0, 0, 1, this.cornerRadius, 0);
				c.close();	
			}		
		}
		else if(this.elementType === 'pn' || this.elementType === 'pc' || this.elementType === 'group')
		{
			c.rect(0, 0, minWidth, minHeight);
		}
		
		c.fill();
	}
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
	var componentDecoratorOffset = -4;
	var componentDecoratorHeight = 4;
	var componentDecoratorWidth = 8;

	if(this.shapeLayout == 'collapsed' || this.elementType === 'actor')
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
	else if(this.elementType === 'ts')
	{
		c.setStrokeColor(this.getLineColor(this.colorFamily));
		c.begin();
		c.moveTo(this.targetSystemRadius, 0);
		c.lineTo(shapeWidth - this.targetSystemRadius, 0);
		c.arcTo(this.targetSystemRadius, this.targetSystemRadius, 0, 0, 1, shapeWidth - this.targetSystemRadius, this.titleBarHeight);
		c.lineTo(this.targetSystemRadius, this.titleBarHeight);
		c.arcTo(this.targetSystemRadius, this.targetSystemRadius, 0, 0, 1, this.targetSystemRadius, 0);
		c.close();
		c.stroke();
	}
	else if(this.elementType === 'ln' || this.elementType === 'lc') // Logical Node or Logical Component
	{
		if (h > this.titleBarHeight)
		{
			c.setStrokeColor(this.getDividerLineColor(this.colorFamily, this.colorFillText));
			c.begin();
			c.moveTo(0, this.titleBarHeight);
			c.lineTo(shapeWidth, this.titleBarHeight);		
			c.stroke();
		}
		c.setStrokeColor(this.getLineColor(this.colorFamily));
		c.roundrect(0, 0, shapeWidth, shapeHeigth, this.cornerRadius, this.cornerRadius);
		c.stroke();
		if(this.elementType === 'lc')
		{
			c.setFillColor(this.getSelectedColorSpecification(this.colorFamily)['white']);
			//c.setFillColor(this.getSelectedColorSpecification(this.colorFamily)[this.colorFillIcon]);
			c.rect(componentDecoratorOffset, 12, componentDecoratorWidth, componentDecoratorHeight);
			c.fillAndStroke();
			c.rect(componentDecoratorOffset, 32, componentDecoratorWidth, componentDecoratorHeight);
			c.fillAndStroke();
		}
	}
	else if(this.elementType === 'pn' || this.elementType === 'pc') // Prescribed Node or Prescribed Component
	{
		if (h > this.titleBarHeight)
		{
			c.setStrokeColor(this.getDividerLineColor(this.colorFamily, this.colorFillText));
			c.begin();
			c.moveTo(0, this.titleBarHeight);
			c.lineTo(shapeWidth, this.titleBarHeight);		
			c.stroke();
		}
		c.setStrokeColor(this.getLineColor(this.colorFamily));
		c.rect(0, 0, shapeWidth, shapeHeigth);
		c.stroke();
		if(this.elementType === 'pc')
		{
			c.setFillColor(this.getSelectedColorSpecification(this.colorFamily)['white']);
			//c.setFillColor(this.getSelectedColorSpecification(this.colorFamily)[this.colorFillIcon]);
			c.rect(componentDecoratorOffset, 12, componentDecoratorWidth, componentDecoratorHeight);
			c.fillAndStroke();
			c.rect(componentDecoratorOffset, 32, componentDecoratorWidth, componentDecoratorHeight);
			c.fillAndStroke();
		}
	}
	else if(this.elementType === 'group')
	{
		c.setStrokeColor(this.getLineColor(this.colorFamily));
		c.rect(0, 0, shapeWidth, shapeHeigth);
		c.stroke();

		c.setFillColor(this.getLineColor(this.colorFamily));
		c.rect(0, 0, this.groupBarWidth, this.titleBarHeight);
		c.fill();
	}
};

/**
 * Function: paintIcon
 * 
 * Generic background painting implementation.
 */
mxIBM2MondrianBase.prototype.paintIcon = function(c, x, y, w, h)
{
	if (this.image != null && (this.iconImage != 'noIcon'))
	{	
		if(this.elementType === 'ts')
		{
			c.image(this.targetSystemRadius, this.iconSpacing, this.iconSize, this.iconSize, this.image, true, false, false);
		}
		else if(this.elementType === 'group')
		{
			c.image(this.groupBarWidth + this.iconSpacing, this.iconSpacing, this.iconSize, this.iconSize, this.image, true, false, false);
		}
		else
		{
			c.image(this.iconSpacing, this.iconSpacing, this.iconSize, this.iconSize, this.image, true, false, false);
		}
	}
};

mxIBM2MondrianBase.prototype.getIconBoxWidth = function()
{
	if (this.image != null && (this.iconImage != 'noIcon'))
	{	
		if(this.elementType === 'ts')
		{
			return (2 * this.targetSystemRadius + this.iconSize);
		}
		else if(this.elementType === 'group')
		{
			return (this.iconSpacing + this.iconSize + this.groupBarWidth);
		}		
		else
		{
			return (2 * this.iconSpacing + this.iconSize);
		}
	}
	else
	{
		if(this.elementType === 'group')
		{
			return this.groupBarWidth;
		}
		else
		{
			return 0;
		}	
	}
};


/**
 * Function: getLabelBounds
 * 
 * Returns the bounds for the label.
 */
mxIBM2MondrianBase.prototype.getLabelBounds = function(rect)
{
	return new mxRectangle(rect.x +  this.getIconBoxWidth() * this.scale, rect.y, rect.width -  (this.getIconBoxWidth() * this.scale), this.titleBarHeight * this.scale);
};

/**
 * Function: getConstraints
 * 
 * Returns the Connection Constraints for the shape.
 */
mxIBM2MondrianBase.prototype.getConstraints = function(style, w, h)
{
	var constr = [];

	if(this.elementType === 'actor')
	{
		var step = 30;
		var h = 0.5; // x coordinate of circle center
		var k = 0.5; // y coordinate of circle center
		var r = 0.5; // radius of circle
		for(var angle=0;  angle < 360;  angle+=step)
		{ 
			var x = h + r*Math.cos(angle * (Math.PI/180));
			var y = k - r*Math.sin(angle * (Math.PI/180));
			constr.push(new mxConnectionConstraint(new mxPoint(x,y), false));
		}
	}
	else
	{
		constr.push(new mxConnectionConstraint(new mxPoint(1, 0.25), false));
		constr.push(new mxConnectionConstraint(new mxPoint(1, 0.5), false));
		constr.push(new mxConnectionConstraint(new mxPoint(1, 0.75), false));
	
		constr.push(new mxConnectionConstraint(new mxPoint(0, 0.25), false));
		constr.push(new mxConnectionConstraint(new mxPoint(0, 0.5), false));
		constr.push(new mxConnectionConstraint(new mxPoint(0, 0.75), false));
	
		constr.push(new mxConnectionConstraint(new mxPoint(0.25, 0), false));
		constr.push(new mxConnectionConstraint(new mxPoint(0.5, 0), false));
		constr.push(new mxConnectionConstraint(new mxPoint(0.75, 0), false));
	
		constr.push(new mxConnectionConstraint(new mxPoint(0.25, 1), false));
		constr.push(new mxConnectionConstraint(new mxPoint(0.5, 1), false));
		constr.push(new mxConnectionConstraint(new mxPoint(0.75, 1), false));	
	}

	return (constr);
}

var vertexHandlerUnion = mxVertexHandler.prototype.union;
mxVertexHandler.prototype.union = function(bounds, dx, dy, index, gridEnabled, scale, tr, constrained)
{
  var result = vertexHandlerUnion.apply(this, arguments);

  if(this.state.style['shape'] === mxIBM2MondrianBase.prototype.cst.MONDRIAN_BASE)
  {
	var elementType = mxUtils.getValue(this.state.style, mxIBM2MondrianBase.prototype.cst.ELEMENT_TYPE, mxIBM2MondrianBase.prototype.cst.ELEMENT_TYPE_DEFAULT);

	if(elementType != null)
	{
	  var shapeLayout = mxUtils.getValue(this.state.style, mxIBM2MondrianBase.prototype.cst.SHAPE_LAYOUT, mxIBM2MondrianBase.prototype.cst.SHAPE_LAYOUT_DEFAULT);
	  if(elementType === 'actor') // Actor is always 48x48.
	  {
		  result.width = mxIBM2MondrianBase.prototype.titleBarHeight;
		  result.height = mxIBM2MondrianBase.prototype.titleBarHeight;
	  }
	  else if(elementType === 'ts') // Target System is always 48 height.
	  {
		  if(shapeLayout == 'collapsed')
		  {
			  result.width = 64;
			  result.height = mxIBM2MondrianBase.prototype.titleBarHeight;
		  }
		  else
		  {
			  result.width = Math.max(64, result.width);
			  result.height = mxIBM2MondrianBase.prototype.titleBarHeight;
		  }
	  }
	  else
	  {
		  if(shapeLayout == 'collapsed')
		  {
			  result.width = mxIBM2MondrianBase.prototype.titleBarHeight;
			  result.height = mxIBM2MondrianBase.prototype.titleBarHeight;
		  }
		  else
		  {
			  result.width = Math.max(mxIBM2MondrianBase.prototype.titleBarHeight, result.width);
			  result.height = Math.max(mxIBM2MondrianBase.prototype.titleBarHeight, result.height);
		  }
	  }
	}
  }

  return result;
};