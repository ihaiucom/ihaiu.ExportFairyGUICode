/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

namespace fgui.UIDefaultSkin
{
	export class ComComboBox_popupStruct extends fairygui.GComponent
	{
		public m_n1 : fairygui.GImage;
		public m_list : fairygui.GList;

		
		public static URL:string = "uiL://snq31xvrsfsc3z";

		

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