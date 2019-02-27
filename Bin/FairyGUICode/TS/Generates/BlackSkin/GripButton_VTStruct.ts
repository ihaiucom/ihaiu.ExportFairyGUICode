/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GripButton_VT from "../../Extends/BlackSkin/GripButton_VT";

export default class GripButton_VTStruct extends fairygui.GButton
{
	public m_button : fairygui.Controller;

	
	public static URL:string = "ui://s1yj9w6mp7th2z";
	
	public static DependPackages:string[] = ["BlackSkin"];

	
	public static createInstance():GripButton_VT {
		return <GripButton_VT><any>(fairygui.UIPackage.createObject("BlackSkin","GripButton_VT"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");

		
		
		
	}
}