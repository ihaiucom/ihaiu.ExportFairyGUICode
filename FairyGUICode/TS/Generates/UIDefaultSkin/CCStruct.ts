/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

namespace fgui.UIDefaultSkin
{
	export class CCStruct extends fairygui.GComponent
	{
		public m_img : fairygui.GImage;

		
		public static URL:string = "ui://snq31xvroett4h";
		
		public static DependPackages:string[] = ["UIDefaultSkin"];

		
		public static createInstance():CC {
			return <CC><any>(fairygui.UIPackage.createObject("UIDefaultSkin","CC"));
		}

		

		public constructor() 
		{
			super();
		}

		protected constructFromXML(xml: any): void 
		{
			super.constructFromXML(xml);
			

			
			this.m_img = <fairygui.GImage><any>(this.getChild("img"));
			
			
		}
	}
}