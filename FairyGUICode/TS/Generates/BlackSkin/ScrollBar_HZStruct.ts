/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

namespace fgui.BlackSkin
{
	export class ScrollBar_HZStruct extends fairygui.GScrollBar
	{
		public m_n0 : fairygui.GImage;
		public m_bar : fairygui.GGraph;
		public m_grip : GripButton_HZ;
		public m_arrow2 : ScrollRightButton;
		public m_arrow1 : ScrollLeftButton;

		
		public static URL:string = "uiL://s1yj9w6mp7th30";

		

		public constructor() 
		{
			super();
		}

		protected constructFromXML(xml: any): void 
		{
			super.constructFromXML(xml);
			

			
			this.m_n0 = <fairygui.GImage><any>(this.getChild("n0"));
			this.m_bar = <fairygui.GGraph><any>(this.getChild("bar"));
			this.m_grip = <GripButton_HZ><any>(this.getChild("grip"));
			this.m_arrow2 = <ScrollRightButton><any>(this.getChild("arrow2"));
			this.m_arrow1 = <ScrollLeftButton><any>(this.getChild("arrow1"));
			
			
		}
	}
}