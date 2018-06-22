/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

namespace fgui.BlackSkin
{
	export class PopupMenuItem2Struct extends fairygui.GButton
	{
		public m_button : fairygui.Controller;
		public m_checked : fairygui.Controller;
		public m_n2 : fairygui.GGraph;
		public m_title : fairygui.GTextField;
		public m_n7 : fairygui.GImage;
		public m_n8 : fairygui.GImage;

		
		public static URL:string = "ui://s1yj9w6mp7th2s";

		

		public constructor() 
		{
			super();
		}

		protected constructFromXML(xml: any): void 
		{
			super.constructFromXML(xml);
			
			this.m_button = this.getController("button");
			this.m_checked = this.getController("checked");

			
			this.m_n2 = <fairygui.GGraph><any>(this.getChild("n2"));
			this.m_title = <fairygui.GTextField><any>(this.getChild("title"));
			this.m_n7 = <fairygui.GImage><any>(this.getChild("n7"));
			this.m_n8 = <fairygui.GImage><any>(this.getChild("n8"));
			
			
		}
	}
}