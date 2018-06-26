/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

namespace fgui.BlueSkin
{
	export class CheckboxStruct extends fairygui.GButton
	{
		public m_button : fairygui.Controller;
		public m_n1 : fairygui.GImage;
		public m_n4 : fairygui.GImage;
		public m_n3 : fairygui.GImage;
		public m_n5 : fairygui.GImage;
		public m_title : fairygui.GTextField;

		
		public static URL:string = "ui://stv9j6m6raoc1a";

		
		public static createInstance():Checkbox {
			return <Checkbox><any>(fairygui.UIPackage.createObject("BlueSkin","Checkbox"));
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
			this.m_n4 = <fairygui.GImage><any>(this.getChild("n4"));
			this.m_n3 = <fairygui.GImage><any>(this.getChild("n3"));
			this.m_n5 = <fairygui.GImage><any>(this.getChild("n5"));
			this.m_title = <fairygui.GTextField><any>(this.getChild("title"));
			
			
		}
	}
}