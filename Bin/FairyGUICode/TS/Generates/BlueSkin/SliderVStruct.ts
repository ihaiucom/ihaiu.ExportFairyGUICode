/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import Button_icon from "../../Extends/BlueSkin/Button_icon.ts";

export default class SliderVStruct extends fairygui.GSlider
{
	public m_bar_v : fairygui.GImage;
	public m_grip : Button_icon;

	
	public static URL:string = "ui://stv9j6m6raoc1g";
	
	public static DependPackages:string[] = ["BlueSkin"];

	
	public static createInstance():SliderV {
		return <SliderV><any>(fairygui.UIPackage.createObject("BlueSkin","SliderV"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_bar_v = <fairygui.GImage><any>(this.getChild("bar_v"));
		this.m_grip = <Button_icon><any>(this.getChild("grip"));
		
		
	}
}