/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

namespace fgui.UIDefaultSkin
{
	export class RedButtonStruct extends fairygui.GButton
	{
		public m_button : fairygui.Controller;
		public m_n1 : fairygui.GImage;
		public m_n2 : fairygui.GImage;
		public m_title : fairygui.GTextField;
		public m_icon : fairygui.GImage;

		
		public static URL:string = "ui://snq31xvrraoc3n";

		
		public static createInstance():RedButton {
			return <RedButton><any>(fairygui.UIPackage.createObject("UIDefaultSkin","RedButton"));
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
			this.m_title = <fairygui.GTextField><any>(this.getChild("title"));
			this.m_icon = <fairygui.GImage><any>(this.getChild("icon"));
			
			
		}
	}
}