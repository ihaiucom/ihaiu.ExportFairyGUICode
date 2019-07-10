/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BuildingPageTabBar from "../../Extends/CommonBase/BuildingPageTabBar";

export default class BuildingPageTabBarStruct extends fgui.GComponent
{
	public m_tab : fgui.Controller;

	
	public static URL:string = "ui://jaoapdicq74ivk";
	
	public static DependPackages:string[] = ["CommonBase"];

	
	public static createInstance():BuildingPageTabBar {
		return <BuildingPageTabBar><any>(fgui.UIPackage.createObject("CommonBase","BuildingPageTabBar"));
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