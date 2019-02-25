/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


export default class ComScrollBar_gripStruct extends fairygui.GButton
{
	public m_button : fairygui.Controller;

	
	public static URL:string = "ui://snq31xvrsfsc43";
	
	public static DependPackages:string[] = ["UIDefaultSkin"];

	
	public static createInstance():ComScrollBar_grip {
		return <ComScrollBar_grip><any>(fairygui.UIPackage.createObject("UIDefaultSkin","ComScrollBar_grip"));
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