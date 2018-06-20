/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fgui.UIDefaultSkin {

	export class TextInput extends fairygui.GLabel {

		public grayed:fairygui.Controller;
		public n6:fairygui.GImage;
		public n7:fairygui.GImage;
		public title:fairygui.GTextInput;

		public static URL:string = "ui://snq31xvrraoc3p";

		public static createInstance():TextInput {
			return <TextInput><any>(fairygui.UIPackage.createObject("UIDefaultSkin","TextInput"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.grayed = this.getController("grayed");
			this.n6 = <fairygui.GImage><any>(this.getChild("n6"));
			this.n7 = <fairygui.GImage><any>(this.getChild("n7"));
			this.title = <fairygui.GTextInput><any>(this.getChild("title"));
		}
	}
}