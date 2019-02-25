/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


export default class ComComboBox_popupStruct extends fairygui.GComponent
{
	public m_list : fairygui.GList;

	
	public static URL:string = "ui://snq31xvrsfsc3z";
	
	public static DependPackages:string[] = ["UIDefaultSkin"];

	
	public static createInstance():ComComboBox_popup {
		return <ComComboBox_popup><any>(fairygui.UIPackage.createObject("UIDefaultSkin","ComComboBox_popup"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_list = <fairygui.GList><any>(this.getChild("list"));
		
		
	}
}