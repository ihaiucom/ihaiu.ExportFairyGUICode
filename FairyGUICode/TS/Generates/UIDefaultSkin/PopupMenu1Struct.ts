/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

namespace fgui.UIDefaultSkin
{
	export class PopupMenu1Struct extends fairygui.GComponent
	{
		public m_n1 : fairygui.GImage;
		public m_list : fairygui.GList;

		
		public static URL:string = "ui://snq31xvrsfsc49";

		

		public constructor() 
		{
			super();
		}

		protected constructFromXML(xml: any): void 
		{
			super.constructFromXML(xml);
			

			
			this.m_n1 = <fairygui.GImage><any>(this.getChild("n1"));
			this.m_list = <fairygui.GList><any>(this.getChild("list"));
			
			
		}
	}
}