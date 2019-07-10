/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ChartPolygonPropertyText from "../../Extends/CommonBase/ChartPolygonPropertyText";

export default class ChartPolygonPropertyTextStruct extends fgui.GComponent
{
	public m_name : fgui.GTextField;
	public m_value : fgui.GTextField;

	
	public static URL:string = "ui://jaoapdicl291vo";
	
	public static DependPackages:string[] = ["CommonBase"];

	
	public static createInstance():ChartPolygonPropertyText {
		return <ChartPolygonPropertyText><any>(fgui.UIPackage.createObject("CommonBase","ChartPolygonPropertyText"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		

		
		this.m_name = <fgui.GTextField><any>(this.getChild("name"));
		this.m_value = <fgui.GTextField><any>(this.getChild("value"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}