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

	SHAPE_TYPE : 'shapeType',
	SHAPE_TYPE_DEFAULT : 'pn',
	SHAPE_LAYOUT : 'shapeLayout',
	SHAPE_LAYOUT_DEFAULT : 'expanded',

	ICON_IMAGE : 'iconImage',
	ICON_IMAGE_DEFAULT : 'stencilIcon',

	COLOR_FAMILY : 'colorFamily',
	COLOR_FAMILY_DEFAULT : 'blue',
	COLOR_FILL_ICON : 'colorFillIcon', 
	COLOR_FILL_ICON_DEFAULT : 'swatch_40', 
	COLOR_FILL_TEXT : 'colorFillText', 
	COLOR_FILL_TEXT_DEFAULT : 'white',
	COLOR_FILL_CONTAINER : 'colorFillContainer', 
	COLOR_FILL_CONTAINER_DEFAULT : 'white',

	POSITION_TEXT : 'positionText', 
	POSITION_TEXT_DEFAULT : 'bottom',
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
		case 'black':
			return {noColor: 'none', white: '#ffffff', swatch_10: '#f2f4f8', swatch_20: '#dde1e6', swatch_30: '#000000', swatch_40: '#000000', swatch_50: '#000000', swatch_60: '#000000'};	
		default:
			return {noColor: 'none', white: '#ffffff', swatch_10: '#f2f4f8', swatch_20: '#dde1e6', swatch_30: '#c1c7cd', swatch_40: '#a2a9b0', swatch_50: '#878d96', swatch_60: '#697077'};
	}
}

mxIBM2MondrianBase.prototype.getIconColor = function(colorFamily) {
	if(colorFamily === 'black')
		return '#ffffff';
	else
		return '#000000';
}

