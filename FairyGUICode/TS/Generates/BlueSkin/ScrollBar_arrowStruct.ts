/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

namespace fgui.BlueSkin
{
	export class ScrollBar_arrowStruct extends fairygui.GButton
	{
		public m_button : fairygui.Controller;
		public m_n1 : fairygui.GImage;
		public m_n2 : fairygui.GImage;
		public m_icon : fairygui.GLoader;

		
		public static URL:string = "ui://stv9j6m6raoc3";

		
		public static createInstance():ScrollBar_arrow {
			return <ScrollBar_arrow><any>(fairygui.UIPackage.createObject("BlueSkin","ScrollBar_arrow"));
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
			this.m_icon = <fairygui.GLoader><any>(this.getChild("icon"));
			
			
		}
	}
}