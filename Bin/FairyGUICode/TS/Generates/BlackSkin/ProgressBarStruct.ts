/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


export default class ProgressBarStruct extends fairygui.GProgressBar
{
	public m_bar : fairygui.GImage;

	
	public static URL:string = "ui://s1yj9w6mp7th2u";
	
	public static DependPackages:string[] = ["BlackSkin"];

	
	public static createInstance():ProgressBar {
		return <ProgressBar><any>(fairygui.UIPackage.createObject("BlackSkin","ProgressBar"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_bar = <fairygui.GImage><any>(this.getChild("bar"));
		
		
	}
}