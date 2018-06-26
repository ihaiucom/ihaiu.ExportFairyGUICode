/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

namespace fgui.BlackSkin
{
	export class TitleBarStruct extends fairygui.GButton
	{
		public m_button : fairygui.Controller;
		public m_n1 : fairygui.GImage;
		public m_title : fairygui.GTextField;
		public m_n3 : fairygui.GImage;
		public m_n4 : fairygui.GImage;

		
		public static URL:string = "ui://s1yj9w6mp7th3a";
		
		public static DependPackages:string[] = ["BlackSkin"];

		
		public static createInstance():TitleBar {
			return <TitleBar><any>(fairygui.UIPackage.createObject("BlackSkin","TitleBar"));
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
			this.m_title = <fairygui.GTextField><any>(this.getChild("title"));
			this.m_n3 = <fairygui.GImage><any>(this.getChild("n3"));
			this.m_n4 = <fairygui.GImage><any>(this.getChild("n4"));
			
			
		}
	}
}