/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

namespace fgui.BlackSkin
{
	export class IconButtonStruct extends fairygui.GButton
	{
		public m_button : fairygui.Controller;
		public m_n7 : fairygui.GImage;
		public m_n5 : fairygui.GImage;
		public m_n6 : fairygui.GImage;
		public m_icon : fairygui.GLoader;

		
		public static URL:string = "uiL://s1yj9w6mp7th5";

		

		public constructor() 
		{
			super();
		}

		protected constructFromXML(xml: any): void 
		{
			super.constructFromXML(xml);
			
			this.m_button = this.getController("button");

			
			this.m_n7 = <fairygui.GImage><any>(this.getChild("n7"));
			this.m_n5 = <fairygui.GImage><any>(this.getChild("n5"));
			this.m_n6 = <fairygui.GImage><any>(this.getChild("n6"));
			this.m_icon = <fairygui.GLoader><any>(this.getChild("icon"));
			
			
		}
	}
}