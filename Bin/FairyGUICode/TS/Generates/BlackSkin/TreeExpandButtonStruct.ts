/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import TreeExpandButton from "../../Extends/BlackSkin/TreeExpandButton";

export default class TreeExpandButtonStruct extends fairygui.GButton
{
	public m_button : fairygui.Controller;

	
	public static URL:string = "ui://s1yj9w6mp7th3d";
	
	public static DependPackages:string[] = ["BlackSkin"];

	
	public static createInstance():TreeExpandButton {
		return <TreeExpandButton><any>(fairygui.UIPackage.createObject("BlackSkin","TreeExpandButton"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");

		
		
		
	}
}