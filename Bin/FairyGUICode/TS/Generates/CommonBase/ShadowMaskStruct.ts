/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ShadowMask from "../../Extends/CommonBase/ShadowMask";

export default class ShadowMaskStruct extends fgui.GComponent
{
	public m_button : fgui.Controller;

	
	public static URL:string = "ui://jaoapdich9411n";
	
	public static DependPackages:string[] = ["CommonBase"];

	
	public static createInstance():ShadowMask {
		return <ShadowMask><any>(fgui.UIPackage.createObject("CommonBase","ShadowMask"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		
		this.m_button = this.getController("button");

		
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}