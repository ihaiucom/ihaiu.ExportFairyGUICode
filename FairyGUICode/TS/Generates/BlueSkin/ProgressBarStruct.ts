/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

namespace fgui.BlueSkin
{
	export class ProgressBarStruct extends fairygui.GProgressBar
	{
		public m_n1 : fairygui.GImage;
		public m_bar : fairygui.GImage;

		
		public static URL:string = "ui://stv9j6m6raoc1h";

		
		public static createInstance():ProgressBar {
			return <ProgressBar><any>(fairygui.UIPackage.createObject("BlueSkin","ProgressBar"));
		}

		

		public constructor() 
		{
			super();
		}

		protected constructFromXML(xml: any): void 
		{
			super.constructFromXML(xml);
			

			
			this.m_n1 = <fairygui.GImage><any>(this.getChild("n1"));
			this.m_bar = <fairygui.GImage><any>(this.getChild("bar"));
			
			
		}
	}
}