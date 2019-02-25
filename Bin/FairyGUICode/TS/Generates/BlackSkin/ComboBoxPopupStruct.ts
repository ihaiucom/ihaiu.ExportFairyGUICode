/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


export default class ComboBoxPopupStruct extends fairygui.GComponent
{
	public m_list : fairygui.GList;

	
	public static URL:string = "ui://s1yj9w6mp7thf";
	
	public static DependPackages:string[] = ["BlackSkin"];

	
	public static createInstance():ComboBoxPopup {
		return <ComboBoxPopup><any>(fairygui.UIPackage.createObject("BlackSkin","ComboBoxPopup"));
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