/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

namespace fgui.UIDefaultSkin
{
	export class TestTextStruct extends fairygui.GComponent
	{
		public m_textNormal : fairygui.GTextField;
		public m_textInput : fairygui.GTextInput;
		public m_textInputPassword : fairygui.GTextInput;
		public m_textInput : fairygui.GTextInput;
		public m_textInputUBB : fairygui.GTextInput;
		public m_textInputSignalLine : fairygui.GTextInput;
		public m_ftxt : fairygui.GRichTextField;
		public m_ftxtUbb : fairygui.GRichTextField;
		public m_shapeRect : fairygui.GGraph;
		public m_shapeCircle : fairygui.GGraph;
		public m_shapeEmpty : fairygui.GGraph;

		
		public static URL:string = "ui://snq31xvroett4c";

		
		public static createInstance():TestText {
			return <TestText><any>(fairygui.UIPackage.createObject("UIDefaultSkin","TestText"));
		}

		

		public constructor() 
		{
			super();
		}

		protected constructFromXML(xml: any): void 
		{
			super.constructFromXML(xml);
			

			
			this.m_textNormal = <fairygui.GTextField><any>(this.getChild("textNormal"));
			this.m_textInput = <fairygui.GTextInput><any>(this.getChild("textInput"));
			this.m_textInputPassword = <fairygui.GTextInput><any>(this.getChild("textInputPassword"));
			this.m_textInput = <fairygui.GTextInput><any>(this.getChild("textInput"));
			this.m_textInputUBB = <fairygui.GTextInput><any>(this.getChild("textInputUBB"));
			this.m_textInputSignalLine = <fairygui.GTextInput><any>(this.getChild("textInputSignalLine"));
			this.m_ftxt = <fairygui.GRichTextField><any>(this.getChild("ftxt"));
			this.m_ftxtUbb = <fairygui.GRichTextField><any>(this.getChild("ftxtUbb"));
			this.m_shapeRect = <fairygui.GGraph><any>(this.getChild("shapeRect"));
			this.m_shapeCircle = <fairygui.GGraph><any>(this.getChild("shapeCircle"));
			this.m_shapeEmpty = <fairygui.GGraph><any>(this.getChild("shapeEmpty"));
			
			
		}
	}
}