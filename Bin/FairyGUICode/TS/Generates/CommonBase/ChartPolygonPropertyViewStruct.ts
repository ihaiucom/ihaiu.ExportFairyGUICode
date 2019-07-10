/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ChartPolygonPropertyView from "../../Extends/CommonBase/ChartPolygonPropertyView";

export default class ChartPolygonPropertyViewStruct extends fgui.GComponent
{
	public m_tmp : fgui.GImage;

	
	public static URL:string = "ui://jaoapdicl291vj";
	
	public static DependPackages:string[] = ["CommonBase","__ResImageTmp"];

	
	public static createInstance():ChartPolygonPropertyView {
		return <ChartPolygonPropertyView><any>(fgui.UIPackage.createObject("CommonBase","ChartPolygonPropertyView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		

		
		this.m_tmp = <fgui.GImage><any>(this.getChild("tmp"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}