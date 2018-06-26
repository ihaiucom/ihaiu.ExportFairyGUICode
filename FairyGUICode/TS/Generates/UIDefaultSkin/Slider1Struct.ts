/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

namespace fgui.UIDefaultSkin
{
	export class Slider1Struct extends fairygui.GSlider
	{
		public m_n1 : fairygui.GImage;
		public m_bar : fairygui.GImage;
		public m_title : fairygui.GTextField;
		public m_grip : Slider1_grip;

		
		public static URL:string = "ui://snq31xvrsfsc47";

		
		public static createInstance():Slider1 {
			return <Slider1><any>(fairygui.UIPackage.createObject("UIDefaultSkin","Slider1"));
		}

		

		public constructor() 
		{
			super();
		}

		protected constructFromXML(xml: any): void 
		{
			super.constructFromXML(xml);
			

			
			this.m_n1 = <fairygui.GImage><any>(this.getChild("n1"));
			this.m_bar = <fairygui.GImage><any>(this.getChild("bar"));
			this.m_title = <fairygui.GTextField><any>(this.getChild("title"));
			this.m_grip = <Slider1_grip><any>(this.getChild("grip"));
			
			
		}
	}
}