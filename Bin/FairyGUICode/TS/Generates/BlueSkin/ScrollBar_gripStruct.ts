/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ScrollBar_grip from "../../Extends/BlueSkin/ScrollBar_grip";

export default class ScrollBar_gripStruct extends fairygui.GButton
{
	public m_button : fairygui.Controller;
	public m_icon : fairygui.GLoader;

	
	public static URL:string = "ui://stv9j6m6raoc6";
	
	public static DependPackages:string[] = ["BlueSkin"];

	
	public static createInstance():ScrollBar_grip {
		return <ScrollBar_grip><any>(fairygui.UIPackage.createObject("BlueSkin","ScrollBar_grip"));
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