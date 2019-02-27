/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ScrollBar_arrow from "../../Extends/BlueSkin/ScrollBar_arrow";
import ScrollBar_grip from "../../Extends/BlueSkin/ScrollBar_grip";
import ScrollBarH from "../../Extends/BlueSkin/ScrollBarH";

export default class ScrollBarHStruct extends fairygui.GScrollBar
{
	public m_bar : fairygui.GGraph;
	public m_arrow1 : ScrollBar_arrow;
	public m_arrow2 : ScrollBar_arrow;
	public m_grip : ScrollBar_grip;

	
	public static URL:string = "ui://stv9j6m6raoc1m";
	
	public static DependPackages:string[] = ["BlueSkin"];

	
	public static createInstance():ScrollBarH {
		return <ScrollBarH><any>(fairygui.UIPackage.createObject("BlueSkin","ScrollBarH"));
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