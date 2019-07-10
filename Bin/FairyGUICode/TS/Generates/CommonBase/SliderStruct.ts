/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import Slider_grip from "../../Extends/CommonBase/Slider_grip";
import Slider from "../../Extends/CommonBase/Slider";

export default class SliderStruct extends fgui.GSlider
{
	public m_bar : fgui.GImage;
	public m_title : fgui.GTextField;
	public m_grip : Slider_grip;

	
	public static URL:string = "ui://jaoapdicncg9s";
	
	public static DependPackages:string[] = ["CommonBase","_ResImageUI"];

	
	public static createInstance():Slider {
		return <Slider><any>(fgui.UIPackage.createObject("CommonBase","Slider"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		

		
		this.m_bar = <fgui.GImage><any>(this.getChild("bar"));
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		this.m_grip = <Slider_grip><any>(this.getChild("grip"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}