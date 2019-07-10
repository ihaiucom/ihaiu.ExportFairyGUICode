/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StudioGetRewardButton from "../../Extends/CommonBase/StudioGetRewardButton";

export default class StudioGetRewardButtonStruct extends fgui.GButton
{

	
	public static URL:string = "ui://jaoapdicu6m7w0";
	
	public static DependPackages:string[] = ["CommonBase","_ResImageUIV1"];

	
	public static createInstance():StudioGetRewardButton {
		return <StudioGetRewardButton><any>(fgui.UIPackage.createObject("CommonBase","StudioGetRewardButton"));
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