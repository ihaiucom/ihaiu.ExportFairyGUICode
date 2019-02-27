/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import KeyValueInput from "../../Extends/UIDefaultSkin/KeyValueInput";

export default class KeyValueInputStruct extends fairygui.GComponent
{

	
	public static URL:string = "ui://snq31xvrraoc3q";
	
	public static DependPackages:string[] = ["UIDefaultSkin"];

	
	public static createInstance():KeyValueInput {
		return <KeyValueInput><any>(fairygui.UIPackage.createObject("UIDefaultSkin","KeyValueInput"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		
		
	}
}