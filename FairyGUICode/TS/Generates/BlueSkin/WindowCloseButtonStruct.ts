/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

namespace fgui.BlueSkin
{
	export class WindowCloseButtonStruct extends fairygui.GButton
	{
		public m_button : fairygui.Controller;
		public m_n1 : fairygui.GImage;

		
		public static URL:string = "ui://stv9j6m6raoc9";

		
		public static createInstance():WindowCloseButton {
			return <WindowCloseButton><any>(fairygui.UIPackage.createObject("BlueSkin","WindowCloseButton"));
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
			
			
		}
	}
}