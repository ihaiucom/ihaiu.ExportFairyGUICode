/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

namespace fgui.UIDefaultSkin
{
	export class ComScrollBarStruct extends fairygui.GScrollBar
	{
		public m_n1 : fairygui.GImage;
		public m_bar : fairygui.GGraph;
		public m_arrow1 : ComScrollBar_arrow1;
		public m_arrow2 : ComScrollBar_arrow2;
		public m_grip : ComScrollBar_grip;

		
		public static URL:string = "ui://snq31xvrsfsc44";

		

		public constructor() 
		{
			super();
		}

		protected constructFromXML(xml: any): void 
		{
			super.constructFromXML(xml);
			

			
			this.m_n1 = <fairygui.GImage><any>(this.getChild("n1"));
			this.m_bar = <fairygui.GGraph><any>(this.getChild("bar"));
			this.m_arrow1 = <ComScrollBar_arrow1><any>(this.getChild("arrow1"));
			this.m_arrow2 = <ComScrollBar_arrow2><any>(this.getChild("arrow2"));
			this.m_grip = <ComScrollBar_grip><any>(this.getChild("grip"));
			
			
		}
	}
}