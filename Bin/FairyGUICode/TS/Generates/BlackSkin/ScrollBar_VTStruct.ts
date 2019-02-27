/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ScrollUpButton from "../../Extends/BlackSkin/ScrollUpButton";
import ScrollDownButton from "../../Extends/BlackSkin/ScrollDownButton";
import GripButton_VT from "../../Extends/BlackSkin/GripButton_VT";
import ScrollBar_VT from "../../Extends/BlackSkin/ScrollBar_VT";

export default class ScrollBar_VTStruct extends fairygui.GScrollBar
{
	public m_bar : fairygui.GGraph;
	public m_arrow1 : ScrollUpButton;
	public m_arrow2 : ScrollDownButton;
	public m_grip : GripButton_VT;

	
	public static URL:string = "ui://s1yj9w6mp7th2w";
	
	public static DependPackages:string[] = ["BlackSkin"];

	
	public static createInstance():ScrollBar_VT {
		return <ScrollBar_VT><any>(fairygui.UIPackage.createObject("BlackSkin","ScrollBar_VT"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_bar = <fairygui.GGraph><any>(this.getChild("bar"));
		this.m_arrow1 = <ScrollUpButton><any>(this.getChild("arrow1"));
		this.m_arrow2 = <ScrollDownButton><any>(this.getChild("arrow2"));
		this.m_grip = <GripButton_VT><any>(this.getChild("grip"));
		
		
	}
}