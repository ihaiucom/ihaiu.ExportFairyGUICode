/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import TabButton from "../../Extends/BlackSkin/TabButton";

export default class TabButtonStruct extends fairygui.GButton
{
	public m_button : fairygui.Controller;
	public m_title : fairygui.GTextField;

	
	public static URL:string = "ui://s1yj9w6mp7th36";
	
	public static DependPackages:string[] = ["BlackSkin"];

	
	public static createInstance():TabButton {
		return <TabButton><any>(fairygui.UIPackage.createObject("BlackSkin","TabButton"));
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
		
		
	}
}