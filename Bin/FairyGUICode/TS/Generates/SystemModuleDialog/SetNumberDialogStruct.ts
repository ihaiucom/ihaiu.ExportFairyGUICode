/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BaseAlertDialog from "../../Extends/SystemModuleDialog/BaseAlertDialog";
import YellowButton from "../../Extends/CommonBase/YellowButton";
import Slider from "../../Extends/CommonBase/Slider";
import SetNumberDialog from "../../Extends/SystemModuleDialog/SetNumberDialog";

export default class SetNumberDialogStruct extends fgui.GLabel
{
	public m_content : fgui.GTextField;
	public m_contentGroup : fgui.GGroup;
	public m_frame : BaseAlertDialog;
	public m_yesBtn : YellowButton;
	public m_slider : Slider;

	
	public static URL:string = "ui://q5yddivtncg90";
	
	public static DependPackages:string[] = ["SystemModuleDialog","CommonBase"];

	
	public static createInstance():SetNumberDialog {
		return <SetNumberDialog><any>(fgui.UIPackage.createObject("SystemModuleDialog","SetNumberDialog"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		

		
		this.m_content = <fgui.GTextField><any>(this.getChild("content"));
		this.m_contentGroup = <fgui.GGroup><any>(this.getChild("contentGroup"));
		this.m_frame = <BaseAlertDialog><any>(this.getChild("frame"));
		this.m_yesBtn = <YellowButton><any>(this.getChild("yesBtn"));
		this.m_slider = <Slider><any>(this.getChild("slider"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}