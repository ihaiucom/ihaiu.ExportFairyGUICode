/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BaseFullWindowUI from "../../Extends/CommonBase/BaseFullWindowUI";
import YellowBigButton from "../../Extends/CommonBase/YellowBigButton";
import BlueButton from "../../Extends/CommonBase/BlueButton";
import MailWindowUI from "../../Extends/ModuleEmail/MailWindowUI";

export default class MailWindowUIStruct extends fgui.GComponent
{
	public m_list : fgui.GList;
	public m_tip : fgui.GTextField;
	public m_NoMail : fgui.GGroup;
	public m_frame : BaseFullWindowUI;
	public m_btnReward : YellowBigButton;
	public m_btnDelect : BlueButton;

	
	public static URL:string = "ui://41exsi4sszhv0";
	
	public static DependPackages:string[] = ["ModuleEmail","CommonBase","_ResImageUI"];

	
	public static createInstance():MailWindowUI {
		return <MailWindowUI><any>(fgui.UIPackage.createObject("ModuleEmail","MailWindowUI"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		

		
		this.m_list = <fgui.GList><any>(this.getChild("list"));
		this.m_tip = <fgui.GTextField><any>(this.getChild("tip"));
		this.m_NoMail = <fgui.GGroup><any>(this.getChild("NoMail"));
		this.m_frame = <BaseFullWindowUI><any>(this.getChild("frame"));
		this.m_btnReward = <YellowBigButton><any>(this.getChild("btnReward"));
		this.m_btnDelect = <BlueButton><any>(this.getChild("btnDelect"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}