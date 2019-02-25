/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


export default class ComScrollBar_arrow1Struct extends fairygui.GButton
{
	public m_button : fairygui.Controller;

	
	public static URL:string = "ui://snq31xvrsfsc41";
	
	public static DependPackages:string[] = ["UIDefaultSkin"];

	
	public static createInstance():ComScrollBar_arrow1 {
		return <ComScrollBar_arrow1><any>(fairygui.UIPackage.createObject("UIDefaultSkin","ComScrollBar_arrow1"));
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