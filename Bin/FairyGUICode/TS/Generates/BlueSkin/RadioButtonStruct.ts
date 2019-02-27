/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import RadioButton from "../../Extends/BlueSkin/RadioButton";

export default class RadioButtonStruct extends fairygui.GButton
{
	public m_button : fairygui.Controller;
	public m_title : fairygui.GTextField;

	
	public static URL:string = "ui://stv9j6m6raoc1b";
	
	public static DependPackages:string[] = ["BlueSkin"];

	
	public static createInstance():RadioButton {
		return <RadioButton><any>(fairygui.UIPackage.createObject("BlueSkin","RadioButton"));
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