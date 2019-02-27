/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import Button_icon from "../../Extends/BlueSkin/Button_icon";

export default class Button_iconStruct extends fairygui.GButton
{
	public m_button : fairygui.Controller;
	public m_icon : fairygui.GLoader;

	
	public static URL:string = "ui://stv9j6m6raoc1f";
	
	public static DependPackages:string[] = ["BlueSkin"];

	
	public static createInstance():Button_icon {
		return <Button_icon><any>(fairygui.UIPackage.createObject("BlueSkin","Button_icon"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");

		
		this.m_icon = <fairygui.GLoader><any>(this.getChild("icon"));
		
		
	}
}