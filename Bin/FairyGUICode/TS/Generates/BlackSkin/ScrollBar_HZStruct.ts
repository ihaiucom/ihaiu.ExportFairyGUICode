/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GripButton_HZ from "../../Extends/BlackSkin/GripButton_HZ";
import ScrollRightButton from "../../Extends/BlackSkin/ScrollRightButton";
import ScrollLeftButton from "../../Extends/BlackSkin/ScrollLeftButton";
import ScrollBar_HZ from "../../Extends/BlackSkin/ScrollBar_HZ";

export default class ScrollBar_HZStruct extends fairygui.GScrollBar
{
	public m_bar : fairygui.GGraph;
	public m_grip : GripButton_HZ;
	public m_arrow2 : ScrollRightButton;
	public m_arrow1 : ScrollLeftButton;

	
	public static URL:string = "ui://s1yj9w6mp7th30";
	
	public static DependPackages:string[] = ["BlackSkin"];

	
	public static createInstance():ScrollBar_HZ {
		return <ScrollBar_HZ><any>(fairygui.UIPackage.createObject("BlackSkin","ScrollBar_HZ"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_bar = <fairygui.GGraph><any>(this.getChild("bar"));
		this.m_grip = <GripButton_HZ><any>(this.getChild("grip"));
		this.m_arrow2 = <ScrollRightButton><any>(this.getChild("arrow2"));
		this.m_arrow1 = <ScrollLeftButton><any>(this.getChild("arrow1"));
		
		
	}
}