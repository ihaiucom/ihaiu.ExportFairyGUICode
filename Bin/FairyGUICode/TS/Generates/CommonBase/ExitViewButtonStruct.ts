/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ExitViewButton from "../../Extends/CommonBase/ExitViewButton";

export default class ExitViewButtonStruct extends fgui.GButton
{

	
	public static URL:string = "ui://jaoapdicn6y7w8";
	
	public static DependPackages:string[] = ["CommonBase","_ResImageUIV1"];

	
	public static createInstance():ExitViewButton {
		return <ExitViewButton><any>(fgui.UIPackage.createObject("CommonBase","ExitViewButton"));
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