/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import TabCloseButton from "../../Extends/BlackSkin/TabCloseButton.ts";

export default class ClosableTabButtonStruct extends fairygui.GButton
{
	public m_button : fairygui.Controller;
	public m_title : fairygui.GTextField;
	public m_closeButton : TabCloseButton;

	
	public static URL:string = "ui://s1yj9w6mp7th35";
	
	public static DependPackages:string[] = ["BlackSkin"];

	
	public static createInstance():ClosableTabButton {
		return <ClosableTabButton><any>(fairygui.UIPackage.createObject("BlackSkin","ClosableTabButton"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");

		
		this.m_title = <fairygui.GTextField><any>(this.getChild("title"));
		this.m_closeButton = <TabCloseButton><any>(this.getChild("closeButton"));
		
		
	}
}