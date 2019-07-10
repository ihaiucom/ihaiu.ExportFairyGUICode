/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BaseAlertDialog from "../../Extends/SystemModuleDialog/BaseAlertDialog";

export default class BaseAlertDialogStruct extends fgui.GLabel
{
	public m_title : fgui.GTextField;
	public m_closeBtn : fgui.GObject;

	
	public static URL:string = "ui://q5yddivtncg91";
	
	public static DependPackages:string[] = ["SystemModuleDialog","_ResImageUI"];

	
	public static createInstance():BaseAlertDialog {
		return <BaseAlertDialog><any>(fgui.UIPackage.createObject("SystemModuleDialog","BaseAlertDialog"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		

		
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		this.m_closeBtn = <fgui.GObject><any>(this.getChild("closeBtn"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}