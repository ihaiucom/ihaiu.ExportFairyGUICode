/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

namespace fgui.BlackSkin
{
	export class ScrollBar_VTStruct extends fairygui.GScrollBar
	{
		public m_n0 : fairygui.GImage;
		public m_bar : fairygui.GGraph;
		public m_arrow1 : ScrollUpButton;
		public m_arrow2 : ScrollDownButton;
		public m_grip : GripButton_VT;

		
		public static URL:string = "ui://s1yj9w6mp7th2w";

		
		public static createInstance():ScrollBar_VT {
			return <ScrollBar_VT><any>(fairygui.UIPackage.createObject("BlackSkin","ScrollBar_VT"));
		}

		

		public constructor() 
		{
			super();
		}

		protected constructFromXML(xml: any): void 
		{
			super.constructFromXML(xml);
			

			
			this.m_n0 = <fairygui.GImage><any>(this.getChild("n0"));
			this.m_bar = <fairygui.GGraph><any>(this.getChild("bar"));
			this.m_arrow1 = <ScrollUpButton><any>(this.getChild("arrow1"));
			this.m_arrow2 = <ScrollDownButton><any>(this.getChild("arrow2"));
			this.m_grip = <GripButton_VT><any>(this.getChild("grip"));
			
			
		}
	}
}