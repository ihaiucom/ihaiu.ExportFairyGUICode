/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import Slider1_grip from "../../Extends/UIDefaultSkin/Slider1_grip";
import Slider1 from "../../Extends/UIDefaultSkin/Slider1";

export default class Slider1Struct extends fairygui.GSlider
{
	public m_bar : fairygui.GImage;
	public m_title : fairygui.GTextField;
	public m_grip : Slider1_grip;

	
	public static URL:string = "ui://snq31xvrsfsc47";
	
	public static DependPackages:string[] = ["UIDefaultSkin"];

	
	public static createInstance():Slider1 {
		return <Slider1><any>(fairygui.UIPackage.createObject("UIDefaultSkin","Slider1"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_bar = <fairygui.GImage><any>(this.getChild("bar"));
		this.m_title = <fairygui.GTextField><any>(this.getChild("title"));
		this.m_grip = <Slider1_grip><any>(this.getChild("grip"));
		
		
	}
}