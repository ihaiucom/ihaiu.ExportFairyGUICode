/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MailLoader from "../../Extends/ModuleEmail/MailLoader";

export default class MailLoaderStruct extends fgui.GComponent
{

	
	public static URL:string = "ui://41exsi4svqq04";
	
	public static DependPackages:string[] = ["ModuleEmail"];

	
	public static createInstance():MailLoader {
		return <MailLoader><any>(fgui.UIPackage.createObject("ModuleEmail","MailLoader"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		

		
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}