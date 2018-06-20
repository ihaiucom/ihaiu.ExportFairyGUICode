/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fgui.BlueSkin {

	export class InputTextArea extends fairygui.GLabel {

		public n0:fairygui.GImage;
		public title:fairygui.GTextInput;

		public static URL:string = "ui://stv9j6m6raoc1d";

		public static createInstance():InputTextArea {
			return <InputTextArea><any>(fairygui.UIPackage.createObject("BlueSkin","InputTextArea"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.n0 = <fairygui.GImage><any>(this.getChild("n0"));
			this.title = <fairygui.GTextInput><any>(this.getChild("title"));
		}
	}
}