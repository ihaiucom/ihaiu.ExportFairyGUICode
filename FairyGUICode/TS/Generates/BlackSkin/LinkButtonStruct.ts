/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

namespace fgui.BlackSkin
{
	export class LinkButtonStruct extends fairygui.GButton
	{
		public m_button : fairygui.Controller;
		public m_title : fairygui.GTextField;

		
		public static URL:string = "ui://s1yj9w6mp7th7";

		

		public constructor() 
		{
			super();
		}

		protected constructFromXML(xml: any): void 
		{
			super.constructFromXML(xml);
			
			this.m_button = this.getController("button");

			
			this.m_title = <fairygui.GTextField><any>(this.getChild("title"));
			
			
		}
	}
}