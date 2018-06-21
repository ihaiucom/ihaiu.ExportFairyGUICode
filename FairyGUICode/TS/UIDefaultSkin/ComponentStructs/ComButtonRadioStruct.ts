/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

namespace fgui.UIDefaultSkin
{
	export class ComButtonRadioStruct extends fairygui.GButton
	{
		public m_button : fairygui.Controller;
		public m_n1 : fairygui.GImage;
		public m_n2 : fairygui.GImage;
		public m_n3 : fairygui.GImage;
		public m_n4 : fairygui.GImage;
		public m_title : fairygui.GTextField;
		public m_icon : fairygui.GLoader;

		
		public static URL:string = "uiL://snq31xvrsfsc3w";

		

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
			this.m_n3 = <fairygui.GImage><any>(this.getChild("n3"));
			this.m_n4 = <fairygui.GImage><any>(this.getChild("n4"));
			this.m_title = <fairygui.GTextField><any>(this.getChild("title"));
			this.m_icon = <fairygui.GLoader><any>(this.getChild("icon"));
			
			
		}
	}
}