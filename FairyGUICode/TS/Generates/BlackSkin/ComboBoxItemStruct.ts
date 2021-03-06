/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

namespace fgui.BlackSkin
{
	export class ComboBoxItemStruct extends fairygui.GButton
	{
		public m_button : fairygui.Controller;
		public m_n2 : fairygui.GGraph;
		public m_title : fairygui.GTextField;

		
		public static URL:string = "ui://s1yj9w6mp7thh";

		
		public static createInstance():ComboBoxItem {
			return <ComboBoxItem><any>(fairygui.UIPackage.createObject("BlackSkin","ComboBoxItem"));
		}

		

		public constructor() 
		{
			super();
		}

		protected constructFromXML(xml: any): void 
		{
			super.constructFromXML(xml);
			
			this.m_button = this.getController("button");

			
			this.m_n2 = <fairygui.GGraph><any>(this.getChild("n2"));
			this.m_title = <fairygui.GTextField><any>(this.getChild("title"));
			
			
		}
	}
}