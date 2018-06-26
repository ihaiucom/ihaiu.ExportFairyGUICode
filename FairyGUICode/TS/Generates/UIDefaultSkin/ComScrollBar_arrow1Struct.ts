/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

namespace fgui.UIDefaultSkin
{
	export class ComScrollBar_arrow1Struct extends fairygui.GButton
	{
		public m_button : fairygui.Controller;
		public m_n1 : fairygui.GImage;

		
		public static URL:string = "ui://snq31xvrsfsc41";

		
		public static createInstance():ComScrollBar_arrow1 {
			return <ComScrollBar_arrow1><any>(fairygui.UIPackage.createObject("UIDefaultSkin","ComScrollBar_arrow1"));
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