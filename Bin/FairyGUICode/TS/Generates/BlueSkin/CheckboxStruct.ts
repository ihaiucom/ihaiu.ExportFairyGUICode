/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import Checkbox from "../../Extends/BlueSkin/Checkbox";

export default class CheckboxStruct extends fairygui.GButton
{
	public m_button : fairygui.Controller;
	public m_title : fairygui.GTextField;

	
	public static URL:string = "ui://stv9j6m6raoc1a";
	
	public static DependPackages:string[] = ["BlueSkin"];

	
	public static createInstance():Checkbox {
		return <Checkbox><any>(fairygui.UIPackage.createObject("BlueSkin","Checkbox"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");

		
		this.m_title = <fairygui.GTextField><any>(this.getChild("title"));
		
		
	}
}