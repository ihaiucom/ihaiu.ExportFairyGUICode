/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


export default class ComComboBox_itemStruct extends fairygui.GButton
{
	public m_button : fairygui.Controller;
	public m_title : fairygui.GTextField;

	
	public static URL:string = "ui://snq31xvrsfsc3y";
	
	public static DependPackages:string[] = ["UIDefaultSkin"];

	
	public static createInstance():ComComboBox_item {
		return <ComComboBox_item><any>(fairygui.UIPackage.createObject("UIDefaultSkin","ComComboBox_item"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");

		
		this.m_title = <fairygui.GTextField><any>(this.getChild("title"));
		
		
	}
}