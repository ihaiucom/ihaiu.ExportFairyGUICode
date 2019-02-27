/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import Checkbox from "../../Extends/BlackSkin/Checkbox";

export default class CheckboxStruct extends fairygui.GButton
{
	public m_button : fairygui.Controller;
	public m_title : fairygui.GTextField;

	
	public static URL:string = "ui://s1yj9w6mp7th8";
	
	public static DependPackages:string[] = ["BlackSkin"];

	
	public static createInstance():Checkbox {
		return <Checkbox><any>(fairygui.UIPackage.createObject("BlackSkin","Checkbox"));
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