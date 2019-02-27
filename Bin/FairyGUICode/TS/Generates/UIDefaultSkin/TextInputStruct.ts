/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import TextInput from "../../Extends/UIDefaultSkin/TextInput";

export default class TextInputStruct extends fairygui.GLabel
{
	public m_grayed : fairygui.Controller;
	public m_title : fairygui.GTextInput;

	
	public static URL:string = "ui://snq31xvrraoc3p";
	
	public static DependPackages:string[] = ["UIDefaultSkin"];

	
	public static createInstance():TextInput {
		return <TextInput><any>(fairygui.UIPackage.createObject("UIDefaultSkin","TextInput"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_grayed = this.getController("grayed");

		
		this.m_title = <fairygui.GTextInput><any>(this.getChild("title"));
		
		
	}
}