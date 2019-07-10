/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StudioAnimatedButton_ani from "../../Extends/CommonBase/StudioAnimatedButton_ani";

export default class StudioAnimatedButton_aniStruct extends fgui.GComponent
{
	public m_c1 : fgui.Controller;
	public m_t0 : fgui.Transition;
	public m_t1 : fgui.Transition;

	
	public static URL:string = "ui://jaoapdicdt43x9";
	
	public static DependPackages:string[] = ["CommonBase","_ResImageUIV1"];

	
	public static createInstance():StudioAnimatedButton_ani {
		return <StudioAnimatedButton_ani><any>(fgui.UIPackage.createObject("CommonBase","StudioAnimatedButton_ani"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		
		this.m_c1 = this.getController("c1");

		
		
		
		this.m_t0 =  this.getTransition("t0");
		this.m_t1 =  this.getTransition("t1");

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}