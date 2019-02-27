/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ProgressBar from "../../Extends/BlueSkin/ProgressBar";

export default class ProgressBarStruct extends fairygui.GProgressBar
{
	public m_bar : fairygui.GImage;

	
	public static URL:string = "ui://stv9j6m6raoc1h";
	
	public static DependPackages:string[] = ["BlueSkin"];

	
	public static createInstance():ProgressBar {
		return <ProgressBar><any>(fairygui.UIPackage.createObject("BlueSkin","ProgressBar"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_bar = <fairygui.GImage><any>(this.getChild("bar"));
		
		
	}
}