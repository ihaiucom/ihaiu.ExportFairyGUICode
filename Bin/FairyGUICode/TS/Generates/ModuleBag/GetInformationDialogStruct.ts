/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StudioRenameButton from "../../Extends/CommonBase/StudioRenameButton";
import GetInformationDialog from "../../Extends/ModuleBag/GetInformationDialog";

export default class GetInformationDialogStruct extends fgui.GComponent
{
	public m_boxHeightCtrl : fgui.Controller;
	public m_bg : fgui.GLoader;
	public m_list : fgui.GList;
	public m_confirmBtn : StudioRenameButton;

	
	public static URL:string = "ui://4mjxxvpqlg7x16";
	
	public static DependPackages:string[] = ["ModuleBag","CommonBase","_ResImageUIV1"];

	
	public static createInstance():GetInformationDialog {
		return <GetInformationDialog><any>(fgui.UIPackage.createObject("ModuleBag","GetInformationDialog"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		
		this.m_boxHeightCtrl = this.getController("boxHeightCtrl");

		
		this.m_bg = <fgui.GLoader><any>(this.getChild("bg"));
		this.m_list = <fgui.GList><any>(this.getChild("list"));
		this.m_confirmBtn = <StudioRenameButton><any>(this.getChild("confirmBtn"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}