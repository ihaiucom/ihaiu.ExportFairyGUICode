/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import NumberBadge from "../../Extends/CommonBase/NumberBadge";
import SmallTabButton from "../../Extends/CommonBase/SmallTabButton";

export default class SmallTabButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_title : fgui.GTextField;
	public m_badge : NumberBadge;

	
	public static URL:string = "ui://jaoapdici3pqvq";
	
	public static DependPackages:string[] = ["CommonBase","_ResImageUIV1"];

	
	public static createInstance():SmallTabButton {
		return <SmallTabButton><any>(fgui.UIPackage.createObject("CommonBase","SmallTabButton"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		
		this.m_button = this.getController("button");

		
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		this.m_badge = <NumberBadge><any>(this.getChild("badge"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}