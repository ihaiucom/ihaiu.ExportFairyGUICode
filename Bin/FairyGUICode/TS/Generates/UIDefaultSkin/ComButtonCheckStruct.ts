/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ComButtonCheck from "../../Extends/UIDefaultSkin/ComButtonCheck";

export default class ComButtonCheckStruct extends fairygui.GButton
{
	public m_button : fairygui.Controller;
	public m_title : fairygui.GTextField;
	public m_icon : fairygui.GLoader;

	
	public static URL:string = "ui://snq31xvrsfsc3v";
	
	public static DependPackages:string[] = ["UIDefaultSkin"];

	
	public static createInstance():ComButtonCheck {
		return <ComButtonCheck><any>(fairygui.UIPackage.createObject("UIDefaultSkin","ComButtonCheck"));
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