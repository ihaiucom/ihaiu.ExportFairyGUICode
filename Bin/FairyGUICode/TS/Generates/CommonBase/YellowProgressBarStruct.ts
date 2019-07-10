/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import YellowProgressBar from "../../Extends/CommonBase/YellowProgressBar";

export default class YellowProgressBarStruct extends fgui.GProgressBar
{
	public m_bar : fgui.GImage;

	
	public static URL:string = "ui://jaoapdicszhv12";
	
	public static DependPackages:string[] = ["CommonBase","_ResImageUI"];

	
	public static createInstance():YellowProgressBar {
		return <YellowProgressBar><any>(fgui.UIPackage.createObject("CommonBase","YellowProgressBar"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		

		
		this.m_bar = <fgui.GImage><any>(this.getChild("bar"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}