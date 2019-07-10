/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StudioNextButton from "../../Extends/CommonBase/StudioNextButton";

export default class StudioNextButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_icon : fgui.GLoader;

	
	public static URL:string = "ui://jaoapdicoh5ivv";
	
	public static DependPackages:string[] = ["CommonBase"];

	
	public static createInstance():StudioNextButton {
		return <StudioNextButton><any>(fgui.UIPackage.createObject("CommonBase","StudioNextButton"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		
		this.m_button = this.getController("button");

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}