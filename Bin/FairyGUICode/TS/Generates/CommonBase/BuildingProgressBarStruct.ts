/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BuildingProgressBar from "../../Extends/CommonBase/BuildingProgressBar";

export default class BuildingProgressBarStruct extends fgui.GProgressBar
{
	public m_bar : fgui.GImage;

	
	public static URL:string = "ui://jaoapdicm5zox4";
	
	public static DependPackages:string[] = ["CommonBase","_ResImageUIV1"];

	
	public static createInstance():BuildingProgressBar {
		return <BuildingProgressBar><any>(fgui.UIPackage.createObject("CommonBase","BuildingProgressBar"));
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