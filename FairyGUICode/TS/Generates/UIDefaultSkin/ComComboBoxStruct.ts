/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

namespace fgui.UIDefaultSkin
{
	export class ComComboBoxStruct extends fairygui.GComboBox
	{
		public m_button : fairygui.Controller;
		public m_n1 : fairygui.GImage;
		public m_n2 : fairygui.GImage;
		public m_title : fairygui.GTextField;

		
		public static URL:string = "ui://snq31xvrsfsc40";
		
		public static DependPackages:string[] = ["UIDefaultSkin"];

		
		public static createInstance():ComComboBox {
			return <ComComboBox><any>(fairygui.UIPackage.createObject("UIDefaultSkin","ComComboBox"));
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
			this.m_n2 = <fairygui.GImage><any>(this.getChild("n2"));
			this.m_title = <fairygui.GTextField><any>(this.getChild("title"));
			
			
		}
	}
}