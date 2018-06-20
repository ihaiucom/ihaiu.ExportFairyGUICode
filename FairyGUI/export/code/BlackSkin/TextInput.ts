/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fgui.BlackSkin {

	export class TextInput extends fairygui.GLabel {

		public grayed:fairygui.Controller;
		public n0:fairygui.GImage;
		public n4:fairygui.GImage;
		public title:fairygui.GTextInput;

		public static URL:string = "ui://s1yj9w6mp7th2k";

		public static createInstance():TextInput {
			return <TextInput><any>(fairygui.UIPackage.createObject("BlackSkin","TextInput"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.grayed = this.getController("grayed");
			this.n0 = <fairygui.GImage><any>(this.getChild("n0"));
			this.n4 = <fairygui.GImage><any>(this.getChild("n4"));
			this.title = <fairygui.GTextInput><any>(this.getChild("title"));
		}
	}
}