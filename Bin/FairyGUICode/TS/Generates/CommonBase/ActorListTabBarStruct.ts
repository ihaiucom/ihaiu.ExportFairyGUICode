/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ActorListTabBar from "../../Extends/CommonBase/ActorListTabBar";

export default class ActorListTabBarStruct extends fgui.GComponent
{
	public m_tab : fgui.Controller;

	
	public static URL:string = "ui://jaoapdici3pqvr";
	
	public static DependPackages:string[] = ["CommonBase"];

	
	public static createInstance():ActorListTabBar {
		return <ActorListTabBar><any>(fgui.UIPackage.createObject("CommonBase","ActorListTabBar"));
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