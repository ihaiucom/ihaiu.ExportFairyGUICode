/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PopupMenuItem from "../../Extends/BlackSkin/PopupMenuItem";

export default class PopupMenuItemStruct extends fairygui.GButton
{
	public m_button : fairygui.Controller;
	public m_title : fairygui.GTextField;

	
	public static URL:string = "ui://s1yj9w6mp7th2r";
	
	public static DependPackages:string[] = ["BlackSkin"];

	
	public static createInstance():PopupMenuItem {
		return <PopupMenuItem><any>(fairygui.UIPackage.createObject("BlackSkin","PopupMenuItem"));
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