/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import InformationScrollBar_grip from "../../Extends/CommonBase/InformationScrollBar_grip";
import InformationScrollBar from "../../Extends/CommonBase/InformationScrollBar";

export default class InformationScrollBarStruct extends fgui.GScrollBar
{
	public m_bar : fgui.GGraph;
	public m_grip : InformationScrollBar_grip;

	
	public static URL:string = "ui://jaoapdicmaamxj";
	
	public static DependPackages:string[] = ["CommonBase","_ResImageUIV1"];

	
	public static createInstance():InformationScrollBar {
		return <InformationScrollBar><any>(fgui.UIPackage.createObject("CommonBase","InformationScrollBar"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		

		
		this.m_bar = <fgui.GGraph><any>(this.getChild("bar"));
		this.m_grip = <InformationScrollBar_grip><any>(this.getChild("grip"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}