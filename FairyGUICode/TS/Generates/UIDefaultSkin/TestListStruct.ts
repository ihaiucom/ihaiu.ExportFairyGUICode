/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

namespace fgui.UIDefaultSkin
{
	export class TestListStruct extends fairygui.GComponent
	{
		public m_list : fairygui.GList;

		
		public static URL:string = "ui://snq31xvroett4e";

		

		public constructor() 
		{
			super();
		}

		protected constructFromXML(xml: any): void 
		{
			super.constructFromXML(xml);
			

			
			this.m_list = <fairygui.GList><any>(this.getChild("list"));
			
			
		}
	}
}