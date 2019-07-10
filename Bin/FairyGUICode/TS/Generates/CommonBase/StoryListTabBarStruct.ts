/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StoryListTabBar from "../../Extends/CommonBase/StoryListTabBar";

export default class StoryListTabBarStruct extends fgui.GComponent
{
	public m_tab : fgui.Controller;

	
	public static URL:string = "ui://jaoapdicol35vx";
	
	public static DependPackages:string[] = ["CommonBase"];

	
	public static createInstance():StoryListTabBar {
		return <StoryListTabBar><any>(fgui.UIPackage.createObject("CommonBase","StoryListTabBar"));
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