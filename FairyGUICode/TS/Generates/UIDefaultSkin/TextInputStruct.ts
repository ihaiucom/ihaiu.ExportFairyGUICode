/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

namespace fgui.UIDefaultSkin
{
	export class TextInputStruct extends fairygui.GLabel
	{
		public m_grayed : fairygui.Controller;
		public m_n6 : fairygui.GImage;
		public m_n7 : fairygui.GImage;
		public m_title : fairygui.GTextInput;

		
		public static URL:string = "ui://snq31xvrraoc3p";

		

		public constructor() 
		{
			super();
		}

		protected constructFromXML(xml: any): void 
		{
			super.constructFromXML(xml);
			
			this.m_grayed = this.getController("grayed");

			
			this.m_n6 = <fairygui.GImage><any>(this.getChild("n6"));
			this.m_n7 = <fairygui.GImage><any>(this.getChild("n7"));
			this.m_title = <fairygui.GTextInput><any>(this.getChild("title"));
			
			
		}
	}
}