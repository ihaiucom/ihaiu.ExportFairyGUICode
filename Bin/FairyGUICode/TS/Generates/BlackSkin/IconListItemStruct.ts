/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import IconListItem from "../../Extends/BlackSkin/IconListItem";

export default class IconListItemStruct extends fairygui.GButton
{
	public m_button : fairygui.Controller;
	public m_title : fairygui.GTextField;
	public m_icon : fairygui.GLoader;

	
	public static URL:string = "ui://s1yj9w6mp7th2o";
	
	public static DependPackages:string[] = ["BlackSkin"];

	
	public static createInstance():IconListItem {
		return <IconListItem><any>(fairygui.UIPackage.createObject("BlackSkin","IconListItem"));
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
		
		
	}
}