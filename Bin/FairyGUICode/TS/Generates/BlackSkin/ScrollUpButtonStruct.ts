/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ScrollUpButton from "../../Extends/BlackSkin/ScrollUpButton";

export default class ScrollUpButtonStruct extends fairygui.GButton
{
	public m_button : fairygui.Controller;

	
	public static URL:string = "ui://s1yj9w6mp7th2x";
	
	public static DependPackages:string[] = ["BlackSkin"];

	
	public static createInstance():ScrollUpButton {
		return <ScrollUpButton><any>(fairygui.UIPackage.createObject("BlackSkin","ScrollUpButton"));
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