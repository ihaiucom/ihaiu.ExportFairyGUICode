/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

namespace fgui.BlackSkin
{
	export class FlatIconButtonStruct extends fairygui.GButton
	{
		public m_button : fairygui.Controller;
		public m_n7 : fairygui.GImage;
		public m_icon : fairygui.GLoader;

		
		public static URL:string = "ui://s1yj9w6mp7th4";
		
		public static DependPackages:string[] = ["BlackSkin"];

		
		public static createInstance():FlatIconButton {
			return <FlatIconButton><any>(fairygui.UIPackage.createObject("BlackSkin","FlatIconButton"));
		}

		

		public constructor() 
		{
			super();
		}

		protected constructFromXML(xml: any): void 
		{
			super.constructFromXML(xml);
			
			this.m_button = this.getController("button");

			
			this.m_n7 = <fairygui.GImage><any>(this.getChild("n7"));
			this.m_icon = <fairygui.GLoader><any>(this.getChild("icon"));
			
			
		}
	}
}