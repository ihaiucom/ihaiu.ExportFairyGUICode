/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PopupMenu1 from "../../Extends/UIDefaultSkin/PopupMenu1";

export default class PopupMenu1Struct extends fairygui.GComponent
{
	public m_list : fairygui.GList;

	
	public static URL:string = "ui://snq31xvrsfsc49";
	
	public static DependPackages:string[] = ["UIDefaultSkin"];

	
	public static createInstance():PopupMenu1 {
		return <PopupMenu1><any>(fairygui.UIPackage.createObject("UIDefaultSkin","PopupMenu1"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_list = <fairygui.GList><any>(this.getChild("list"));
		
		
	}
}