mxIBM2MondrianBase.prototype.getLineColor = function(colorFamily, shapeLayout, colorFillIcon) {
		if(shapeLayout === 'collapsed')
		{
			if(colorFillIcon === 'noColor' || colorFillIcon === 'white')
				return mxIBM2MondrianBase.prototype.getSelectedColorSpecification(colorFamily).swatch_60;
			else
				return mxIBM2MondrianBase.prototype.getSelectedColorSpecification(colorFamily)[colorFillIcon];
		}
		else
		{
			return mxIBM2MondrianBase.prototype.getSelectedColorSpecification(colorFamily).swatch_60;
		}
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

/**
 * Function: getGroupBarWidth
 *
 * Default width for the groupBar.
 */
mxIBM2MondrianBase.prototype.getGroupBarWidth = function(colorFillIcon)
{
	if(colorFillIcon === 'noColor')
		return 0;
	else
		return 6;
}

mxIBM2MondrianBase.prototype.customProperties = [
	{name:'shapeType', dispName:'Shape Type', type:'enum', defVal:'pn',
		enumList:[{val:'actor', dispName: 'Actor'}, {val:'ts', dispName: 'Target System'}, {val:'ln', dispName: 'Logical Node'}, {val:'lc', dispName: 'Logical Component'}, {val:'pn', dispName: 'Prescribed Node'}, {val:'pc', dispName: 'Prescribed Component'}, {val:'group', dispName: 'Group'}]},
	{name:'shapeLayout', dispName:'Shape Layout', type:'enum', defVal:'expanded',
		enumList:[{val:'collapsed', dispName: 'Collapsed'},{val:'expanded', dispName: 'Expanded'},{val:'custom', dispName: 'Custom'}]},
	{name:'iconImage', dispName:'Icon (Image)', type:'enum', defVal:'stencilIcon',
		enumList:[{val:'noIcon', dispName: '[no icon]'}, {val:'stencilIcon', dispName: '[stencil icon]'}, {val:'imageIcon', dispName: '[image icon]'}]},
	{name:'colorFamily', dispName:'Color', type:'enum', defVal:'blue',
		enumList:[{val:'blue', dispName: 'Blue'}, {val:'black', dispName: 'Black'}, {val:'cyan', dispName: 'Cyan'}, {val:'green', dispName: 'Green'}, {val:'gray', dispName: 'Gray'}, {val:'magenta', dispName: 'Magenta'}, {val:'purple', dispName: 'Purple'}, {val:'red', dispName: 'Red'}, {val:'teal', dispName: 'Teal'}]},
	{name:'colorFillIcon', dispName:'Fill (Icon)', type:'enum', defVal:'swatch_40',
		enumList:[{val:'noColor', dispName: 'None'}, {val:'swatch_30', dispName: 'Light'}, {val:'swatch_40', dispName: 'Medium'}, {val:'swatch_50', dispName: 'Dark'}]},
	{name:'colorFillText', dispName:'Fill (Text)', type:'enum', defVal:'white',
		enumList:[{val:'noColor', dispName: 'None'}, {val:'white', dispName: 'White'}, {val:'swatch_10', dispName: 'Very Light'}]},
	{name:'colorFillContainer', dispName:'Fill (Container)', type:'enum', defVal:'white',
		enumList:[{val:'noColor', dispName: 'None'}, {val:'white', dispName: 'White'}, {val:'swatch_10', dispName: 'Very Light'}]},
	{name:'positionText', dispName:'Position (Text)', type:'enum', defVal:'bottom',
		enumList:[{val:'bottom', dispName: 'Bottom'}, {val:'top', dispName: 'Top'}, {val:'left', dispName: 'Left'}, {val:'right', dispName: 'Right'}]},
	];

mxCellRenderer.registerShape(mxIBM2MondrianBase.prototype.cst.MONDRIAN_BASE, mxIBM2MondrianBase);

/**
 * Variable: cornerRadius
 *
 * Default radius for rounded Logical elements. Default is 8.
 */
mxIBM2MondrianBase.prototype.cornerRadius = 8;

/**
 * Variable: textSpacing
 *
 * Default value for text spacing. Default is 8.
 */
mxIBM2MondrianBase.prototype.textSpacing = 8;

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
 * Variable: shapeWidthIconView
 *
 * Default width and height for the titleBarHeight. Default is 48.
 */
mxIBM2MondrianBase.prototype.shapeWidthIconView = 48;

/**
 * Variable: shapeHeightIconView
 *
 * Default width and height for the titleBarHeight. Default is 48.
 */
mxIBM2MondrianBase.prototype.shapeHeightIconView = 48;

/**
 * Variable: titleBarWidthMinimum
 *
 * Default width and height for the titleBarWidthMinimum. Default is 144.
 */
mxIBM2MondrianBase.prototype.titleBarWidthMinimum = 144;

/**
 * Function: init
 *
 * Initializes the shape and the <indicator>.
 */
mxIBM2MondrianBase.prototype.init = function(container)
{
	if(Editor.config != null && Editor.config[mxIBM2MondrianBase.prototype.cst.MONDRIAN_BASE])
	{
		for (var key in Editor.config[mxIBM2MondrianBase.prototype.cst.MONDRIAN_BASE]['icon_stencil_libraries']) {
			mxStencilRegistry.loadStencilSet(
				Editor.config[mxIBM2MondrianBase.prototype.cst.MONDRIAN_BASE]['icon_stencil_libraries'][key]);
		}
	}

	mxShape.prototype.init.apply(this, arguments);

	/* temporary function to support coversion of old diagrams  */
	const tmpStyle = this.state.view.graph.model.getStyle(this.state.cell);
	
	if(tmpStyle != null && (tmpStyle.indexOf('elementType') > 0))
	{	
		//console.log(this.state.view.graph.model.getStyle(this.state.cell));
		this.state.view.graph.model.beginUpdate();
		try
		{
			this.state.style['shapeType'] = mxUtils.getValue(this.state.style, 'elementType', null);
			this.state.view.graph.model.setStyle(this.state.cell, tmpStyle.replace('elementType','shapeType'));
		}
		finally
		{
			this.state.view.graph.model.endUpdate();
		}
	}

	/*** START Registration of Event Listener */
	this.cellID = this.state.cell.id;
	var changeListener = mxUtils.bind(this, function(evt)
	{
		try
		{
			if(evt.properties.change.constructor.name === 'mxValueChange' && (evt.properties.change.cell.id === this.cellID))
			{
				const currentIconAttribute = evt.properties.change.value.attributes.getNamedItem('Icon-Name');
				const previousIconAttribute = evt.properties.change.previous.attributes.getNamedItem('Icon-Name');

				const currentIconName = (currentIconAttribute != null) ? currentIconAttribute.value : null;
				const previousIconName = (previousIconAttribute != null) ?  previousIconAttribute.value : null;
				
				if(currentIconName != previousIconName)
					this.redraw();
			}
			else if(evt.properties.change.constructor.name === 'mxStyleChange' && (evt.properties.change.cell.id === this.cellID))
			{
				const styleCurrent = evt.properties.change.style;
				
				const isMondrianShape = (styleCurrent.indexOf(mxIBM2MondrianBase.prototype.cst.MONDRIAN_BASE) > 0);
				if(isMondrianShape)
				{
					const stylePrevious = evt.properties.change.previous;

					const shapeTypeCurrent = mxIBM2MondrianBase.prototype.getStyleValue(styleCurrent, mxIBM2MondrianBase.prototype.cst.SHAPE_TYPE);
					const shapeTypePrevious = mxIBM2MondrianBase.prototype.getStyleValue(stylePrevious, mxIBM2MondrianBase.prototype.cst.SHAPE_TYPE);

					const shapeLayoutCurrent = mxIBM2MondrianBase.prototype.getStyleValue(styleCurrent, mxIBM2MondrianBase.prototype.cst.SHAPE_LAYOUT);
					const shapeLayoutPrevious = mxIBM2MondrianBase.prototype.getStyleValue(stylePrevious, mxIBM2MondrianBase.prototype.cst.SHAPE_LAYOUT);

					const positionTextCurrent = mxIBM2MondrianBase.prototype.getStyleValue(styleCurrent, mxIBM2MondrianBase.prototype.cst.POSITION_TEXT);
					const positionTextPrevious = mxIBM2MondrianBase.prototype.getStyleValue(stylePrevious, mxIBM2MondrianBase.prototype.cst.POSITION_TEXT);

					var styleMustUpdate = (shapeTypeCurrent != shapeTypePrevious) || (shapeLayoutCurrent != shapeLayoutPrevious || (positionTextCurrent != positionTextPrevious));
					if(styleMustUpdate)
					{
						// Define the new style
						var styleNew = styleCurrent;
						styleNew = mxIBM2MondrianBase.prototype.getStyle(styleNew, shapeTypeCurrent, shapeLayoutCurrent, positionTextCurrent);
						styleMustUpdate = mxIBM2MondrianBase.prototype.cellMustRestyle(styleCurrent, styleNew);
					}
					
					var geoMustUpdate = (shapeTypeCurrent != shapeTypePrevious) || (shapeLayoutCurrent != shapeLayoutPrevious);
					if(geoMustUpdate)
					{
						//Define the new Geometery
						const geoCurrent = evt.properties.change.cell.geometry;
						var newRect = mxIBM2MondrianBase.prototype.getRectangle(
							new mxRectangle(geoCurrent.x, geoCurrent.y, geoCurrent.width, geoCurrent.height), 
								shapeTypeCurrent, shapeLayoutCurrent, 'change listener');
				
						geoMustUpdate = mxIBM2MondrianBase.prototype.cellMustResize(geoCurrent, newRect);
					}

					if(styleMustUpdate || geoMustUpdate)
					{
						this.state.view.graph.model.beginUpdate();
						try
						{				
							if(styleMustUpdate)
							{
								this.state.view.graph.model.setStyle(this.state.cell, styleNew);
							}
								
							if(geoMustUpdate)
							{
								this.state.view.graph.model.setGeometry(this.state.cell, 
									new mxGeometry(newRect.x, newRect.y, newRect.width, newRect.height));
							}
						}
						finally
						{
							this.state.view.graph.model.endUpdate();
						}
					}
				}
			}
			else
			{
				// do nothing
			}
		}
		catch(err)
		{
			// do nothing
		}
	});
	
	this.state.view.graph.model.addListener(mxEvent.EXECUTED, mxUtils.bind(this, function(sender, evt)
	{
		changeListener(evt);
	}));
	/*** END Registration of Event Listener */
};	

mxIBM2MondrianBase.prototype.getStyleValue = function(style, key)
{
	var value = 'undefined';
	var keyIndex = style.indexOf(key);

	if(keyIndex > 0)
	{	
		var valueSeparator = style.indexOf('=', keyIndex + 1);
		var keySeparator = style.indexOf(';', valueSeparator + 1);

		if(keySeparator < 0)
			keySeparator = style.length;
		
		value = style.substring(valueSeparator + 1, keySeparator);
	}

	return value;
}

/**
 * Function: redraw
 *
 * Reconfigures this shape. This will update the attributees of the Shape.
 */
mxIBM2MondrianBase.prototype.redraw = function()
{
	this.shapeType = mxUtils.getValue(this.style, mxIBM2MondrianBase.prototype.cst.SHAPE_TYPE, mxIBM2MondrianBase.prototype.cst.SHAPE_TYPE_DEFAULT);	
	this.shapeLayout = mxUtils.getValue(this.style, mxIBM2MondrianBase.prototype.cst.SHAPE_LAYOUT, mxIBM2MondrianBase.prototype.cst.SHAPE_LAYOUT_DEFAULT);

	if(this.shapeType === 'group') // a group can only be expanded so should ignore the shapeLayout setting
		this.shapeLayout = 'expanded';
	
	this.iconImage = mxUtils.getValue(this.style, mxIBM2MondrianBase.prototype.cst.ICON_IMAGE, mxIBM2MondrianBase.prototype.cst.ICON_IMAGE_DEFAULT);
	this.colorFamily = mxUtils.getValue(this.style, mxIBM2MondrianBase.prototype.cst.COLOR_FAMILY, mxIBM2MondrianBase.prototype.cst.COLOR_FAMILY_DEFAULT);
	this.colorFillIcon = mxUtils.getValue(this.style, mxIBM2MondrianBase.prototype.cst.COLOR_FILL_ICON, mxIBM2MondrianBase.prototype.cst.COLOR_FILL_ICON_DEFAULT);
	this.colorFillText = mxUtils.getValue(this.style, mxIBM2MondrianBase.prototype.cst.COLOR_FILL_TEXT, mxIBM2MondrianBase.prototype.cst.COLOR_FILL_TEXT_DEFAULT);
	this.colorFillContainer = mxUtils.getValue(this.style, mxIBM2MondrianBase.prototype.cst.COLOR_FILL_CONTAINER, mxIBM2MondrianBase.prototype.cst.COLOR_FILL_CONTAINER_DEFAULT);

	this.positionText = mxUtils.getValue(this.style, mxIBM2MondrianBase.prototype.cst.POSITION_TEXT, mxIBM2MondrianBase.prototype.cst.POSITION_TEXT_DEFAULT);

	mxShape.prototype.redraw.apply(this, arguments);
};

mxIBM2MondrianBase.prototype.cellMustResize = function(currentGeo, newGeo)
{
	if(currentGeo.width != newGeo.width)
		return true;
	else if(currentGeo.height != newGeo.height)
		return true;
	else
		return false;
}

mxIBM2MondrianBase.prototype.cellMustRestyle = function(currentStyle, newStyle)
{
	return newStyle != currentStyle;
}


mxIBM2MondrianBase.prototype.paintVertexShape = function(c, x, y, w, h)
{
	c.translate(x, y);
	
	this.paintContainer(c, x, y, w, h);
	this.paintTitleBar(c, x, y, w, h);
	this.paintIconBox(c, x, y, w, h);
	this.paintIcon(c, x, y, w, h);
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
		if(this.shapeType === 'ln' || this.shapeType === 'lc')
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
		if(this.shapeType === 'ln' || this.shapeType === 'lc')
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
		else if(this.shapeType === 'pn' || this.shapeType === 'pc' || this.shapeType === 'group')
		{
			c.setFillColor(this.getSelectedColorSpecification(this.colorFamily)[this.colorFillText]);
			c.rect(0, 0, w, minHeight);
			c.fill();
		}
		else if(this.shapeType === 'ts')
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
	if(this.shapeType === 'group')
		c.setFillColor(this.getSelectedColorSpecification(this.colorFamily)['noColor']);
	else
		c.setFillColor(this.getSelectedColorSpecification(this.colorFamily)[this.colorFillIcon]);

	const minWidth = Math.min(w, this.getIconBoxWidth());
	const minHeight = Math.min(h, this.titleBarHeight);

	if(minWidth > 0)
	{
		if(this.shapeType === 'actor')
		{
			c.ellipse(0, 0, minWidth, minHeight);
		}
		else if(this.shapeType === 'ts')
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
		else if(this.shapeType === 'ln' || this.shapeType === 'lc') // Logical Node or Logical Component
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
		else if(this.shapeType === 'pn' || this.shapeType === 'pc' || this.shapeType === 'group')
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

	if(this.shapeLayout == 'collapsed' || this.shapeType === 'actor')
	{
		shapeWidth = this.getIconBoxWidth();
		shapeHeigth = this.getIconBoxWidth();
	}
	
	if(this.shapeType === 'actor')
	{
		c.setStrokeColor(this.getLineColor(this.colorFamily, this.shapeLayout, this.colorFillIcon));
		c.ellipse(0, 0, shapeWidth, shapeHeigth);
		c.stroke();
	}
	else if(this.shapeType === 'ts')
	{
		c.setStrokeColor(this.getLineColor(this.colorFamily, this.shapeLayout, this.colorFillIcon));
		c.begin();
		c.moveTo(this.targetSystemRadius, 0);
		c.lineTo(shapeWidth - this.targetSystemRadius, 0);
		c.arcTo(this.targetSystemRadius, this.targetSystemRadius, 0, 0, 1, shapeWidth - this.targetSystemRadius, this.titleBarHeight);
		c.lineTo(this.targetSystemRadius, this.titleBarHeight);
		c.arcTo(this.targetSystemRadius, this.targetSystemRadius, 0, 0, 1, this.targetSystemRadius, 0);
		c.close();
		c.stroke();
	}
	else if(this.shapeType === 'ln' || this.shapeType === 'lc') // Logical Node or Logical Component
	{
		if (h > this.titleBarHeight)
		{
			c.setStrokeColor(this.getDividerLineColor(this.colorFamily, this.colorFillText));
			c.begin();
			c.moveTo(0, this.titleBarHeight);
			c.lineTo(shapeWidth, this.titleBarHeight);		
			c.stroke();
		}
		c.setStrokeColor(this.getLineColor(this.colorFamily, this.shapeLayout, this.colorFillIcon));
		c.roundrect(0, 0, shapeWidth, shapeHeigth, this.cornerRadius, this.cornerRadius);
		c.stroke();
		if(this.shapeType === 'lc')
		{
			c.setFillColor(this.getSelectedColorSpecification(this.colorFamily)['white']);
			//c.setFillColor(this.getSelectedColorSpecification(this.colorFamily)[this.colorFillIcon]);
			c.rect(componentDecoratorOffset, 12, componentDecoratorWidth, componentDecoratorHeight);
			c.fillAndStroke();
			c.rect(componentDecoratorOffset, 32, componentDecoratorWidth, componentDecoratorHeight);
			c.fillAndStroke();
		}
	}
	else if(this.shapeType === 'pn' || this.shapeType === 'pc') // Prescribed Node or Prescribed Component
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
		if(this.shapeType === 'pc')
		{
			c.setFillColor(this.getSelectedColorSpecification(this.colorFamily)['white']);
			//c.setFillColor(this.getSelectedColorSpecification(this.colorFamily)[this.colorFillIcon]);
			c.rect(componentDecoratorOffset, 12, componentDecoratorWidth, componentDecoratorHeight);
			c.fillAndStroke();
			c.rect(componentDecoratorOffset, 32, componentDecoratorWidth, componentDecoratorHeight);
			c.fillAndStroke();
		}
	}
	else if(this.shapeType === 'group')
	{
		c.setStrokeColor(this.getLineColor(this.colorFamily, this.shapeLayout, this.colorFillIcon));
		c.rect(0, 0, shapeWidth, shapeHeigth);
		c.stroke();

		c.setFillColor(this.getLineColor(this.colorFamily, this.shapeLayout, this.colorFillIcon));
		c.rect(0, 0, this.getGroupBarWidth(this.colorFillIcon), this.titleBarHeight);
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
	var positionX = this.iconSpacing;
	var positionY = this.iconSpacing;

	if(this.shapeType === 'ts')
	{
		positionX = this.targetSystemRadius;
	}
	else if(this.shapeType === 'group')
	{
		positionX = this.getGroupBarWidth(this.colorFillIcon) + this.iconSpacing;
	}

	if(this.iconImage === 'stencilIcon')
	{
		var iconStencilName = this.state.cell.getAttribute('Icon-Name',null);
		if(iconStencilName != null)
		{
			var bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2mondrian.' + iconStencilName);
			if(bgSt1 == null)
				bgSt1 = mxStencilRegistry.getStencil('mxgraph.ibm2mondrian.undefined');

			c.save();
			c.setStrokeColor('none');
			c.setFillColor(this.getIconColor(this.colorFamily));
			c.setDashed(false);
			bgSt1.strokewidth = 1;
			bgSt1.drawShape(c, this, positionX, positionY, this.iconSize, this.iconSize);
			c.restore();
		}
	}
	else if(this.iconImage === 'imageIcon' && this.image != null && this.image != '')
	{
		c.image(positionX, positionY, this.iconSize, this.iconSize, this.image, true, false, false);
	}
	else
	{
		// do nothing
	}
};

mxIBM2MondrianBase.prototype.getIconBoxWidth = function()
{
	if(this.iconImage === 'noIcon')
	{
		switch(this.shapeType)
		{
			case 'group':
				return this.getGroupBarWidth(this.colorFillIcon);
			default:
				return 0;
		}
	}
	else
	{
		switch(this.shapeType)
		{
			case 'ts':
				return (2 * this.targetSystemRadius + this.iconSize);
			case 'group':
				return (this.iconSpacing + this.iconSize + this.getGroupBarWidth(this.colorFillIcon));
			default:
				return (2 * this.iconSpacing + this.iconSize);
		}
	}
};


/**
 * Function: getStyle
 * 
 * Returns the style based on shapeType & shapeLayout.
 */
var shapeStyle = {};
mxIBM2MondrianBase.prototype.getStyle = function(style, shapeType, shapeLayout, positionText)
{
	//const labelWidth = mxUtils.getValue(style, 'labelWidth', 100);
	if(shapeType === 'group')
	{
		style = mxUtils.setStyle(style, 'container', 1);
		style = mxUtils.setStyle(style, 'collapsible', 0);
		style = mxUtils.setStyle(style, 'recursiveResize', 0);
	}

	if(shapeLayout === 'collapsed' || shapeLayout === 'expanded')
	{
		// default setting is for 'expanded'
		shapeStyle.verticalLabelPosition = mxConstants.ALIGN_MIDDLE;
		shapeStyle.labelPosition = mxConstants.ALIGN_CENTER;
		shapeStyle.verticalAlign = mxConstants.ALIGN_MIDDLE;
		shapeStyle.align = mxConstants.ALIGN_LEFT;
		shapeStyle.spacing = 0;
		shapeStyle.spacingLeft = this.textSpacingLeft;
		shapeStyle.spacingRight = this.textSpacingRight;
		shapeStyle.spacingTop = 0;
		shapeStyle.spacingBottom = 0;
		//shapeStyle.labelWidth = null;

		if(shapeLayout === 'collapsed')
		{
			if(positionText === 'top')
			{
				shapeStyle.verticalLabelPosition = mxConstants.ALIGN_TOP;
				shapeStyle.labelPosition = mxConstants.ALIGN_CENTER;
				shapeStyle.verticalAlign = mxConstants.ALIGN_BOTTOM;
				shapeStyle.align = mxConstants.ALIGN_CENTER;
				shapeStyle.spacing = 0;
				shapeStyle.spacingLeft = 0;
				shapeStyle.spacingRight = 0;
				shapeStyle.spacingTop = 0;
				shapeStyle.spacingBottom = this.textSpacing;
				//shapeStyle.labelWidth = labelWidth;
			}
			else if(positionText === 'left')
			{
				shapeStyle.verticalLabelPosition = mxConstants.ALIGN_MIDDLE;
				shapeStyle.labelPosition = mxConstants.ALIGN_LEFT;
				shapeStyle.verticalAlign = mxConstants.ALIGN_MIDDLE;
				shapeStyle.align = mxConstants.ALIGN_RIGHT;
				shapeStyle.spacing = 0;
				shapeStyle.spacingLeft = 0;
				shapeStyle.spacingRight = this.textSpacing;
				shapeStyle.spacingTop = 0;
				shapeStyle.spacingBottom = 0;
				//shapeStyle.labelWidth = labelWidth;
			}		
			else if(positionText === 'right')
			{
				shapeStyle.verticalLabelPosition = mxConstants.ALIGN_MIDDLE;
				shapeStyle.labelPosition = mxConstants.ALIGN_RIGHT;
				shapeStyle.verticalAlign = mxConstants.ALIGN_MIDDLE;
				shapeStyle.align = mxConstants.ALIGN_LEFT;
				shapeStyle.spacing = 0;
				shapeStyle.spacingLeft = this.textSpacing;
				shapeStyle.spacingRight = 0;
				shapeStyle.spacingTop = 0;
				shapeStyle.spacingBottom = 0;
				//shapeStyle.labelWidth = labelWidth;
			}		
			else // default is bottom
			{
				shapeStyle.verticalLabelPosition = mxConstants.ALIGN_BOTTOM;
				shapeStyle.labelPosition = mxConstants.ALIGN_CENTER;
				shapeStyle.verticalAlign = mxConstants.ALIGN_TOP;
				shapeStyle.align = mxConstants.ALIGN_CENTER;
				shapeStyle.spacing = 0;
				shapeStyle.spacingLeft = 0;
				shapeStyle.spacingRight = 0;
				shapeStyle.spacingTop = this.textSpacing;
				shapeStyle.spacingBottom = 0;
				//shapeStyle.labelWidth = labelWidth;
			}
		}

		style = mxUtils.setStyle(style, mxConstants.STYLE_VERTICAL_LABEL_POSITION, shapeStyle.verticalLabelPosition);
		style = mxUtils.setStyle(style, mxConstants.STYLE_LABEL_POSITION, shapeStyle.labelPosition);
		style = mxUtils.setStyle(style, mxConstants.STYLE_VERTICAL_ALIGN, shapeStyle.verticalAlign);
		style = mxUtils.setStyle(style, mxConstants.STYLE_ALIGN, shapeStyle.align);

		style = mxUtils.setStyle(style, mxConstants.STYLE_SPACING, shapeStyle.spacing);
		style = mxUtils.setStyle(style, mxConstants.STYLE_SPACING_LEFT, shapeStyle.spacingLeft);
		style = mxUtils.setStyle(style, mxConstants.STYLE_SPACING_RIGHT, shapeStyle.spacingRight);
		style = mxUtils.setStyle(style, mxConstants.STYLE_SPACING_TOP, shapeStyle.spacingTop);
		style = mxUtils.setStyle(style, mxConstants.STYLE_SPACING_BOTTOM, shapeStyle.spacingBottom);

		//style = mxUtils.setStyle(style, mxConstants.STYLE_LABEL_WIDTH, shapeStyle.labelWidth);
	}
	else // custom does not control these styles so you can use the UI to change it yourselves
	{
	}

	return style;
}
/**
 * Function: getRectangle
 * 
 * Returns the rectangle based on shapeType & shapeLayout.
 */
mxIBM2MondrianBase.prototype.getRectangle = function(rect, shapeType, shapeLayout, whoCalled)
{
	if(shapeType != null)
	{
		if(shapeType === 'actor') // Actor is always 48x48.
	 	{
			rect.width = mxIBM2MondrianBase.prototype.titleBarHeight;
			rect.height = mxIBM2MondrianBase.prototype.titleBarHeight;
		}
		else if(shapeType === 'ts') // Target System is always 48 height.
		{
			if(shapeLayout === 'collapsed')
			{
				rect.width = 64;
				rect.height = mxIBM2MondrianBase.prototype.titleBarHeight;
			}
			else if(shapeLayout === 'expanded')
			{
				rect.width = Math.max(64, mxIBM2MondrianBase.prototype.titleBarWidthMinimum, rect.width);
				rect.height = mxIBM2MondrianBase.prototype.titleBarHeight;
			}
			else // custom, do nothing
			{

			}
		}
		else if(shapeType === 'group')
		{
			if(shapeLayout === 'collapsed' || shapeLayout === 'expanded')
			{
				rect.width = Math.max(mxIBM2MondrianBase.prototype.titleBarWidthMinimum, rect.width);
				rect.height = Math.max(mxIBM2MondrianBase.prototype.titleBarHeight, rect.height);	
			}
			else
			{

			}
		}
		else
		{
			if(shapeLayout === 'collapsed')
			{
				rect.width = mxIBM2MondrianBase.prototype.titleBarHeight;
				rect.height = mxIBM2MondrianBase.prototype.titleBarHeight;
			}
			else if(shapeLayout === 'expanded')
			{
				rect.width = Math.max(mxIBM2MondrianBase.prototype.titleBarWidthMinimum, rect.width);
				rect.height = Math.max(mxIBM2MondrianBase.prototype.titleBarHeight, rect.height);
			}
			else // custom, do nothing
			{

			}
		}
	}

	return rect;
};

/**
 * Function: getLabelBounds
 * 
 * Returns the bounds for the label.
 */
mxIBM2MondrianBase.prototype.getLabelBounds = function(rect)
{
	return new mxRectangle(rect.x + this.getIconBoxWidth() * this.scale, 
					rect.y,
					rect.width -  (this.getIconBoxWidth() * this.scale),
					this.titleBarHeight * this.scale);
};

/**
 * Function: getConstraints
 * 
 * Returns the Connection Constraints for the shape.
 */
mxIBM2MondrianBase.prototype.getConstraints = function(style, w, h)
{
	var constr = [];

	if(this.shapeType === 'actor')
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
  var rect = vertexHandlerUnion.apply(this, arguments);

  if(this.state.style['shape'] === mxIBM2MondrianBase.prototype.cst.MONDRIAN_BASE)
  {
	const shapeType = mxUtils.getValue(this.state.style, mxIBM2MondrianBase.prototype.cst.SHAPE_TYPE, mxIBM2MondrianBase.prototype.cst.SHAPE_TYPE_DEFAULT);
	const shapeLayout = mxUtils.getValue(this.state.style, mxIBM2MondrianBase.prototype.cst.SHAPE_LAYOUT, mxIBM2MondrianBase.prototype.cst.SHAPE_LAYOUT_DEFAULT);
	rect = mxIBM2MondrianBase.prototype.getRectangle(rect, shapeType, shapeLayout, 'mxVertexHandler');
  }

  return rect;
};

//mxVertexHandler.prototype.livePreview = true;
mxVertexHandler.prototype.createCustomHandles = function()
{
	if(this.state.style['shape'] === mxIBM2MondrianBase.prototype.cst.MONDRIAN_BASE)
	{
		// Implements the handle for the first divider
		var cursor = 'ew-resize'
		var textHandle = new mxHandle(this.state, cursor);
		
		textHandle.getPosition = function(bounds)
		{
			var labelWidth = Math.max(48, parseFloat(mxUtils.getValue(this.state.style, 'labelWidth', 100)));
						
			switch(mxUtils.getValue(this.state.style, 'positionText', null)) {
				case 'left':
					return new mxPoint(bounds.x - labelWidth - mxIBM2MondrianBase.prototype.textSpacing, bounds.getCenterY());
				case 'right':
					return new mxPoint(bounds.x + bounds.width + labelWidth + mxIBM2MondrianBase.prototype.textSpacing, bounds.getCenterY());
				case 'top':
					return new mxPoint(bounds.getCenterX() - labelWidth/2, bounds.y - mxIBM2MondrianBase.prototype.textSpacing);
				case 'bottom':
					return new mxPoint(bounds.getCenterX() - labelWidth/2, bounds.y + bounds.height + mxIBM2MondrianBase.prototype.textSpacing);
				default:
					return null;
				}
		};
		
		textHandle.setPosition = function(bounds, pt)
		{		
			switch(mxUtils.getValue(this.state.style, 'positionText', null)) {
				case 'left':
					this.state.style['labelWidth'] = Math.round(bounds.x - pt.x - mxIBM2MondrianBase.prototype.textSpacing);
					break;
				case 'right':
					this.state.style['labelWidth'] = Math.round(pt.x - bounds.x - bounds.width - mxIBM2MondrianBase.prototype.textSpacing);
					break;
				case 'top':
					this.state.style['labelWidth'] = Math.round((bounds.getCenterX() - pt.x) * 2);
					break;
				case 'bottom':
					this.state.style['labelWidth'] = Math.round((bounds.getCenterX() - pt.x) * 2);
					break;
				default:
					return null;
				}
		};
		
		textHandle.execute = function()
		{
			this.copyStyle('labelWidth');
		}

		textHandle.ignoreGrid = true;

		return [textHandle];
	}

	return null;
};