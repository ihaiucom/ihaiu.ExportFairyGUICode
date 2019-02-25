/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


export default class ComProgressBarStruct extends fairygui.GProgressBar
{
	public m_bar : fairygui.GImage;
	public m_title : fairygui.GTextField;

	
	public static URL:string = "ui://snq31xvrsfsc45";
	
	public static DependPackages:string[] = ["UIDefaultSkin"];

	
	public static createInstance():ComProgressBar {
		return <ComProgressBar><any>(fairygui.UIPackage.createObject("UIDefaultSkin","ComProgressBar"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_bar = <fairygui.GImage><any>(this.getChild("bar"));
		this.m_title = <fairygui.GTextField><any>(this.getChild("title"));
		
		
	}
}