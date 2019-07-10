/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ChartBarView from "../../Extends/CommonBase/ChartBarView";

export default class ChartBarViewStruct extends fgui.GComponent
{

	
	public static URL:string = "ui://jaoapdicoa5kvr";
	
	public static DependPackages:string[] = ["CommonBase"];

	
	public static createInstance():ChartBarView {
		return <ChartBarView><any>(fgui.UIPackage.createObject("CommonBase","ChartBarView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		

		
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}