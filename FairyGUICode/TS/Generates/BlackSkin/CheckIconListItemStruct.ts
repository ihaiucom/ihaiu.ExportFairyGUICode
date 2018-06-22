/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

namespace fgui.BlackSkin
{
	export class CheckIconListItemStruct extends fairygui.GButton
	{
		public m_button : fairygui.Controller;
		public m_n4 : fairygui.GImage;
		public m_n8 : fairygui.GImage;
		public m_title : fairygui.GTextField;
		public m_icon : fairygui.GLoader;

		
		public static URL:string = "ui://s1yj9w6mp7th2p";

		

		public constructor() 
		{
			super();
		}

		protected constructFromXML(xml: any): void 
		{
			super.constructFromXML(xml);
			
			this.m_button = this.getController("button");

			
			this.m_n4 = <fairygui.GImage><any>(this.getChild("n4"));
			this.m_n8 = <fairygui.GImage><any>(this.getChild("n8"));
			this.m_title = <fairygui.GTextField><any>(this.getChild("title"));
			this.m_icon = <fairygui.GLoader><any>(this.getChild("icon"));
			
			
		}
	}
}