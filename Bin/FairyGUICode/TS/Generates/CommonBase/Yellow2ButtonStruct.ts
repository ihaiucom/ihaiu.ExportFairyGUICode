/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import NumberBadge from "../../Extends/CommonBase/NumberBadge";
import Yellow2Button from "../../Extends/CommonBase/Yellow2Button";

export default class Yellow2ButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_title : fgui.GTextField;
	public m_icon : fgui.GLoader;
	public m_number : fgui.GTextField;
	public m_badge : NumberBadge;

	
	public static URL:string = "ui://jaoapdice5hk1j";
	
	public static DependPackages:string[] = ["CommonBase","_ResImageUI"];

	
	public static createInstance():Yellow2Button {
		return <Yellow2Button><any>(fgui.UIPackage.createObject("CommonBase","Yellow2Button"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		
		this.m_button = this.getController("button");

		
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		this.m_number = <fgui.GTextField><any>(this.getChild("number"));
		this.m_badge = <NumberBadge><any>(this.getChild("badge"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}