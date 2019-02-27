/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PopupMenu1_item from "../../Extends/UIDefaultSkin/PopupMenu1_item";

export default class PopupMenu1_itemStruct extends fairygui.GButton
{
	public m_button : fairygui.Controller;
	public m_checked : fairygui.Controller;
	public m_title : fairygui.GTextField;

	
	public static URL:string = "ui://snq31xvrsfsc48";
	
	public static DependPackages:string[] = ["UIDefaultSkin"];

	
	public static createInstance():PopupMenu1_item {
		return <PopupMenu1_item><any>(fairygui.UIPackage.createObject("UIDefaultSkin","PopupMenu1_item"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");
		this.m_checked = this.getController("checked");

		
		this.m_title = <fairygui.GTextField><any>(this.getChild("title"));
		
		
	}
}