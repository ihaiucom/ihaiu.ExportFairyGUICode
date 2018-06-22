/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

namespace fgui.BlueSkin
{
	export class ComboBoxStruct extends fairygui.GComboBox
	{
		public m_button : fairygui.Controller;
		public m_n1 : fairygui.GImage;
		public m_n5 : fairygui.GImage;
		public m_n2 : fairygui.GImage;
		public m_n3 : fairygui.GImage;
		public m_title : fairygui.GTextField;
		public m_n6 : fairygui.GImage;

		
		public static URL:string = "ui://stv9j6m6raoc1i";

		

		public constructor() 
		{
			super();
		}

		protected constructFromXML(xml: any): void 
		{
			super.constructFromXML(xml);
			
			this.m_button = this.getController("button");

			
			this.m_n1 = <fairygui.GImage><any>(this.getChild("n1"));
			this.m_n5 = <fairygui.GImage><any>(this.getChild("n5"));
			this.m_n2 = <fairygui.GImage><any>(this.getChild("n2"));
			this.m_n3 = <fairygui.GImage><any>(this.getChild("n3"));
			this.m_title = <fairygui.GTextField><any>(this.getChild("title"));
			this.m_n6 = <fairygui.GImage><any>(this.getChild("n6"));
			
			
		}
	}
}