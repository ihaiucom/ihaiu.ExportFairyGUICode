/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

namespace fgui.BlueSkin
{
	export class ComboBox_popupStruct extends fairygui.GComponent
	{
		public m_n0 : fairygui.GImage;
		public m_list : fairygui.GList;

		
		public static URL:string = "uiL://stv9j6m6raoc7";

		

		public constructor() 
		{
			super();
		}

		protected constructFromXML(xml: any): void 
		{
			super.constructFromXML(xml);
			

			
			this.m_n0 = <fairygui.GImage><any>(this.getChild("n0"));
			this.m_list = <fairygui.GList><any>(this.getChild("list"));
			
			
		}
	}
}