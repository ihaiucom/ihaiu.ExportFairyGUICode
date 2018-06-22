/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

namespace fgui.BlackSkin
{
	export class ProgressBarStruct extends fairygui.GProgressBar
	{
		public m_n0 : fairygui.GImage;
		public m_bar : fairygui.GImage;

		
		public static URL:string = "uiL://s1yj9w6mp7th2u";

		

		public constructor() 
		{
			super();
		}

		protected constructFromXML(xml: any): void 
		{
			super.constructFromXML(xml);
			

			
			this.m_n0 = <fairygui.GImage><any>(this.getChild("n0"));
			this.m_bar = <fairygui.GImage><any>(this.getChild("bar"));
			
			
		}
	}
}