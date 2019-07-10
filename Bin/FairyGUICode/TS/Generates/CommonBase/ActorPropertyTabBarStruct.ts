/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ActorPropertyTabBar from "../../Extends/CommonBase/ActorPropertyTabBar";

export default class ActorPropertyTabBarStruct extends fgui.GComponent
{
	public m_tab : fgui.Controller;

	
	public static URL:string = "ui://jaoapdicf65hvw";
	
	public static DependPackages:string[] = ["CommonBase"];

	
	public static createInstance():ActorPropertyTabBar {
		return <ActorPropertyTabBar><any>(fgui.UIPackage.createObject("CommonBase","ActorPropertyTabBar"));
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