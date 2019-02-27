/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import WindowCloseButton from "../../Extends/BlackSkin/WindowCloseButton";

export default class WindowCloseButtonStruct extends fairygui.GButton
{
	public m_button : fairygui.Controller;

	
	public static URL:string = "ui://s1yj9w6mp7th3g";
	
	public static DependPackages:string[] = ["BlackSkin"];

	
	public static createInstance():WindowCloseButton {
		return <WindowCloseButton><any>(fairygui.UIPackage.createObject("BlackSkin","WindowCloseButton"));
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