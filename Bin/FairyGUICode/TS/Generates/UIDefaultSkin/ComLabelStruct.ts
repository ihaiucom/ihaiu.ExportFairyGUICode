/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


export default class ComLabelStruct extends fairygui.GLabel
{
	public m_title : fairygui.GTextField;
	public m_icon : fairygui.GImage;

	
	public static URL:string = "ui://snq31xvrsfsc3x";
	
	public static DependPackages:string[] = ["UIDefaultSkin"];

	
	public static createInstance():ComLabel {
		return <ComLabel><any>(fairygui.UIPackage.createObject("UIDefaultSkin","ComLabel"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_title = <fairygui.GTextField><any>(this.getChild("title"));
		this.m_icon = <fairygui.GImage><any>(this.getChild("icon"));
		
		
	}
}