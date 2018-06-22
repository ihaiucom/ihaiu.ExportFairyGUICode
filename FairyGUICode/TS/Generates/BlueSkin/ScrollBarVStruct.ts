/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

namespace fgui.BlueSkin
{
	export class ScrollBarVStruct extends fairygui.GScrollBar
	{
		public m_n1 : fairygui.GImage;
		public m_bar : fairygui.GGraph;
		public m_arrow1 : ScrollBar_arrow;
		public m_arrow2 : ScrollBar_arrow;
		public m_grip : ScrollBar_grip;

		
		public static URL:string = "uiL://stv9j6m6raoc1n";

		

		public constructor() 
		{
			super();
		}

		protected constructFromXML(xml: any): void 
		{
			super.constructFromXML(xml);
			

			
			this.m_n1 = <fairygui.GImage><any>(this.getChild("n1"));
			this.m_bar = <fairygui.GGraph><any>(this.getChild("bar"));
			this.m_arrow1 = <ScrollBar_arrow><any>(this.getChild("arrow1"));
			this.m_arrow2 = <ScrollBar_arrow><any>(this.getChild("arrow2"));
			this.m_grip = <ScrollBar_grip><any>(this.getChild("grip"));
			
			
		}
	}
}