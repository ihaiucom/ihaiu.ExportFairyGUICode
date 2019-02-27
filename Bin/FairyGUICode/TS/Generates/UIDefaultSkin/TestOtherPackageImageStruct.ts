/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import TestOtherPackageImage from "../../Extends/UIDefaultSkin/TestOtherPackageImage";

export default class TestOtherPackageImageStruct extends fairygui.GComponent
{

	
	public static URL:string = "ui://snq31xvrhkst4k";
	
	public static DependPackages:string[] = ["UIDefaultSkin","SpriteIcon"];

	
	public static createInstance():TestOtherPackageImage {
		return <TestOtherPackageImage><any>(fairygui.UIPackage.createObject("UIDefaultSkin","TestOtherPackageImage"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		
		
	}
}