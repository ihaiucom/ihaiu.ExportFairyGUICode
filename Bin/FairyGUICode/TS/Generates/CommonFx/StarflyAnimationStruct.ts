/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StarflyAnimation from "../../Extends/CommonFx/StarflyAnimation";

export default class StarflyAnimationStruct extends fgui.GComponent
{
	public m_t1 : fgui.Transition;

	
	public static URL:string = "ui://4ykhynlrg2r5m";
	
	public static DependPackages:string[] = ["CommonFx","_ResImageUI"];

	
	public static createInstance():StarflyAnimation {
		return <StarflyAnimation><any>(fgui.UIPackage.createObject("CommonFx","starflyAnimation"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		

		
		
		
		this.m_t1 =  this.getTransition("t1");

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}