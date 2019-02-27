/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ScrollLeftButton from "../../Extends/BlackSkin/ScrollLeftButton";

export default class ScrollLeftButtonStruct extends fairygui.GButton
{
	public m_button : fairygui.Controller;

	
	public static URL:string = "ui://s1yj9w6mp7th33";
	
	public static DependPackages:string[] = ["BlackSkin"];

	
	public static createInstance():ScrollLeftButton {
		return <ScrollLeftButton><any>(fairygui.UIPackage.createObject("BlackSkin","ScrollLeftButton"));
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