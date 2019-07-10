/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ProgressBarBlue from "../../Extends/CommonBase/ProgressBarBlue";

export default class ProgressBarBlueStruct extends fgui.GProgressBar
{
	public m_bar : fgui.GImage;
	public m_light : fgui.GImage;
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://jaoapdicnnuxv9";
	
	public static DependPackages:string[] = ["CommonBase","_ResImageUI"];

	
	public static createInstance():ProgressBarBlue {
		return <ProgressBarBlue><any>(fgui.UIPackage.createObject("CommonBase","ProgressBarBlue"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		

		
		this.m_bar = <fgui.GImage><any>(this.getChild("bar"));
		this.m_light = <fgui.GImage><any>(this.getChild("light"));
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}