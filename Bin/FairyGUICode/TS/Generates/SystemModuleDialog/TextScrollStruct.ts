/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import TextScroll from "../../Extends/SystemModuleDialog/TextScroll";

export default class TextScrollStruct extends fgui.GLabel
{
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://q5yddivtxa7on";
	
	public static DependPackages:string[] = ["SystemModuleDialog"];

	
	public static createInstance():TextScroll {
		return <TextScroll><any>(fgui.UIPackage.createObject("SystemModuleDialog","TextScroll"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		

		
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}