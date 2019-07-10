/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BaseProgressBar from "../../Extends/CommonBase/BaseProgressBar";

export default class BaseProgressBarStruct extends fgui.GProgressBar
{
	public m_bar : fgui.GImage;
	public m_title : fgui.GTextField;
	public m_level : fgui.GTextField;
	public m_bar1 : fgui.GImage;
	public m_bar2 : fgui.GImage;
	public m_level2 : fgui.GTextField;

	
	public static URL:string = "ui://jaoapdicncg9o";
	
	public static DependPackages:string[] = ["CommonBase","_ResImageUIV1"];

	
	public static createInstance():BaseProgressBar {
		return <BaseProgressBar><any>(fgui.UIPackage.createObject("CommonBase","BaseProgressBar"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		

		
		this.m_bar = <fgui.GImage><any>(this.getChild("bar"));
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		this.m_level = <fgui.GTextField><any>(this.getChild("level"));
		this.m_bar1 = <fgui.GImage><any>(this.getChild("bar1"));
		this.m_bar2 = <fgui.GImage><any>(this.getChild("bar2"));
		this.m_level2 = <fgui.GTextField><any>(this.getChild("level2"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}