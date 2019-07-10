/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import Effect_story_unlock from "../../Extends/CommonFx/Effect_story_unlock";

export default class Effect_story_unlockStruct extends fgui.GComponent
{
	public m_t0 : fgui.Transition;
	public m_bg : fgui.GImage;

	
	public static URL:string = "ui://4ykhynlre5hk0";
	
	public static DependPackages:string[] = ["CommonFx","_ResImageUI"];

	
	public static createInstance():Effect_story_unlock {
		return <Effect_story_unlock><any>(fgui.UIPackage.createObject("CommonFx","Effect_story_unlock"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		

		
		this.m_bg = <fgui.GImage><any>(this.getChild("bg"));
		
		
		this.m_t0 =  this.getTransition("t0");

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}