/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

namespace fgui.UIDefaultSkin
{
	export class ComProgressBarStruct extends fairygui.GProgressBar
	{
		public m_n1 : fairygui.GImage;
		public m_bar : fairygui.GImage;
		public m_title : fairygui.GTextField;

		
		public static URL:string = "ui://snq31xvrsfsc45";

		

		public constructor() 
		{
			super();
		}

		protected constructFromXML(xml: any): void 
		{
			super.constructFromXML(xml);
			

			
			this.m_n1 = <fairygui.GImage><any>(this.getChild("n1"));
			this.m_bar = <fairygui.GImage><any>(this.getChild("bar"));
			this.m_title = <fairygui.GTextField><any>(this.getChild("title"));
			
			
		}
	}
}