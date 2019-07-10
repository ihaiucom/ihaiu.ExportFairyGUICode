/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import AlertDialogBackground from "../../Extends/SystemModuleDialog/AlertDialogBackground";
import TextScroll from "../../Extends/SystemModuleDialog/TextScroll";
import YellowSmallButton from "../../Extends/CommonBase/YellowSmallButton";
import MailContentDialog from "../../Extends/SystemModuleDialog/MailContentDialog";

export default class MailContentDialogStruct extends fgui.GComponent
{
	public m_reward : fgui.Controller;
	public m_time : fgui.GTextField;
	public m_listReward : fgui.GList;
	public m_tipHasReward : fgui.GImage;
	public m_title : fgui.GTextField;
	public m_Msg1 : fgui.GTextField;
	public m_Msg2 : fgui.GTextField;
	public m_closeBtn : AlertDialogBackground;
	public m_content : TextScroll;
	public m_btnClose : fgui.GObject;
	public m_btnDelect : YellowSmallButton;
	public m_btnReward : YellowSmallButton;

	
	public static URL:string = "ui://q5yddivtxa7oo";
	
	public static DependPackages:string[] = ["SystemModuleDialog","CommonBase","_ResImageUI"];

	
	public static createInstance():MailContentDialog {
		return <MailContentDialog><any>(fgui.UIPackage.createObject("SystemModuleDialog","MailContentDialog"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		
		this.m_reward = this.getController("reward");

		
		this.m_time = <fgui.GTextField><any>(this.getChild("time"));
		this.m_listReward = <fgui.GList><any>(this.getChild("listReward"));
		this.m_tipHasReward = <fgui.GImage><any>(this.getChild("tipHasReward"));
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		this.m_Msg1 = <fgui.GTextField><any>(this.getChild("Msg1"));
		this.m_Msg2 = <fgui.GTextField><any>(this.getChild("Msg2"));
		this.m_closeBtn = <AlertDialogBackground><any>(this.getChild("closeBtn"));
		this.m_content = <TextScroll><any>(this.getChild("content"));
		this.m_btnClose = <fgui.GObject><any>(this.getChild("btnClose"));
		this.m_btnDelect = <YellowSmallButton><any>(this.getChild("btnDelect"));
		this.m_btnReward = <YellowSmallButton><any>(this.getChild("btnReward"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}