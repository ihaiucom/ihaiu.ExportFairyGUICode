/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import TooltipsWin from "../../Extends/BlackSkin/TooltipsWin";

export default class TooltipsWinStruct extends fairygui.GLabel
{
	public m_title : fairygui.GTextField;

	
	public static URL:string = "ui://s1yj9w6mp7th3b";
	
	public static DependPackages:string[] = ["BlackSkin"];

	
	public static createInstance():TooltipsWin {
		return <TooltipsWin><any>(fairygui.UIPackage.createObject("BlackSkin","TooltipsWin"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_title = <fairygui.GTextField><any>(this.getChild("title"));
		
		
	}
}