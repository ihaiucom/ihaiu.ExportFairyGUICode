/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

namespace fgui.UIDefaultSkin
{
	export class KeyValueInputStruct extends fairygui.GComponent
	{
		public m_n5 : fairygui.GTextField;
		public m_n4 : TextInput;

		
		public static URL:string = "ui://snq31xvrraoc3q";

		
		public static createInstance():KeyValueInput {
			return <KeyValueInput><any>(fairygui.UIPackage.createObject("UIDefaultSkin","KeyValueInput"));
		}

		

		public constructor() 
		{
			super();
		}

		protected constructFromXML(xml: any): void 
		{
			super.constructFromXML(xml);
			

			
			this.m_n5 = <fairygui.GTextField><any>(this.getChild("n5"));
			this.m_n4 = <TextInput><any>(this.getChild("n4"));
			
			
		}
	}
}