/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ScrollDownButton from "../../Extends/BlackSkin/ScrollDownButton";

export default class ScrollDownButtonStruct extends fairygui.GButton
{
	public m_button : fairygui.Controller;

	
	public static URL:string = "ui://s1yj9w6mp7th2y";
	
	public static DependPackages:string[] = ["BlackSkin"];

	
	public static createInstance():ScrollDownButton {
		return <ScrollDownButton><any>(fairygui.UIPackage.createObject("BlackSkin","ScrollDownButton"));
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