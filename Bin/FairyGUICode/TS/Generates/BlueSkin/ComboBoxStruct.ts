/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


export default class ComboBoxStruct extends fairygui.GComboBox
{
	public m_button : fairygui.Controller;
	public m_title : fairygui.GTextField;

	
	public static URL:string = "ui://stv9j6m6raoc1i";
	
	public static DependPackages:string[] = ["BlueSkin"];

	
	public static createInstance():ComboBox {
		return <ComboBox><any>(fairygui.UIPackage.createObject("BlueSkin","ComboBox"));
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