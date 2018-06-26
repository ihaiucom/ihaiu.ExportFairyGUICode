/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

namespace fgui.UIDefaultSkin
{
	export class HelpButtonStruct extends fairygui.GButton
	{
		public m_button : fairygui.Controller;
		public m_icon : fairygui.GImage;

		
		public static URL:string = "ui://snq31xvrraoc3o";
		
		public static DependPackages:string[] = ["UIDefaultSkin"];

		
		public static createInstance():HelpButton {
			return <HelpButton><any>(fairygui.UIPackage.createObject("UIDefaultSkin","HelpButton"));
		}

		

		public constructor() 
		{
			super();
		}

		protected constructFromXML(xml: any): void 
		{
			super.constructFromXML(xml);
			
			this.m_button = this.getController("button");

			
			this.m_icon = <fairygui.GImage><any>(this.getChild("icon"));
			
			
		}
	}
}