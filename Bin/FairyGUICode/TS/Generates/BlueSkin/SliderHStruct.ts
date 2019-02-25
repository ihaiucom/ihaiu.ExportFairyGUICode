/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import Button_icon from "../../Extends/BlueSkin/Button_icon.ts";

export default class SliderHStruct extends fairygui.GSlider
{
	public m_bar : fairygui.GImage;
	public m_grip : Button_icon;

	
	public static URL:string = "ui://stv9j6m6raoc1e";
	
	public static DependPackages:string[] = ["BlueSkin"];

	
	public static createInstance():SliderH {
		return <SliderH><any>(fairygui.UIPackage.createObject("BlueSkin","SliderH"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_bar = <fairygui.GImage><any>(this.getChild("bar"));
		this.m_grip = <Button_icon><any>(this.getChild("grip"));
		
		
	}
}