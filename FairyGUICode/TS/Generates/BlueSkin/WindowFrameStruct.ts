/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

namespace fgui.BlueSkin
{
	export class WindowFrameStruct extends fairygui.GLabel
	{
		public m_hasClose : fairygui.Controller;
		public m_n0 : fairygui.GImage;
		public m_n1 : fairygui.GImage;
		public m_contentArea : fairygui.GGraph;
		public m_dragArea : fairygui.GGraph;
		public m_title : fairygui.GTextField;
		public m_n5 : WindowCloseButton;

		
		public static URL:string = "ui://stv9j6m6raoc1j";

		
		public static createInstance():WindowFrame {
			return <WindowFrame><any>(fairygui.UIPackage.createObject("BlueSkin","WindowFrame"));
		}

		

		public constructor() 
		{
			super();
		}

		protected constructFromXML(xml: any): void 
		{
			super.constructFromXML(xml);
			
			this.m_hasClose = this.getController("hasClose");

			
			this.m_n0 = <fairygui.GImage><any>(this.getChild("n0"));
			this.m_n1 = <fairygui.GImage><any>(this.getChild("n1"));
			this.m_contentArea = <fairygui.GGraph><any>(this.getChild("contentArea"));
			this.m_dragArea = <fairygui.GGraph><any>(this.getChild("dragArea"));
			this.m_title = <fairygui.GTextField><any>(this.getChild("title"));
			this.m_n5 = <WindowCloseButton><any>(this.getChild("n5"));
			
			
		}
	}
}