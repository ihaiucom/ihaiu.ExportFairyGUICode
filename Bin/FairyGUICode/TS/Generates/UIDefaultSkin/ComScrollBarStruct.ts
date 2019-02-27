/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ComScrollBar_arrow1 from "../../Extends/UIDefaultSkin/ComScrollBar_arrow1";
import ComScrollBar_arrow2 from "../../Extends/UIDefaultSkin/ComScrollBar_arrow2";
import ComScrollBar_grip from "../../Extends/UIDefaultSkin/ComScrollBar_grip";
import ComScrollBar from "../../Extends/UIDefaultSkin/ComScrollBar";

export default class ComScrollBarStruct extends fairygui.GScrollBar
{
	public m_bar : fairygui.GGraph;
	public m_arrow1 : ComScrollBar_arrow1;
	public m_arrow2 : ComScrollBar_arrow2;
	public m_grip : ComScrollBar_grip;

	
	public static URL:string = "ui://snq31xvrsfsc44";
	
	public static DependPackages:string[] = ["UIDefaultSkin"];

	
	public static createInstance():ComScrollBar {
		return <ComScrollBar><any>(fairygui.UIPackage.createObject("UIDefaultSkin","ComScrollBar"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_bar = <fairygui.GGraph><any>(this.getChild("bar"));
		this.m_arrow1 = <ComScrollBar_arrow1><any>(this.getChild("arrow1"));
		this.m_arrow2 = <ComScrollBar_arrow2><any>(this.getChild("arrow2"));
		this.m_grip = <ComScrollBar_grip><any>(this.getChild("grip"));
		
		
	}
}