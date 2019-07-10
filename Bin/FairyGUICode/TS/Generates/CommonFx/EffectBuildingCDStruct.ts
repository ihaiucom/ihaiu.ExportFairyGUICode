/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EffectBuildingCD from "../../Extends/CommonFx/EffectBuildingCD";

export default class EffectBuildingCDStruct extends fgui.GComponent
{
	public m_t000 : fgui.Transition;

	
	public static URL:string = "ui://4ykhynlrh96rm";
	
	public static DependPackages:string[] = ["CommonFx"];

	
	public static createInstance():EffectBuildingCD {
		return <EffectBuildingCD><any>(fgui.UIPackage.createObject("CommonFx","EffectBuildingCD"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		

		
		
		
		this.m_t000 =  this.getTransition("t000");

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}