/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SelectRecipientDialog from "../../Extends/SystemModuleDialog/SelectRecipientDialog";

export default class SelectRecipientDialogStruct extends fgui.GComponent
{

	
	public static URL:string = "ui://q5yddivtncg93";
	
	public static DependPackages:string[] = ["SystemModuleDialog","CommonBase"];

	
	public static createInstance():SelectRecipientDialog {
		return <SelectRecipientDialog><any>(fgui.UIPackage.createObject("SystemModuleDialog","SelectRecipientDialog"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		

		
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}