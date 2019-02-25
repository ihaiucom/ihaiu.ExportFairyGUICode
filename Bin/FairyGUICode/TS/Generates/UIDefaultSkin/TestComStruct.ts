/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import RightArrow from "../../Extends/UIDefaultSkin/RightArrow.ts";
import HelpButton from "../../Extends/UIDefaultSkin/HelpButton.ts";

export default class TestComStruct extends fairygui.GComponent
{
	public m_rightArrow : RightArrow;
	public m_helpButton : HelpButton;

	
	public static URL:string = "ui://snq31xvroett4f";
	
	public static DependPackages:string[] = ["UIDefaultSkin","BlackSkin"];

	
	public static createInstance():TestCom {
		return <TestCom><any>(fairygui.UIPackage.createObject("UIDefaultSkin","TestCom"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_rightArrow = <RightArrow><any>(this.getChild("rightArrow"));
		this.m_helpButton = <HelpButton><any>(this.getChild("helpButton"));
		
		
	}
}