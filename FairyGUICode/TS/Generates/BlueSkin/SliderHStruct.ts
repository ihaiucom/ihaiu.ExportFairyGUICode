/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

namespace fgui.BlueSkin
{
	export class SliderHStruct extends fairygui.GSlider
	{
		public m_n1 : fairygui.GImage;
		public m_bar : fairygui.GImage;
		public m_grip : Button_icon;

		
		public static URL:string = "uiL://stv9j6m6raoc1e";

		

		public constructor() 
		{
			super();
		}

		protected constructFromXML(xml: any): void 
		{
			super.constructFromXML(xml);
			

			
			this.m_n1 = <fairygui.GImage><any>(this.getChild("n1"));
			this.m_bar = <fairygui.GImage><any>(this.getChild("bar"));
			this.m_grip = <Button_icon><any>(this.getChild("grip"));
			
			
		}
	}
}