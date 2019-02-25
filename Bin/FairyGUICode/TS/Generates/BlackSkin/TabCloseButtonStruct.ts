/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


export default class TabCloseButtonStruct extends fairygui.GButton
{
	public m_button : fairygui.Controller;

	
	public static URL:string = "ui://s1yj9w6mp7th34";
	
	public static DependPackages:string[] = ["BlackSkin"];

	
	public static createInstance():TabCloseButton {
		return <TabCloseButton><any>(fairygui.UIPackage.createObject("BlackSkin","TabCloseButton"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");

		
		
		
	}
}