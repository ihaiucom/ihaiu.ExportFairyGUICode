/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import Smoke003 from "../../Extends/CommonFx/Smoke003";

export default class Smoke003Struct extends fgui.GComponent
{
	public m_t0 : fgui.Transition;

	
	public static URL:string = "ui://4ykhynlrh96ro";
	
	public static DependPackages:string[] = ["CommonFx"];

	
	public static createInstance():Smoke003 {
		return <Smoke003><any>(fgui.UIPackage.createObject("CommonFx","smoke003"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		

		
		
		
		this.m_t0 =  this.getTransition("t0");

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}