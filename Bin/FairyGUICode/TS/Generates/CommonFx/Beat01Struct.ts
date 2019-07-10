/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import Beat01 from "../../Extends/CommonFx/Beat01";

export default class Beat01Struct extends fgui.GComponent
{
	public m_smoke_a001 : fgui.Transition;
	public m_smoke_n9 : fgui.GImage;
	public m_smoke_n8 : fgui.GImage;
	public m_smoke_n3 : fgui.GImage;
	public m_smoke_n2 : fgui.GImage;
	public m_smoke_n5 : fgui.GImage;
	public m_smoke_n6 : fgui.GImage;
	public m_smoke_n10 : fgui.GImage;
	public m_smoke_n11 : fgui.GImage;
	public m_smoke_n12 : fgui.GImage;
	public m_smoke_n16 : fgui.GImage;
	public m_smoke_n13 : fgui.GImage;
	public m_smoke_n4 : fgui.GImage;
	public m_smoke_n14 : fgui.GImage;
	public m_smoke_n15 : fgui.GImage;
	public m_smoke_n17 : fgui.GImage;
	public m_smoke_n18 : fgui.GImage;
	public m_smoke_n19 : fgui.GImage;
	public m_smoke_n20 : fgui.GImage;
	public m_smoke_n21 : fgui.GImage;
	public m_n2323133d : fgui.GImage;

	
	public static URL:string = "ui://4ykhynlrh96rq";
	
	public static DependPackages:string[] = ["CommonFx"];

	
	public static createInstance():Beat01 {
		return <Beat01><any>(fgui.UIPackage.createObject("CommonFx","beat01"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		

		
		this.m_smoke_n9 = <fgui.GImage><any>(this.getChild("smoke_n9"));
		this.m_smoke_n8 = <fgui.GImage><any>(this.getChild("smoke_n8"));
		this.m_smoke_n3 = <fgui.GImage><any>(this.getChild("smoke_n3"));
		this.m_smoke_n2 = <fgui.GImage><any>(this.getChild("smoke_n2"));
		this.m_smoke_n5 = <fgui.GImage><any>(this.getChild("smoke_n5"));
		this.m_smoke_n6 = <fgui.GImage><any>(this.getChild("smoke_n6"));
		this.m_smoke_n10 = <fgui.GImage><any>(this.getChild("smoke_n10"));
		this.m_smoke_n11 = <fgui.GImage><any>(this.getChild("smoke_n11"));
		this.m_smoke_n12 = <fgui.GImage><any>(this.getChild("smoke_n12"));
		this.m_smoke_n16 = <fgui.GImage><any>(this.getChild("smoke_n16"));
		this.m_smoke_n13 = <fgui.GImage><any>(this.getChild("smoke_n13"));
		this.m_smoke_n4 = <fgui.GImage><any>(this.getChild("smoke_n4"));
		this.m_smoke_n14 = <fgui.GImage><any>(this.getChild("smoke_n14"));
		this.m_smoke_n15 = <fgui.GImage><any>(this.getChild("smoke_n15"));
		this.m_smoke_n17 = <fgui.GImage><any>(this.getChild("smoke_n17"));
		this.m_smoke_n18 = <fgui.GImage><any>(this.getChild("smoke_n18"));
		this.m_smoke_n19 = <fgui.GImage><any>(this.getChild("smoke_n19"));
		this.m_smoke_n20 = <fgui.GImage><any>(this.getChild("smoke_n20"));
		this.m_smoke_n21 = <fgui.GImage><any>(this.getChild("smoke_n21"));
		this.m_n2323133d = <fgui.GImage><any>(this.getChild("n2323133d"));
		
		
		this.m_smoke_a001 =  this.getTransition("smoke_a001");

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}