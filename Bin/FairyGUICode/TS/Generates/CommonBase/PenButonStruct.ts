/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PenButon from "../../Extends/CommonBase/PenButon";

export default class PenButonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_icon : fgui.GLoader;

	
	public static URL:string = "ui://jaoapdice2wxw5";
	
	public static DependPackages:string[] = ["CommonBase"];

	
	public static createInstance():PenButon {
		return <PenButon><any>(fgui.UIPackage.createObject("CommonBase","PenButon"));
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