/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ChartPolygonPropertyTextOnlyName from "../../Extends/CommonBase/ChartPolygonPropertyTextOnlyName";

export default class ChartPolygonPropertyTextOnlyNameStruct extends fgui.GComponent
{
	public m_name : fgui.GTextField;

	
	public static URL:string = "ui://jaoapdicmfspx6";
	
	public static DependPackages:string[] = ["CommonBase"];

	
	public static createInstance():ChartPolygonPropertyTextOnlyName {
		return <ChartPolygonPropertyTextOnlyName><any>(fgui.UIPackage.createObject("CommonBase","ChartPolygonPropertyTextOnlyName"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		

		
		this.m_name = <fgui.GTextField><any>(this.getChild("name"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}