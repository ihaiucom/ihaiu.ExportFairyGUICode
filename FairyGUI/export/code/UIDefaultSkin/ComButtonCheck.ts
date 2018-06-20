/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fgui.UIDefaultSkin {

	export class ComButtonCheck extends fairygui.GButton {

		public button:fairygui.Controller;
		public n1:fairygui.GImage;
		public n2:fairygui.GImage;
		public n3:fairygui.GImage;
		public n4:fairygui.GImage;
		public title:fairygui.GTextField;
		public icon:fairygui.GLoader;

		public static URL:string = "ui://snq31xvrsfsc3v";

		public static createInstance():ComButtonCheck {
			return <ComButtonCheck><any>(fairygui.UIPackage.createObject("UIDefaultSkin","ComButtonCheck"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.button = this.getController("button");
			this.n1 = <fairygui.GImage><any>(this.getChild("n1"));
			this.n2 = <fairygui.GImage><any>(this.getChild("n2"));
			this.n3 = <fairygui.GImage><any>(this.getChild("n3"));
			this.n4 = <fairygui.GImage><any>(this.getChild("n4"));
			this.title = <fairygui.GTextField><any>(this.getChild("title"));
			this.icon = <fairygui.GLoader><any>(this.getChild("icon"));
		}
	}
}