/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StudioRenameButton from "../../Extends/CommonBase/StudioRenameButton";

export default class StudioRenameButtonStruct extends fgui.GButton
{
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://jaoapdicwpxmw3";
	
	public static DependPackages:string[] = ["CommonBase","_ResImageUIV1"];

	
	public static createInstance():StudioRenameButton {
		return <StudioRenameButton><any>(fgui.UIPackage.createObject("CommonBase","StudioRenameButton"));
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