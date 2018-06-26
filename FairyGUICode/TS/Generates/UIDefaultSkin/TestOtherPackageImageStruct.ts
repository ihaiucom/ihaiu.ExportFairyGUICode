/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

namespace fgui.UIDefaultSkin
{
	export class TestOtherPackageImageStruct extends fairygui.GComponent
	{
		public m_n0 : fairygui.GImage;

		
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
			

			
			this.m_n0 = <fairygui.GImage><any>(this.getChild("n0"));
			
			
		}
	}
}