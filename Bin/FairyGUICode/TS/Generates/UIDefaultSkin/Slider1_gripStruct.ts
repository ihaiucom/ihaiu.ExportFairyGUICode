/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import Slider1_grip from "../../Extends/UIDefaultSkin/Slider1_grip";

export default class Slider1_gripStruct extends fairygui.GButton
{
	public m_button : fairygui.Controller;

	
	public static URL:string = "ui://snq31xvrsfsc46";
	
	public static DependPackages:string[] = ["UIDefaultSkin"];

	
	public static createInstance():Slider1_grip {
		return <Slider1_grip><any>(fairygui.UIPackage.createObject("UIDefaultSkin","Slider1_grip"));
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