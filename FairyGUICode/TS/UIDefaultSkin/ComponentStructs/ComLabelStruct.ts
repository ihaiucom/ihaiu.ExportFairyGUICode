/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

namespace fgui.UIDefaultSkin
{
	export class ComLabelStruct extends fairygui.GLabel
	{
		public m_title : fairygui.GTextField;
		public m_icon : fairygui.GImage;

		
		public static URL:string = "uiL://snq31xvrsfsc3x";

		

		public constructor() 
		{
			super();
		}

		protected constructFromXML(xml: any): void 
		{
			super.constructFromXML(xml);
			

			
			this.m_title = <fairygui.GTextField><any>(this.getChild("title"));
			this.m_icon = <fairygui.GImage><any>(this.getChild("icon"));
			
			
		}
	}
}