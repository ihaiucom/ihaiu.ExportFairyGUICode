/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BuildingProgressBar1 from "../../Extends/CommonBase/BuildingProgressBar1";

export default class BuildingProgressBar1Struct extends fgui.GProgressBar
{
	public m_Fill : fgui.Controller;
	public m_bar : fgui.GImage;

	
	public static URL:string = "ui://jaoapdict8drwe";
	
	public static DependPackages:string[] = ["CommonBase","_ResImageUI"];

	
	public static createInstance():BuildingProgressBar1 {
		return <BuildingProgressBar1><any>(fgui.UIPackage.createObject("CommonBase","BuildingProgressBar1"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		
		this.m_Fill = this.getController("Fill");

		
		this.m_bar = <fgui.GImage><any>(this.getChild("bar"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}