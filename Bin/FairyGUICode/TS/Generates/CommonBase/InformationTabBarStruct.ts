/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import InformationTabBar from "../../Extends/CommonBase/InformationTabBar";

export default class InformationTabBarStruct extends fgui.GComponent
{
	public m_tab : fgui.Controller;

	
	public static URL:string = "ui://jaoapdicl44gw9";
	
	public static DependPackages:string[] = ["CommonBase"];

	
	public static createInstance():InformationTabBar {
		return <InformationTabBar><any>(fgui.UIPackage.createObject("CommonBase","InformationTabBar"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		
		this.m_tab = this.getController("tab");

		
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}