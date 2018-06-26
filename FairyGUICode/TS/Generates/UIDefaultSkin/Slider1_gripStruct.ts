/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

namespace fgui.UIDefaultSkin
{
	export class Slider1_gripStruct extends fairygui.GButton
	{
		public m_button : fairygui.Controller;
		public m_n1 : fairygui.GImage;
		public m_n2 : fairygui.GImage;

		
		public static URL:string = "ui://snq31xvrsfsc46";
		
		public static DependPackages:string[] = ["UIDefaultSkin"];

		
		public static createInstance():Slider1_grip {
			return <Slider1_grip><any>(fairygui.UIPackage.createObject("UIDefaultSkin","Slider1_grip"));
		}

		

		public constructor() 
		{
			super();
		}

		protected constructFromXML(xml: any): void 
		{
			super.constructFromXML(xml);
			
			this.m_button = this.getController("button");

			
			this.m_n1 = <fairygui.GImage><any>(this.getChild("n1"));
			this.m_n2 = <fairygui.GImage><any>(this.getChild("n2"));
			
			
		}
	}
}