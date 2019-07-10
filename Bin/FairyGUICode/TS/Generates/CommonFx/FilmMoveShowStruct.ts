/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import FilmMoveShow from "../../Extends/CommonFx/FilmMoveShow";

export default class FilmMoveShowStruct extends fgui.GButton
{
	public m_moveShow : fgui.Transition;
	public m_icon : fgui.GLoader;
	public m_1 : fgui.GLoader;
	public m_2 : fgui.GLoader;
	public m_3 : fgui.GLoader;
	public m_4 : fgui.GLoader;
	public m_5 : fgui.GLoader;
	public m_mask : fgui.GGraph;

	
	public static URL:string = "ui://4ykhynlrh69fl";
	
	public static DependPackages:string[] = ["CommonFx"];

	
	public static createInstance():FilmMoveShow {
		return <FilmMoveShow><any>(fgui.UIPackage.createObject("CommonFx","FilmMoveShow"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		this.m_1 = <fgui.GLoader><any>(this.getChild("1"));
		this.m_2 = <fgui.GLoader><any>(this.getChild("2"));
		this.m_3 = <fgui.GLoader><any>(this.getChild("3"));
		this.m_4 = <fgui.GLoader><any>(this.getChild("4"));
		this.m_5 = <fgui.GLoader><any>(this.getChild("5"));
		this.m_mask = <fgui.GGraph><any>(this.getChild("mask"));
		
		
		this.m_moveShow =  this.getTransition("moveShow");

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}