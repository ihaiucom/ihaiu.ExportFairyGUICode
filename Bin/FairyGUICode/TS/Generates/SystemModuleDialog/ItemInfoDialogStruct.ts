/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import AlertDialogBackground from "../../Extends/SystemModuleDialog/AlertDialogBackground";
import ItemIconItem from "../../Extends/CommonGame/ItemIconItem";
import ItemInfoDialog from "../../Extends/SystemModuleDialog/ItemInfoDialog";

export default class ItemInfoDialogStruct extends fgui.GComponent
{
	public m_itemName : fgui.GTextField;
	public m_itemContent : fgui.GTextField;
	public m_closeBtn : AlertDialogBackground;
	public m_item : ItemIconItem;

	
	public static URL:string = "ui://q5yddivtnetkp";
	
	public static DependPackages:string[] = ["SystemModuleDialog","CommonBase","CommonGame","_ResImageUI"];

	
	public static createInstance():ItemInfoDialog {
		return <ItemInfoDialog><any>(fgui.UIPackage.createObject("SystemModuleDialog","ItemInfoDialog"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		

		
		this.m_itemName = <fgui.GTextField><any>(this.getChild("itemName"));
		this.m_itemContent = <fgui.GTextField><any>(this.getChild("itemContent"));
		this.m_closeBtn = <AlertDialogBackground><any>(this.getChild("closeBtn"));
		this.m_item = <ItemIconItem><any>(this.getChild("item"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}