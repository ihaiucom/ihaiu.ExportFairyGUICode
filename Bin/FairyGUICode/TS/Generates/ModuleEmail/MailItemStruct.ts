/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ItemNumItem from "../../Extends/CommonGame/ItemNumItem";
import MailItem from "../../Extends/ModuleEmail/MailItem";

export default class MailItemStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_read : fgui.Controller;
	public m_title : fgui.GTextField;
	public m_time : fgui.GTextField;
	public m_reward : ItemNumItem;

	
	public static URL:string = "ui://41exsi4sj3nb3";
	
	public static DependPackages:string[] = ["ModuleEmail","CommonGame","_ResImageUI"];

	
	public static createInstance():MailItem {
		return <MailItem><any>(fgui.UIPackage.createObject("ModuleEmail","MailItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		
		this.m_button = this.getController("button");
		this.m_read = this.getController("read");

		
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		this.m_time = <fgui.GTextField><any>(this.getChild("time"));
		this.m_reward = <ItemNumItem><any>(this.getChild("reward"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}