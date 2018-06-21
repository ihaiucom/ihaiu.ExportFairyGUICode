/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fgui.UIDefaultSkin {

	export class TestText extends fairygui.GComponent {

		public textNormal:fairygui.GTextField;
		public textInput:fairygui.GTextInput;
		public textInputPassword:fairygui.GTextInput;
		public textInput_2:fairygui.GTextInput;
		public textInputUBB:fairygui.GTextInput;
		public textInputSignalLine:fairygui.GTextInput;
		public ftxt:fairygui.GRichTextField;
		public ftxtUbb:fairygui.GRichTextField;
		public shapeRect:fairygui.GGraph;
		public shapeCircle:fairygui.GGraph;
		public shapeEmpty:fairygui.GGraph;

		public static URL:string = "ui://snq31xvroett4c";

		public static createInstance():TestText {
			return <TestText><any>(fairygui.UIPackage.createObject("UIDefaultSkin","TestText"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.textNormal = <fairygui.GTextField><any>(this.getChild("textNormal"));
			this.textInput = <fairygui.GTextInput><any>(this.getChild("textInput"));
			this.textInputPassword = <fairygui.GTextInput><any>(this.getChild("textInputPassword"));
			this.textInput_2 = <fairygui.GTextInput><any>(this.getChild("textInput"));
			this.textInputUBB = <fairygui.GTextInput><any>(this.getChild("textInputUBB"));
			this.textInputSignalLine = <fairygui.GTextInput><any>(this.getChild("textInputSignalLine"));
			this.ftxt = <fairygui.GRichTextField><any>(this.getChild("ftxt"));
			this.ftxtUbb = <fairygui.GRichTextField><any>(this.getChild("ftxtUbb"));
			this.shapeRect = <fairygui.GGraph><any>(this.getChild("shapeRect"));
			this.shapeCircle = <fairygui.GGraph><any>(this.getChild("shapeCircle"));
			this.shapeEmpty = <fairygui.GGraph><any>(this.getChild("shapeEmpty"));
		}
	}
}