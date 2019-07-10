/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BagTabBar from "../../Extends/CommonBase/BagTabBar";

export default class BagTabBarStruct extends fgui.GComponent
{
	public m_select : fgui.Controller;

	
	public static URL:string = "ui://jaoapdicncg9k";
	
	public static DependPackages:string[] = ["CommonBase"];

	
	public static createInstance():BagTabBar {
		return <BagTabBar><any>(fgui.UIPackage.createObject("CommonBase","BagTabBar"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		
		this.m_select = this.getController("select");

		
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}