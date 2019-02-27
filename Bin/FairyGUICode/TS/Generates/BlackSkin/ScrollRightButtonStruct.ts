/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ScrollRightButton from "../../Extends/BlackSkin/ScrollRightButton";

export default class ScrollRightButtonStruct extends fairygui.GButton
{
	public m_button : fairygui.Controller;

	
	public static URL:string = "ui://s1yj9w6mp7th32";
	
	public static DependPackages:string[] = ["BlackSkin"];

	
	public static createInstance():ScrollRightButton {
		return <ScrollRightButton><any>(fairygui.UIPackage.createObject("BlackSkin","ScrollRightButton"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");

		
		
		
	}
}