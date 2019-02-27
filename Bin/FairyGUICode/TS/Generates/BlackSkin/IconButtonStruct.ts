/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import IconButton from "../../Extends/BlackSkin/IconButton";

export default class IconButtonStruct extends fairygui.GButton
{
	public m_button : fairygui.Controller;
	public m_icon : fairygui.GLoader;

	
	public static URL:string = "ui://s1yj9w6mp7th5";
	
	public static DependPackages:string[] = ["BlackSkin"];

	
	public static createInstance():IconButton {
		return <IconButton><any>(fairygui.UIPackage.createObject("BlackSkin","IconButton"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");

		
		this.m_icon = <fairygui.GLoader><any>(this.getChild("icon"));
		
		
	}
}