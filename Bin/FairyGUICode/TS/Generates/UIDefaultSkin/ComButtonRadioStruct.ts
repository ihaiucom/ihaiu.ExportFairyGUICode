/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ComButtonRadio from "../../Extends/UIDefaultSkin/ComButtonRadio";

export default class ComButtonRadioStruct extends fairygui.GButton
{
	public m_button : fairygui.Controller;
	public m_title : fairygui.GTextField;
	public m_icon : fairygui.GLoader;

	
	public static URL:string = "ui://snq31xvrsfsc3w";
	
	public static DependPackages:string[] = ["UIDefaultSkin"];

	
	public static createInstance():ComButtonRadio {
		return <ComButtonRadio><any>(fairygui.UIPackage.createObject("UIDefaultSkin","ComButtonRadio"));
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