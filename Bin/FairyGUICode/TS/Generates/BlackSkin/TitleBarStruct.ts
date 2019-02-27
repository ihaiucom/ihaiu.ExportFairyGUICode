/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import TitleBar from "../../Extends/BlackSkin/TitleBar";

export default class TitleBarStruct extends fairygui.GButton
{
	public m_button : fairygui.Controller;
	public m_title : fairygui.GTextField;

	
	public static URL:string = "ui://s1yj9w6mp7th3a";
	
	public static DependPackages:string[] = ["BlackSkin"];

	
	public static createInstance():TitleBar {
		return <TitleBar><any>(fairygui.UIPackage.createObject("BlackSkin","TitleBar"));
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