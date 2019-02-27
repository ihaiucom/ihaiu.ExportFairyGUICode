/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ListItem from "../../Extends/BlackSkin/ListItem";

export default class ListItemStruct extends fairygui.GButton
{
	public m_button : fairygui.Controller;
	public m_title : fairygui.GTextField;

	
	public static URL:string = "ui://s1yj9w6mp7th2n";
	
	public static DependPackages:string[] = ["BlackSkin"];

	
	public static createInstance():ListItem {
		return <ListItem><any>(fairygui.UIPackage.createObject("BlackSkin","ListItem"));
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