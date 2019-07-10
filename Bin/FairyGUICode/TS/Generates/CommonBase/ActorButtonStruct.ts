/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ActorButton from "../../Extends/CommonBase/ActorButton";

export default class ActorButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_icon : fgui.GLoader;

	
	public static URL:string = "ui://jaoapdicwprdvu";
	
	public static DependPackages:string[] = ["CommonBase"];

	
	public static createInstance():ActorButton {
		return <ActorButton><any>(fgui.UIPackage.createObject("CommonBase","ActorButton"));
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