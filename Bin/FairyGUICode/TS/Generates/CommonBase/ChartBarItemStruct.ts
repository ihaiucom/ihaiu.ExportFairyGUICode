/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ChartBarItem from "../../Extends/CommonBase/ChartBarItem";

export default class ChartBarItemStruct extends fgui.GComponent
{

	
	public static URL:string = "ui://jaoapdicoa5kvq";
	
	public static DependPackages:string[] = ["CommonBase","_ResImageUI"];

	
	public static createInstance():ChartBarItem {
		return <ChartBarItem><any>(fgui.UIPackage.createObject("CommonBase","ChartBarItem"));
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