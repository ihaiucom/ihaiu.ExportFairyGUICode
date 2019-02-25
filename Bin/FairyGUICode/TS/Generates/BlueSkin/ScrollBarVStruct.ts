/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ScrollBar_arrow from "../../Extends/BlueSkin/ScrollBar_arrow.ts";
import ScrollBar_arrow from "../../Extends/BlueSkin/ScrollBar_arrow.ts";
import ScrollBar_grip from "../../Extends/BlueSkin/ScrollBar_grip.ts";

export default class ScrollBarVStruct extends fairygui.GScrollBar
{
	public m_bar : fairygui.GGraph;
	public m_arrow1 : ScrollBar_arrow;
	public m_arrow2 : ScrollBar_arrow;
	public m_grip : ScrollBar_grip;

	
	public static URL:string = "ui://stv9j6m6raoc1n";
	
	public static DependPackages:string[] = ["BlueSkin"];

	
	public static createInstance():ScrollBarV {
		return <ScrollBarV><any>(fairygui.UIPackage.createObject("BlueSkin","ScrollBarV"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_bar = <fairygui.GGraph><any>(this.getChild("bar"));
		this.m_arrow1 = <ScrollBar_arrow><any>(this.getChild("arrow1"));
		this.m_arrow2 = <ScrollBar_arrow><any>(this.getChild("arrow2"));
		this.m_grip = <ScrollBar_grip><any>(this.getChild("grip"));
		
		
	}
}