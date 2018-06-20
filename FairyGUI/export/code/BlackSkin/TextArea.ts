/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fgui.BlackSkin {

	export class TextArea extends fairygui.GLabel {

		public n0:fairygui.GImage;
		public title:fairygui.GTextInput;

		public static URL:string = "ui://s1yj9w6mp7th2m";

		public static createInstance():TextArea {
			return <TextArea><any>(fairygui.UIPackage.createObject("BlackSkin","TextArea"));
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