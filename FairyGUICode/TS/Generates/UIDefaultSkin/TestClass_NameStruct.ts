/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

namespace fgui.UIDefaultSkin
{
	export class TestClass_NameStruct extends fairygui.GComponent
	{

		
		public static URL:string = "ui://snq31xvroett4i";
		
		public static DependPackages:string[] = ["UIDefaultSkin"];

		
		public static createInstance():TestClass_Name {
			return <TestClass_Name><any>(fairygui.UIPackage.createObject("UIDefaultSkin","Test-Class_Name"));
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
}