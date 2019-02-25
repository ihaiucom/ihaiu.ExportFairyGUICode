/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


export default class RedButtonStruct extends fairygui.GButton
{
	public m_button : fairygui.Controller;
	public m_title : fairygui.GTextField;
	public m_icon : fairygui.GImage;

	
	public static URL:string = "ui://snq31xvrraoc3n";
	
	public static DependPackages:string[] = ["UIDefaultSkin"];

	
	public static createInstance():RedButton {
		return <RedButton><any>(fairygui.UIPackage.createObject("UIDefaultSkin","RedButton"));
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
		this.m_icon = <fairygui.GImage><any>(this.getChild("icon"));
		
		
	}
}