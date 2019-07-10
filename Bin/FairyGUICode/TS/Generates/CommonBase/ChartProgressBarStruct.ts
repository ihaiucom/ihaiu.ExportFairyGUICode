/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ChartProgressBar from "../../Extends/CommonBase/ChartProgressBar";

export default class ChartProgressBarStruct extends fgui.GProgressBar
{
	public m_bar_v : fgui.GImage;
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://jaoapdicvjljx7";
	
	public static DependPackages:string[] = ["CommonBase","_ResImageUIV1"];

	
	public static createInstance():ChartProgressBar {
		return <ChartProgressBar><any>(fgui.UIPackage.createObject("CommonBase","ChartProgressBar"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		

		
		this.m_bar_v = <fgui.GImage><any>(this.getChild("bar_v"));
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}