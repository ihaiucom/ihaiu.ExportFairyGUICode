/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


export default class ComComboBoxStruct extends fairygui.GComboBox
{
	public m_button : fairygui.Controller;
	public m_title : fairygui.GTextField;

	
	public static URL:string = "ui://snq31xvrsfsc40";
	
	public static DependPackages:string[] = ["UIDefaultSkin"];

	
	public static createInstance():ComComboBox {
		return <ComComboBox><any>(fairygui.UIPackage.createObject("UIDefaultSkin","ComComboBox"));
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