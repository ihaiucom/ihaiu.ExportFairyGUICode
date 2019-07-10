/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ActorSelectTabBar from "../../Extends/CommonBase/ActorSelectTabBar";

export default class ActorSelectTabBarStruct extends fgui.GComponent
{
	public m_tab : fgui.Controller;

	
	public static URL:string = "ui://jaoapdiclcu2vk";
	
	public static DependPackages:string[] = ["CommonBase"];

	
	public static createInstance():ActorSelectTabBar {
		return <ActorSelectTabBar><any>(fgui.UIPackage.createObject("CommonBase","ActorSelectTabBar"));
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