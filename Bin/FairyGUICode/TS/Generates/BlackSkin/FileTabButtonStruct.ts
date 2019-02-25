/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import TabCloseButton from "../../Extends/BlackSkin/TabCloseButton.ts";

export default class FileTabButtonStruct extends fairygui.GButton
{
	public m_button : fairygui.Controller;
	public m_title : fairygui.GTextField;
	public m_icon : fairygui.GLoader;
	public m_closeButton : TabCloseButton;

	
	public static URL:string = "ui://s1yj9w6mp7th39";
	
	public static DependPackages:string[] = ["BlackSkin"];

	
	public static createInstance():FileTabButton {
		return <FileTabButton><any>(fairygui.UIPackage.createObject("BlackSkin","FileTabButton"));
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
		this.m_icon = <fairygui.GLoader><any>(this.getChild("icon"));
		this.m_closeButton = <TabCloseButton><any>(this.getChild("closeButton"));
		
		
	}
}