/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import InputTextArea from "../../Extends/BlueSkin/InputTextArea";

export default class InputTextAreaStruct extends fairygui.GLabel
{
	public m_title : fairygui.GTextInput;

	
	public static URL:string = "ui://stv9j6m6raoc1d";
	
	public static DependPackages:string[] = ["BlueSkin"];

	
	public static createInstance():InputTextArea {
		return <InputTextArea><any>(fairygui.UIPackage.createObject("BlueSkin","InputTextArea"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_title = <fairygui.GTextInput><any>(this.getChild("title"));
		
		
	}
}