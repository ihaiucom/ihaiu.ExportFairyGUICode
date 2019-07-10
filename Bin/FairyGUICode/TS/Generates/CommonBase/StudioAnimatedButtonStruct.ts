/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StudioAnimatedButton from "../../Extends/CommonBase/StudioAnimatedButton";

export default class StudioAnimatedButtonStruct extends fgui.GButton
{
	public m_isPlay : fgui.Controller;
	public m_t0 : fgui.Transition;
	public m_icon : fgui.GLoader;

	
	public static URL:string = "ui://jaoapdicdt43x8";
	
	public static DependPackages:string[] = ["CommonBase","_ResImageUIV1"];

	
	public static createInstance():StudioAnimatedButton {
		return <StudioAnimatedButton><any>(fgui.UIPackage.createObject("CommonBase","StudioAnimatedButton"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		
		this.m_isPlay = this.getController("isPlay");

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		
		
		this.m_t0 =  this.getTransition("t0");

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}