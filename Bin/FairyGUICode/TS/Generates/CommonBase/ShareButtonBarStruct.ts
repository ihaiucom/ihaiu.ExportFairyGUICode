/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ShareButton from "../../Extends/CommonBase/ShareButton";
import ShareButtonBar from "../../Extends/CommonBase/ShareButtonBar";

export default class ShareButtonBarStruct extends fgui.GComponent
{
	public m_shareWeiXinButton : ShareButton;
	public m_shareSinaButton : ShareButton;

	
	public static URL:string = "ui://jaoapdicla1j1q";
	
	public static DependPackages:string[] = ["CommonBase","_ResImageUIV1"];

	
	public static createInstance():ShareButtonBar {
		return <ShareButtonBar><any>(fgui.UIPackage.createObject("CommonBase","ShareButtonBar"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		

		
		this.m_shareWeiXinButton = <ShareButton><any>(this.getChild("shareWeiXinButton"));
		this.m_shareSinaButton = <ShareButton><any>(this.getChild("shareSinaButton"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}