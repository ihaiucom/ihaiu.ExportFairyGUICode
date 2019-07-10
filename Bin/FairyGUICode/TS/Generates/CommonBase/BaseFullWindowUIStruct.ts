/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CloseButton from "../../Extends/CommonBase/CloseButton";
import BaseFullWindowUI from "../../Extends/CommonBase/BaseFullWindowUI";

export default class BaseFullWindowUIStruct extends fgui.GLabel
{
	public m_icon : fgui.GLoader;
	public m_closeBtn : CloseButton;

	
	public static URL:string = "ui://jaoapdiceftvc";
	
	public static DependPackages:string[] = ["CommonBase","_ResImageUIV1"];

	
	public static createInstance():BaseFullWindowUI {
		return <BaseFullWindowUI><any>(fgui.UIPackage.createObject("CommonBase","BaseFullWindowUI"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		this.m_closeBtn = <CloseButton><any>(this.getChild("closeBtn"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}