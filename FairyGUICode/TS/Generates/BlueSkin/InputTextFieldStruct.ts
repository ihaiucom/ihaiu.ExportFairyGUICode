/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

namespace fgui.BlueSkin
{
	export class InputTextFieldStruct extends fairygui.GLabel
	{
		public m_n0 : fairygui.GImage;
		public m_title : fairygui.GTextInput;

		
		public static URL:string = "ui://stv9j6m6raoc1c";
		
		public static DependPackages:string[] = ["BlueSkin"];

		
		public static createInstance():InputTextField {
			return <InputTextField><any>(fairygui.UIPackage.createObject("BlueSkin","InputTextField"));
		}

		

		public constructor() 
		{
			super();
		}

		protected constructFromXML(xml: any): void 
		{
			super.constructFromXML(xml);
			

			
			this.m_n0 = <fairygui.GImage><any>(this.getChild("n0"));
			this.m_title = <fairygui.GTextInput><any>(this.getChild("title"));
			
			
		}
	}
}