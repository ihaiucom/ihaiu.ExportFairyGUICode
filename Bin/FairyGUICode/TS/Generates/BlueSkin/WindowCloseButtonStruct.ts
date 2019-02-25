/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


export default class WindowCloseButtonStruct extends fairygui.GButton
{
	public m_button : fairygui.Controller;

	
	public static URL:string = "ui://stv9j6m6raoc9";
	
	public static DependPackages:string[] = ["BlueSkin"];

	
	public static createInstance():WindowCloseButton {
		return <WindowCloseButton><any>(fairygui.UIPackage.createObject("BlueSkin","WindowCloseButton"));
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