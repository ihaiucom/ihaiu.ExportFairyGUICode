/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

namespace fgui.BlackSkin
{
	export class ListItemStruct extends fairygui.GButton
	{
		public m_button : fairygui.Controller;
		public m_n0 : fairygui.GImage;
		public m_n1 : fairygui.GImage;
		public m_title : fairygui.GTextField;

		
		public static URL:string = "ui://s1yj9w6mp7th2n";

		
		public static createInstance():ListItem {
			return <ListItem><any>(fairygui.UIPackage.createObject("BlackSkin","ListItem"));
		}

		

		public constructor() 
		{
			super();
		}

		protected constructFromXML(xml: any): void 
		{
			super.constructFromXML(xml);
			
			this.m_button = this.getController("button");

			
			this.m_n0 = <fairygui.GImage><any>(this.getChild("n0"));
			this.m_n1 = <fairygui.GImage><any>(this.getChild("n1"));
			this.m_title = <fairygui.GTextField><any>(this.getChild("title"));
			
			
		}
	}
}